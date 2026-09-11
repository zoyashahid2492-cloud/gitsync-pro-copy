import React, { useCallback, useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import RepoInput from "@/components/repo/RepoInput";
import FileTree from "@/components/repo/FileTree";
import ImportedFileList from "@/components/repo/ImportedFileList";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Github, Loader2, Download } from "lucide-react";



export default function RepoImport() {
  const { toast } = useToast();
  const [repo, setRepo] = useState("");
  const [files, setFiles] = useState([]);
  const [pulling, setPulling] = useState(false);
  const [importing, setImporting] = useState(false);
  const [selected, setSelected] = useState(new Set());
  const [imported, setImported] = useState([]);
  const [loadingImported, setLoadingImported] = useState(true);

  const loadImported = useCallback(async () => {
    setLoadingImported(true);
    try {
      const list = await base44.entities.ImportedFile.list("-updated_date", 100);
      setImported(list);
    } catch (e) {
      // ignore
    } finally {
      setLoadingImported(false);
    }
  }, []);

  useEffect(() => {
    loadImported();
  }, [loadImported]);

  const handlePull = async (full) => {
    setRepo(full);
    setPulling(true);
    setFiles([]);
    setSelected(new Set());
    try {
      const res = await base44.functions.invoke("listRepoFiles", { repo: full });
      setFiles(res.data.files || []);
      if (res.data.truncated) {
        toast({ title: "Repo is large", description: "Showing the first files — some were truncated.", variant: "default" });
      }
    } catch (e) {
      toast({ title: "Failed to read repo", description: e.response?.data?.error || e.message, variant: "destructive" });
    } finally {
      setPulling(false);
    }
  };

  const toggleSelect = (path) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const toggleAll = (allPaths) => {
    setSelected((prev) => {
      if (allPaths.every((p) => prev.has(p))) return new Set();
      return new Set(allPaths);
    });
  };

  const handleImport = async () => {
    if (selected.size === 0) return;
    setImporting(true);
    try {
      const paths = Array.from(selected);
      const contents = await Promise.all(
        paths.map((path) =>
          base44.functions.invoke("getRepoFileContent", { repo, path }).then((res) => res.data)
        )
      );
      const records = paths.map((path, i) => {
        const name = path.split("/").pop();
        const f = files.find((x) => x.path === path);
        return {
          repo_full_name: repo,
          path,
          name,
          content: contents[i]?.content || "",
          size: f?.size ?? contents[i]?.size ?? 0,
          sha: contents[i]?.sha || "",
        };
      });
      await base44.entities.ImportedFile.bulkCreate(records);
      toast({ title: `Imported ${records.length} file${records.length > 1 ? "s" : ""}` });
      setSelected(new Set());
      await loadImported();
    } catch (e) {
      toast({ title: "Import failed", description: e.message, variant: "destructive" });
    } finally {
      setImporting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await base44.entities.ImportedFile.delete(id);
      setImported((prev) => prev.filter((f) => f.id !== id));
    } catch (e) {
      toast({ title: "Delete failed", description: e.message, variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-foreground text-background flex items-center justify-center">
              <Github className="h-5 w-5" />
            </div>
            <h1 className="text-2xl font-heading font-semibold tracking-tight">Pull from GitHub</h1>
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Enter a repository to browse its files and import the ones you need into this app.
          </p>
        </header>

        <div className="rounded-2xl border bg-card p-5 mb-6">
          <RepoInput onPull={handlePull} loading={pulling} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <section className="lg:col-span-3 rounded-2xl border bg-card overflow-hidden flex flex-col min-h-[420px]">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div>
                <h2 className="font-heading font-medium">File browser</h2>
                {repo && <p className="text-xs text-muted-foreground mt-0.5">{repo}</p>}
              </div>
              {selected.size > 0 && (
                <Button onClick={handleImport} disabled={importing} size="sm">
                  {importing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                  <span className="ml-2">Import {selected.size}</span>
                </Button>
              )}
            </div>
            {pulling ? (
              <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
                <Loader2 className="h-5 w-5 animate-spin mr-2" /> Reading repository…
              </div>
            ) : files.length > 0 ? (
              <FileTree files={files} selected={selected} onToggleSelect={toggleSelect} onToggleAll={toggleAll} />
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
                Pull a repository to see its files.
              </div>
            )}
          </section>

          <section className="lg:col-span-2 rounded-2xl border bg-card overflow-hidden flex flex-col min-h-[420px]">
            <div className="px-5 py-4 border-b">
              <h2 className="font-heading font-medium">Imported files</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{imported.length} stored in this app</p>
            </div>
            <div className="flex-1 overflow-auto p-2">
              <ImportedFileList files={imported} onDelete={handleDelete} loading={loadingImported} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}