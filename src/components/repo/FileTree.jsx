import React, { useMemo, useState } from "react";
import { ChevronRight, ChevronDown, File as FileIcon, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

// files: [{ path, name, type: "file"|"dir", size? }]
function buildTree(files) {
  const root = { name: "", path: "", type: "dir", children: {} };
  for (const f of files) {
    const parts = f.path.split("/");
    let node = root;
    parts.forEach((part, i) => {
      const isLast = i === parts.length - 1;
      if (!node.children[part]) {
        node.children[part] = {
          name: part,
          path: parts.slice(0, i + 1).join("/"),
          type: isLast ? f.type : "dir",
          children: {},
          ...(isLast && f.type === "file" ? { size: f.size } : {}),
        };
      }
      node = node.children[part];
    });
  }
  return root;
}

function NodeRow({ node, depth, selected, onToggleSelect }) {
  const [open, setOpen] = useState(depth < 1);
  const isDir = node.type === "dir";
  const childList = Object.values(node.children).sort((a, b) =>
    a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1
  );

  return (
    <div>
      <button
        type="button"
        onClick={() => (isDir ? setOpen((o) => !o) : onToggleSelect(node.path))}
        className={cn(
          "flex items-center gap-2 w-full text-left py-1.5 pr-3 rounded-md hover:bg-accent/60 transition-colors",
          !isDir && selected && "bg-primary/10 hover:bg-primary/15"
        )}
        style={{ paddingLeft: depth * 16 + 8 }}
      >
        {isDir ? (
          <>
            {open ? <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />}
            {open ? <FolderOpen className="h-4 w-4 shrink-0 text-primary/70" /> : <Folder className="h-4 w-4 shrink-0 text-primary/70" />}
            <span className="text-sm font-medium">{node.name}</span>
          </>
        ) : (
          <>
            <span className="w-4" />
            <FileIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="text-sm">{node.name}</span>
            <span className="ml-auto text-xs text-muted-foreground">{node.size != null ? `${node.size} B` : ""}</span>
          </>
        )}
      </button>
      {isDir && open && (
        <div>
          {childList.map((c) => (
            <NodeRow key={c.path} node={c} depth={depth + 1} selected={selected} onToggleSelect={onToggleSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileTree({ files, selected, onToggleSelect, onToggleAll }) {
  const tree = useMemo(() => buildTree(files), [files]);
  const allPaths = useMemo(() => files.filter((f) => f.type === "file").map((f) => f.path), [files]);
  const allSelected = allPaths.length > 0 && allPaths.every((p) => selected.has(p));

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <span className="text-sm font-medium">{files.length} entries</span>
        <button
          type="button"
          onClick={() => onToggleAll(allPaths)}
          className="text-xs text-primary hover:underline"
        >
          {allSelected ? "Clear all" : "Select all"}
        </button>
      </div>
      <div className="flex-1 overflow-auto p-2">
        {Object.values(tree.children).map((c) => (
          <NodeRow key={c.path} node={c} depth={0} selected={selected} onToggleSelect={onToggleSelect} />
        ))}
      </div>
    </div>
  );
}