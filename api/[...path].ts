import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch, { Headers, RequestInit } from "node-fetch";

const API_ENDPOINT = "https://dummyapi.io/data/v1";
const API_KEY = "628cfd76d7c13ab387fde193";

export default async (req: VercelRequest, res: VercelResponse) => {
  // Takes vercels mangled request url... and massages it into a regular path stripping out the /api prefix
  // e.g. "/api/posts?limit=10&page=1&...path=posts" -> "/posts?limit=10&page=1"
  const requestPath = req
    .url!.replace("/api", "")
    .split(/[?|&]/)
    .filter((p) => !p.startsWith("..."))
    .join("&")
    .replace("&", "?");

  const targetUrl = `${API_ENDPOINT}${requestPath}`;

  try {
    const headers = new Headers();
    headers.set("Authorization", req.headers["authorization"] || "");
    headers.set("Content-Type", "application/json");
    headers.set("app-id", API_KEY);

    const fetchOptions: RequestInit = {
      method: req.method,
      headers: headers,
      // Include body if method is POST, PUT, PATCH
      ...(req.method !== "GET" && req.method !== "HEAD"
        ? { body: JSON.stringify(req.body) }
        : {}),
    };

    const response = await fetch(targetUrl, fetchOptions);

    
    console.info("post response", response);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    console.info("post response: json", response);

    res.status(response.status).json(data);
  } catch (error) {
    console.error("post response error", error);
    res.status(500).json({
      message: error.message,
    });
  }
};
