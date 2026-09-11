import { createClientFromRequest } from "npm:@base44/sdk@0.8.40";

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const repo = (body.repo || "").trim();
    const branch = (body.branch || "").trim() || "HEAD";
    if (!repo || !repo.includes("/")) {
      return Response.json({ error: "Invalid repo. Use owner/repo format." }, { status: 400 });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection("github");
    const [owner, repoName] = repo.split("/");
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "base44-app",
    };

    // Resolve the default branch when caller didn't pass one.
    let effectiveBranch = branch;
    if (!body.branch) {
      const metaRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, { headers });
      if (!metaRes.ok) {
        const text = await metaRes.text();
        return Response.json({ error: `Repository not accessible (${metaRes.status}). Check the name and that your connected GitHub account has access.`, status: metaRes.status, detail: text }, { status: 502 });
      }
      const meta = await metaRes.json();
      effectiveBranch = meta.default_branch || "HEAD";
    }

    const treeUrl = `https://api.github.com/repos/${owner}/${repoName}/git/trees/${effectiveBranch}?recursive=1`;
    const res = await fetch(treeUrl, { headers });
    if (!res.ok) {
      const text = await res.text();
      return Response.json({ error: `GitHub API ${res.status}: ${text}` }, { status: 502 });
    }
    const data = await res.json();

    const files = (data.tree || [])
      .filter((n) => n.type === "blob")
      .map((n) => ({
        path: n.path,
        name: n.path.split("/").pop(),
        type: "file",
        size: n.size,
        sha: n.sha,
      }));

    return Response.json({
      repo,
      branch: effectiveBranch,
      truncated: data.truncated === true,
      files,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}