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

const port = process.env["SERVER_PORT"] || 3000;
const server = app.listen(port, () => console.log(`Server started on port ${port}...`));

const closeGracefully = (signal) => {
  console.log(`Terminating with signal ${signal}`);

  server.close();
  process.exit();
};
process.on("SIGINT", closeGracefully);
process.on("SIGTERM", closeGracefully);
