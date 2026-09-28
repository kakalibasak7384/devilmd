import { Module } from "../lib/plugins.js";
const disabled = [
"doublekill", "onekill", "triplekill",
  "systemuicrash", "animekill", "crash", "bugcrash", "virtex", "buttonvirus"
];
for (const command of disabled) {
  Module({ command, package: "disabled", description: "Disabled command" })(async (m) => {
    return m.send("❌ This command is disabled in this build.");
  });
}
