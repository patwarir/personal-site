const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.set("trust proxy", ip => ip === "127.0.0.1");
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "script-src": [ "'self'", "'unsafe-inline'", "rajatpatwari.com" ]
    }
  }
}))

app.use(express.static(path.join(__dirname, "..", "build")));

app.listen(3000, () => console.log("Server started..."));
