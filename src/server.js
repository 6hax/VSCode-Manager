import express from "express";
import settingsRoutes from "./routes/settingsRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.use("/api/settings", settingsRoutes);

app.listen(PORT, () => {
  console.log(`VSCode Manager rodando em http://localhost:${PORT}`);
});