/**
 * Production entry point for the EasyFind Property Solutions website.
 * Serves the built React SPA and its legal-page history fallbacks.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "..", "dist");
const app = express();

app.use(express.static(distPath));

// SPA fallback: client-side routes (including legal pages) serve index.html.
app.use((req, res, next) => {
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) next(err);
  });
});

const port = Number(process.env.PORT) || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`EasyFind website listening on port ${port}`);
});
