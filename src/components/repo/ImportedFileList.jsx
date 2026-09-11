import React from "react";
import { File as FileIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImportedFileList({ files, onDelete, loading }) {
  if (loading && files.length === 0) {
    return <div className="text-sm text-muted-foreground p-4">Loading imported files…</div>;
  }
  if (files.length === 0) {
    return <div className="text-sm text-muted-foreground p-4">No files imported yet.</div>;
  }
  return (
    <div className="flex flex-col gap-1">
      {files.map((f) => (
        <div key={f.id} className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-accent/50 group">
          <FileIcon className="h-4 w-4 text-muted-foreground shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="text-sm truncate">{f.path}</div>
            <div className="text-xs text-muted-foreground truncate">{f.repo_full_name}</div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100"
            onClick={() => onDelete(f.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}