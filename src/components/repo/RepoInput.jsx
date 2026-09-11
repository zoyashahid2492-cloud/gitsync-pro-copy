import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Loader2, Search } from "lucide-react";

export default function RepoInput({ onPull, loading }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    // accept "owner/repo" or a full github URL
    let normalized = trimmed;
    if (normalized.startsWith("http")) {
      const parts = normalized.replace(/\/$/, "").split("/");
      normalized = `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
    }
    onPull(normalized);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <div className="relative flex-1">
        <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="owner/repo  (e.g. facebook/react)"
          className="pl-10 h-11"
          disabled={loading}
        />
      </div>
      <Button type="submit" disabled={loading || !value.trim()} className="h-11 px-6">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
        <span className="ml-2">Pull repo</span>
      </Button>
    </form>
  );
}