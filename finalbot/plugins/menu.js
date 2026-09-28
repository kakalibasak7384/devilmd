import os from "os";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const commandCatalog = require("../commandCatalog.json");
import config from "../config.js";
import { Module } from "../lib/plugins.js";

const runtime = (secs) => {
  const pad = (s) => String(s).padStart(2, "0");
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = Math.floor(secs % 60);
  return `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
};

const menuBody = (message) => {
  const ownerName = config.OWNER_NAME || config.ownerName || "OWNER";
  const botName = config.BOT_NAME || config.botName || "MD BOT";
  return `
*╭━━〄ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏ〄━━⊷*
*𐙚𓆩⚡𓆪 ${botName}*
*╰═══════════════⊷*

*╭━━〄ᴄᴜꜱᴛᴏᴍɪᴢɪɴɢ〄━━╮*
*𐙚👑 ᴏᴡɴᴇʀ : ➜ ${ownerName}*
*𐙚📦 ᴠᴇʀsɪᴏɴ  :➜𝟏.𝟶.𝟶*
*𐙚📡 ꜱᴜᴩᴩᴏʀᴛ :➜ᡕᠵデᡁ᠊╾━ 💥*
*𐙚📱ᴍᴏᴅᴇ➜𝙿𝚄𝙱𝙻𝙸𝙲*
*𐙚👨🏻‍💻ᴅᴇᴠᴇʟᴏᴩᴇʀ➜${ownerName}*
*𐙚⏰ᴜᴩᴛɪᴍᴇ➜${runtime(process.uptime())}*
*𐙚⏹️ꜱᴩᴀᴄᴇ➜${((os.totalmem()-os.freemem())/1073741824).toFixed(2)} / ${(os.totalmem()/1073741824).toFixed(2)} GB*
*𐙚🙍🏻ᴜꜱᴇʀ➜${message.pushName || "User"}*
*╰━━━━━━━━━━━━━━━╯*
*▰▱▰✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*
*𝐀𝙻𝙻 𝐌𝙴𝙽𝚄 𝐋𝙾𝙰𝐃𝐄𝙳✎ᝰ.*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝚃𝙸𝙲𝙰𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝚃𝙸𝙶𝚂𝚃𝙰𝚃𝚄𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝚃𝙸𝙶𝙲𝚂𝚃𝙰𝚃𝚄𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝚃𝙸𝚂𝚃𝙸𝙲𝙺𝙴𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝚃𝙸𝙿𝚁𝙾𝙼𝙾𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝚃𝙸𝙳𝙴𝙼𝙾𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝚄𝙳𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙻𝚂𝚄𝙳𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝚄𝙳𝙾𝙻𝙸𝚂𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝚂𝚃𝙰𝚃𝚄𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙱𝙻𝙾𝙲𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙱𝙻𝙾𝙲𝙺𝙻𝙸𝚂𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙱𝚁𝙾𝙰𝙳𝙲𝙰𝚂𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙻𝙴𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙻𝙼𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙵𝙾𝚁𝚆𝙰𝚁𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙵𝚄𝙻𝙻𝙿𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙵𝚆𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙴𝚃𝙱𝙸𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙴𝚃𝙽𝙰𝙼𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙴𝚃𝙿𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙹𝙸𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙹𝙾𝙸𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙴𝙰𝚅𝙴𝙰𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙸𝚂𝚃𝙶𝙲*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙴𝙽𝚃𝙸𝙾𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙾𝙳𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝚈𝙽𝙰𝙼𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝚈𝙿𝚁𝙸𝚅𝙰𝙲𝚈*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝚈𝚂𝚃𝙰𝚃𝚄𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙾𝚆𝙽𝙴𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝚁𝙸𝚅𝙰𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝚄𝙱𝙻𝙸𝙲*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝚁𝙴𝙵𝙸𝚇*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚀𝚄𝙾𝚃𝙴𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝙴𝙼𝙾𝚅𝙴𝙿𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙰𝚅𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙰𝚅𝙴𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙴𝚃𝙿𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙴𝚃𝙱𝙸𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙴𝚃𝙽𝙰𝙼𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚄𝙽𝙱𝙻𝙾𝙲𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚄𝙽𝙱𝙻𝙾𝙲𝙺𝙰𝙻𝙻*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄🎭ᴀɴɪᴍᴇ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙲𝙷𝙰𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚀𝚄𝙾𝚃𝙸𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚁𝙴𝙲𝙾𝙼𝙼𝙴𝙽𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚂𝙴𝙰𝚁𝙲𝙷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙾𝙻𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙰𝙸𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙴𝙶𝚄𝙼𝙸𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙽𝙴𝙺𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙷𝙸𝙽𝙾𝙱𝚄*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚆𝙰𝙸𝙵𝚄*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄♻️ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚄𝚁𝙻*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄⏬ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙿𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙵𝙱*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙸𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙸𝚃𝙲𝙻𝙾𝙽𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝙽𝚂𝚃𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙾𝙽𝙶*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝙻𝙰𝚈*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚈𝚃𝙼𝙿𝟹*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚈𝚃𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝙸𝙽𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙴𝙶𝙰*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 ⚙️ɢᴇɴᴇʀᴀʟ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙻𝙸𝚅𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝙰𝙸𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙼𝙴𝙽𝚄*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙸𝚂𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙴𝙽𝚄*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 👥ɢʀᴏᴜᴩ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙳𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙳𝙼𝙸𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝙽𝙾𝚄𝙽𝙲𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙿𝙿𝚁𝙾𝚅𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙻𝙾𝚂𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙼𝙾𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝚂𝙲*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙸𝚂𝙰𝙿𝙿𝙴𝙰𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙵𝚄𝙻𝙻𝙶𝙲𝙿𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙴𝚃𝙶𝙲𝙿𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙾𝙾𝙳𝙱𝚈𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝚁𝙾𝚄𝙿𝙸𝙽𝙵𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝚁𝙾𝚄𝙿𝚂𝚃𝙰𝚃𝚄𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝚂𝚃𝙰𝚃𝚄𝚂𝙰𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙲𝚂𝚃𝙰𝚃𝚄𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙷𝙸𝙳𝙴𝚃𝙰𝙶*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝙽𝚅𝙸𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝙽𝚅𝙸𝚃𝙴𝚄𝚂𝙴𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙺𝙸𝙲𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙺𝙸𝙲𝙺𝙰𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙴𝙰𝚅𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙾𝙲𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙾𝙿𝙴𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝙾𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝚁𝙾𝙼𝙾𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝙴𝙹𝙴𝙲𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝙴𝚀𝚄𝙴𝚂𝚃𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝙴𝚅𝙾𝙺𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝚃𝙰𝙶*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙴𝚃𝙶𝙿𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝚄𝙱𝙹𝙴𝙲𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙴𝚃𝚆𝙴𝙻𝙲𝙾𝙼𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙴𝚃𝙶𝙾𝙾𝙳𝙱𝚈𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙴𝚃𝙼𝙴𝙽𝚃𝙸𝙾𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙻𝙼𝙴𝙽𝚃𝙸𝙾𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙰𝙶𝙰𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙾𝚃𝙰𝙶*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚄𝙽𝙻𝙾𝙲𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚆𝙴𝙻𝙲𝙾𝙼𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳ᴄsᴏɴɢ*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 🔎ɪɴꜰᴏ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝙸𝙼𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙷𝙰𝚁𝙰𝙲𝚃𝙴𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝚈𝚁𝙸𝙲𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙰𝙽𝙶𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚆𝙴𝙰𝚃𝙷𝙴𝚁*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 📂ᴍᴇᴅɪᴀ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝙼𝙰𝙶𝙴𝙷𝙴𝙻𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝙼𝙰𝙶𝙴𝙸𝙽𝙵𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝙴𝙼𝙸𝙽𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝚃𝙸𝙲𝙺𝙴𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝟸𝙸𝙼𝙰𝙶𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙰𝙺𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙾𝙸𝙼𝙰𝙶𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚅𝙸𝙳𝙴𝙾𝟸𝙸𝙼𝙰𝙶𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚅𝚂*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 👾ᴍɪꜱᴄ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙱𝚃𝙿𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝙸𝙽𝙶*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝚁𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚄𝙿𝚃𝙸𝙼𝙴*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄🌐ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚆𝙸𝙺𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚈𝚃𝚂*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 🔩ᴛᴏᴏʟꜱ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙰𝙻𝙲*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙸𝚁𝙲𝙻𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙴𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚀𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙷𝙾𝚁𝚃𝚄𝚁𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝚂𝚆𝙴𝙱*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙾𝙼𝙿𝟹*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄ᴜɴᴄᴀᴛᴇɢᴏʀɪᴢᴇᴅ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙺𝙸𝙳*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 ✨ᴜᴛɪʟɪᴛʏ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝚃𝚂*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 👁️‍🗨️ᴠɪᴇᴡ ᴏɴᴄᴇ〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳😂*
*𐙚𝜗𝜚│ ͟͟͞͞➳😃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚅𝚅*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚅𝚅𝟸*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*

*╭━〄 ✦𝐀ᴅᴠᴀɴᴄᴇ 𝐋ᴇᴠᴇʟ✦ 〄━┈⊷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙿𝙴𝙴𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝙱𝙸𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝙿𝚁𝙴𝚂𝙴𝙽𝙲𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝙻𝙸𝙺𝙴𝚂𝚃𝙰𝚃𝚄𝚂*  
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝚅𝙸𝙴𝚆𝚂𝚃𝙰𝚃𝚄𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙻𝙴𝙰𝚁𝚃𝙼𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙻𝙾𝚆𝙽𝙴𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙵𝙸𝚇𝙾𝚆𝙽𝙴𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙿𝚁𝙾𝙼𝙾𝚃𝙴𝙰𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙼𝙾𝚃𝙴𝙰𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙺𝙸𝙲𝙺𝙰𝙳𝙼𝙸𝙽𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙲𝚂𝚃𝙰𝚃𝚄𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝚁𝙾𝚄𝙿𝙹𝙸𝙳*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙸𝚂𝚃𝙰𝙳𝙼𝙸𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙸𝚂𝚃𝙾𝙽𝙻𝙸𝙽𝙴*
*𐙚𝜗𝜚│ ͟͟͟͞͞➳𝚈𝚃𝙼𝙿𝟺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙸𝙺𝚃𝙾𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙷𝚁𝙴𝙰𝙳𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙰𝙿𝙲𝚄𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙿𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙿𝙾𝚃𝙸𝙵𝚈*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙷𝙰𝚃𝙶𝙿𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙴𝙼𝙸𝙽𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙴𝙿𝚂𝙴𝙴𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙻𝙻𝙰𝙼𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙸𝚂𝚃𝚁𝙰𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝚁𝙾𝚀*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙸𝙳𝙴𝚃𝙴𝙲𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙸𝚃𝙴𝚇𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚆𝙰𝚁𝙼𝙶𝙿𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙶𝙾𝙾𝙶𝙻𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙴𝙵𝙸𝙽𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚆𝙸𝙺𝙸𝙿𝙴𝙳𝙸𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝚈𝙸𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝚄𝚁𝚁𝙴𝙽𝙲𝚈*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙾𝙽𝚅𝙴𝚁𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝚁𝙰𝙽𝚂𝙻𝙰𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝚁*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙾𝚄𝚁𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙸𝙽𝚈𝚄𝚁𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚀𝚁𝙲𝙾𝙳𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝚃𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙾𝚅𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙹𝙾𝙺𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙰𝙳𝙹𝙾𝙺𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙳𝚅𝙸𝙲𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙵𝙰𝙲𝚃*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚀𝚄𝙾𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝟾𝙱𝙰𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙵𝙻𝙸𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙳𝙸𝙲𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙰𝚃𝙷*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚆𝙾𝚁𝙳𝙲𝙷𝙰𝙸𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚃𝙸𝙲𝚃𝙰𝙲𝚃𝙾𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚆𝙷𝙾𝙰𝙼𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝙼𝙰𝙶𝙴𝙷𝙴𝙻𝙿*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝙼𝙰𝙶𝙴𝙸𝙽𝙵𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝙴𝙼𝙾𝚅𝙴𝙱𝙶*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝙸𝙼𝙴𝙱𝙸𝚃𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝙸𝙼𝙴𝙱𝙾𝙽𝙺*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝙸𝙼𝙴𝙱𝚄𝙻𝙻𝚈*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝙸𝙼𝙴𝙺𝙸𝙻𝙻*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙺𝙸𝚈𝙰𝙼𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝙽𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙰𝚂𝚄𝙽𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙱𝙾𝚁𝚄𝚃𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳ 𝙳𝙾𝚁𝙰𝙴𝙼𝙾𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙴𝙻𝙰𝙸𝙽𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙴𝙼𝙸𝙻𝙸𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙴𝚁𝚉𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝙽𝙾𝚁𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙸𝚃𝙰𝙲𝙷𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙺𝙰𝙺𝙰𝚂𝙷𝙸*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙰𝙳𝙰𝚁𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙼𝙸𝙺𝙰𝚂𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙽𝙰𝚁𝚄𝚃𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙽𝙴𝚉𝚄𝙺𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙰𝙺𝚄𝚁𝙰*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚂𝙰𝚂𝚄𝙺𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙹𝙴𝙽𝙽𝙸𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙹𝙸𝚂𝙾𝙾*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝙾𝚂𝙴*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝚁𝚈𝚄*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙹𝙸𝙽*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙱𝚃𝚂*
*𐙚𝜗𝜚│ ͟͟͞͞➳𝙴𝚇𝙾*
*╰════════════════⊷*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*
${catalogMenu()}
> *┈ ͟͟͞͞➳${ownerName} 乂 𝐌𝐃💀*
*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*`;
};

const CATALOG_SKIP_CATEGORIES = new Set(["ᴄʜᴜᴅᴀ"]);

const catalogCommand = (command) => String(command)
  .toUpperCase()
  .replace(/[^A-Z0-9]/g, (ch) => ch);

const catalogMenu = () => {
  const blocks = [];
  for (const [category, commands] of Object.entries(commandCatalog || {})) {
    if (CATALOG_SKIP_CATEGORIES.has(category)) continue;
    if (!Array.isArray(commands) || !commands.length) continue;

    const lines = commands.map((cmd) =>
      `*𐙚𝜗𝜚│ ͟͟͞͞➳${catalogCommand(cmd)}*`
    );

    blocks.push([
      `*╭━〄${category}〄━┈⊷*`,
      ...lines,
      `*╰════════════════⊷*`,
      `*▱▰▱✧⋄⋆⋅⋆⋄✧⋄⋆⋅⋆⋄✧▱▰*`,
    ].join("\n"));
  }
  return blocks.join("\n");
};

const MENU_CATEGORY_ALIASES = {
  system: "system", info: "info", owner: "owner", anime: "anime",
  convert: "convert", converter: "convert", download: "download",
  general: "general", group: "group", media: "media", misc: "misc",
  search: "search", tools: "tools", utility: "utility", utilities: "utility",
  viewonce: "view once", view: "view once", customizing: "customizing",
};

function categoryMenu(body, requested) {
  const key = MENU_CATEGORY_ALIASES[String(requested || "").trim().toLowerCase()];
  if (!key) return null;
  const blocks = String(body).split(/\n(?=\*╭)/).filter(Boolean);
  const hit = blocks.find((block) => {
    const b = block.toLowerCase();
    return b.includes(key) || (key === "system" && b.includes("ꜱʏꜱᴛᴇᴍ"));
  });
  if (!hit) return null;
  return [
    `*╭━━〄ᴍᴇɴᴜ〄━━┈⊷*`,
    hit,
    `*╰━━━━━━━━━━━━━━━━━━⊷*`,
  ].join("\n");
}

Module({
  command: "menu",
  aliases: ["listmenu"],
  package: "general",
  description: "Full XMD BOT command menu",
})(async (message, match) => {
  const videoUrl = config.MENU_VIDEO_URL;
  const audioUrl = config.MENU_AUDIO_URL;
  const waJid = config.WA_CHANNEL_JID;
  const waName = config.BOT_NAME;
  const fullText = menuBody(message);
  const requestedCategory = String(match || "").trim().split(/\s+/)[0];
  const selectedText = requestedCategory ? categoryMenu(fullText, requestedCategory) : null;
  const text = selectedText || fullText;

  // `.menu <category>` is a text-only category view. The original `.menu`
  // behaviour remains unchanged (video + optional audio).
  if (requestedCategory) {
    if (!selectedText) {
      return message.send(
        `❌ Unknown menu category: ${requestedCategory}\n\n` +
        `Available: system, customizing, owner, anime, convert, download, general, group, info, media, misc, search, tools, utility, view`
      );
    }
    await message.react("📂").catch(() => {});
    return message.send(text);
  }

  const contextInfo = {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: waJid,
      newsletterName: waName,
      serverMessageId: -1,
    },
  };

  try {
    await message.react("📜");
    if (!videoUrl) throw new Error("MENU_VIDEO_URL is not configured");

    // IMPORTANT: gifPlayback is intentionally false. The menu must remain a real
    // MP4 so its original audio is preserved and WhatsApp shows video controls.
    await message.conn.sendMessage(message.from, {
      video: { url: videoUrl },
      mimetype: "video/mp4",
      gifPlayback: false,
      caption: text,
      contextInfo,
    }, { quoted: message.gift });

    // Optional separate menu song/audio requested by the source specification.
    if (audioUrl) {
      await new Promise((r) => setTimeout(r, 1200));
      await message.conn.sendMessage(message.from, {
        audio: { url: audioUrl },
        mimetype: "audio/mp4",
        ptt: false,
        contextInfo,
      }, { quoted: message.gift });
    }
  } catch (err) {
    console.error("[menu] failed:", err?.message || err);
    try {
      await message.conn.sendMessage(message.from, {
        text: `${text}\n\n❌ Menu media failed: ${err?.message || "unknown error"}`,
        contextInfo,
      }, { quoted: message.gift });
    } catch (e) {
      console.error("[menu] fallback failed:", e?.message || e);
    }
  }
});

Module({
  command: "alive",
  package: "general",
  description: "Check bot status",
})(async (message) => {
  await message.send(`*🜲›${config.BOT_NAME || "MD BOT"}* is online\n\n⏱️ Uptime: ${runtime(process.uptime())}\n💾 RAM: ${(process.memoryUsage().rss/1024/1024).toFixed(1)} MB\n\n> Powered by ${config.OWNER_NAME || "OWNER"}`);
});
