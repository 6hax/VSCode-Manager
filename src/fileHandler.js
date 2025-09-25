import fs from "fs";
import path from "path";

const settingsFile = path.resolve("data", "settings.json");

export function readSettings() {
  if (!fs.existsSync(settingsFile)) return [];
  return JSON.parse(fs.readFileSync(settingsFile, "utf8"));
}

export function writeSettings(settings) {
  fs.mkdirSync(path.dirname(settingsFile), { recursive: true });
  fs.writeFileSync(settingsFile, JSON.stringify(settings, null, 2));
}