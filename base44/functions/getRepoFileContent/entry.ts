import { createClientFromRequest } from "npm:@base44/sdk@0.8.40";

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const repo = (body.repo || "").trim();
    const path = (body.path || "").trim();
    const branch = (body.branch || "").trim() || "HEAD";
    if (!repo || !repo.includes("/") || !path) {
      return Response.json({ error: "repo (owner/repo) and path are required." }, { status: 400 });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection("github");
    const [owner, repoName] = repo.split("/");
    const url = `https://api.github.com/repos/${owner}/${repoName}/contents/${path}?ref=${branch}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "base44-app",
      },
    });
    if (!res.ok) {
      const text = await res.text();
      return Response.json({ error: `GitHub API ${res.status}: ${text}` }, { status: 502 });
    }
    const data = await res.json();

    let content = "";
    if (data.encoding === "base64" && data.content) {
      try {
        const binary = atob(data.content.replace(/\n/g, ""));
        content = new TextDecoder("utf-8").decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)));
      } catch (e) {
        content = "";
      }
    }
    return Response.json({ path, content, sha: data.sha, size: data.size });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}