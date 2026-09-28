import config from "../config.js";
import { Module } from "../lib/plugins.js";

const clean = (v) => String(v || "").replace(/[*_`]/g, "");

Module({
  command: "owner",
  aliases: ["ownerinfo", "creator"],
  package: "owner",
  description: "Show configured owner and bot information"
})(async (message) => {
  try {

    const ownerName =
      config.ownerName || "*⎯꯭̽🍃 ꯭᪳𝐓𝐈𝐓𝐎🌸𓂃*";

    const ownerNumber =
      config.ownerNumber || "";

    const number = ownerNumber.replace(/\D/g, "");

    const vcard =
`BEGIN:VCARD
VERSION:3.0
FN:${ownerName}
ORG:ᰔᩚ𝐓ɪᴛᴏ⸙
TEL;type=CELL;type=VOICE;waid=${number}:+${number}
END:VCARD`;

    /* ====== FAKE QUOTE ====== */

    const fakeQuote = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        imageMessage: {
          jpegThumbnail: await (
            await fetch("https://files.catbox.moe/1p1g4x.jpg")
          ).arrayBuffer(),
          caption: "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᰔᴛɪᴛᴏ⸙",
        },
      },
    };

    /* ====== SEND ====== */

    await m.conn.sendMessage(
      m.from,
      {
        contacts: {
          displayName: ownerName,
          contacts: [
            {
              displayName: ownerName,
              vcard,
            },
          ],
        },

        contextInfo: {
          externalAdReply: {
            title: "*⎯꯭̽🍃 ꯭᪳𝐓ɪᴛᴏ⎯𝐗ᴍ𝐃꯭̽🌸𓂃*",
            body: "Tᴀᴘ ʜᴀʀᴇ ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ .💗👋",
            thumbnailUrl:
              "https://files.catbox.moe/1p1g4x.jpg",
            sourceUrl:
              "https://wa.me/" + number,
            mediaType: 1,
            renderLargerThumbnail: true,
            showAdAttribution: false,
          },
        },
      },
      {
        quoted: fakeQuote,
      }
    );

  } catch (err) {
    console.log(err);
    await m.reply("❌ Owner Contact Error");
  }
});