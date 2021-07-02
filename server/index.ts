import express from "express";
import helmet from "helmet";
import path from "path";

const app = express();

app.set("trust proxy", true);
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "script-src": [ "'self'", "'unsafe-inline'", "rajatpatwari.com" ]
    }
  }
}));

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));
app.get("/*", (_, res) => res.sendFile(path.join(buildPath, "index.html")));

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}...`));
