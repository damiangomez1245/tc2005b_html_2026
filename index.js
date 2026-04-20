import express from "express";
import expressStaticGzip from "express-static-gzip";

const app = express();

// 🔥 ESTO es lo importante
app.use("/", expressStaticGzip("public", {
  enableBrotli: true,
  orderPreference: ["br", "gz"],
}));

app.listen(8080, () => {
  console.log("http://localhost:8080");
});