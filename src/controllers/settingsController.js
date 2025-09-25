import fs from "fs";
import path from "path";
import os from "os";

const settingsFolder = path.resolve("data");
if (!fs.existsSync(settingsFolder)) fs.mkdirSync(settingsFolder);

function getVSCodeSettingsPath() {
  switch (os.platform()) {
    case "win32":
      return path.join(process.env.APPDATA, "Code", "User", "settings.json");
    case "darwin":
      return path.join(os.homedir(), "Library", "Application Support", "Code", "User", "settings.json");
    case "linux":
      return path.join(os.homedir(), ".config", "Code", "User", "settings.json");
    default:
      throw new Error("SO não suportado!");
  }
}

export function applySetting(req, res) {
  const { name } = req.params;
  const settingPath = path.join("data", name + ".txt");

  if (!fs.existsSync(settingPath)) {
    return res.status(404).json({ error: "Setting não encontrada" });
  }

  const vscodePath = getVSCodeSettingsPath();
  const content = fs.readFileSync(settingPath, "utf8");
  fs.writeFileSync(vscodePath, content, "utf8");

  res.json({ message: `Setting "${name}" aplicada no VSCode!` });
}


export function listSettings(req, res) {
  const files = fs.readdirSync(settingsFolder).filter(f => f.endsWith(".txt"));
  const settings = files.map(f => {
    const content = fs.readFileSync(path.join(settingsFolder, f), "utf8");
    return { name: f.replace(".txt", ""), config: content };
  });
  res.json(settings);
}

export function createSetting(req, res) {
  const { name, config } = req.body;
  if (!name || !config) return res.status(400).json({ error: "Dados inválidos" });

  const filePath = path.join(settingsFolder, name + ".txt");
  fs.writeFileSync(filePath, config, "utf8");

  res.json({ message: "Setting criada com sucesso!" });
}

export function removeSetting(req, res) {
  const { name } = req.params;
  const filePath = path.join(settingsFolder, name + ".txt");
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: "Setting não encontrada" });

  fs.unlinkSync(filePath);
  res.json({ message: "Setting removida!" });
}

// Ler uma setting específica pra aplicar
export function getSetting(req, res) {
  const { name } = req.params;
  const filePath = path.join(settingsFolder, name + ".txt");
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: "Setting não encontrada" });

  const content = fs.readFileSync(filePath, "utf8");
  res.type("text/plain").send(content);
}
