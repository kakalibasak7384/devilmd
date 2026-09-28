import { Module } from "../lib/plugins.js";
import { generateWAMessageContent, generateWAMessageFromContent, generateMessageID } from "@whiskeysockets/baileys";
import crypto from "crypto";

async function admin(m) {
  if (!m?.isGroup) { await m.send("❌ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪɴ ᴀ ɢʀᴏᴜᴘ.").catch(()=>{}); return false; }
  await m.loadGroupInfo?.();
  if (!(m.isAdmin || m.isGroupAdmin || m.isFromMe || m.isfromMe)) { await m.send("❌ ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ/ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs.").catch(()=>{}); return false; }
  if (!m.isBotAdmin) { await m.send("❌ ʙᴏᴛ ɴᴇᴇᴅs ᴀᴅᴍɪɴ ᴘᴇʀᴍɪssɪᴏɴ.").catch(()=>{}); return false; }
  return true;
}

async function relayStatus(conn, jid, storyData) {
  if (!jid?.endsWith("@g.us")) throw new Error("Group status requires a group chat");
  if (typeof conn?.relayMessage !== "function") throw new Error("Group-status relay is unavailable");
  const messageSecret = crypto.randomBytes(32);
  let inner;
  if (storyData?.text != null) {
    inner = { extendedTextMessage: {
      text: String(storyData.text),
      backgroundArgb: storyData.backgroundColor ?? 0xff128c7e,
      textArgb: 0xffffffff,
      font: Number.isInteger(storyData.font) ? storyData.font : 1,
      contextInfo: { isGroupStatus: true }
    }};
  } else {
    const generated = await generateWAMessageContent(storyData, { upload: conn.waUploadToServer });
    inner = generated?.message || generated;
    if (!inner) throw new Error("Could not build group-status payload");
    for (const value of Object.values(inner)) if (value && typeof value === "object") value.contextInfo = { ...(value.contextInfo || {}), isGroupStatus: true };
  }
  inner.messageContextInfo = { messageSecret };
  const envelope = { messageContextInfo: { messageSecret }, groupStatusMessageV2: { message: inner } };
  const generated = generateWAMessageFromContent(jid, envelope, { userJid: conn?.user?.id });
  await conn.relayMessage(jid, generated.message, { messageId: generated.key?.id || generateMessageID() });
}

async function storyFromQuoted(q, caption) {
  const type = q?.type || q?.mtype || "";
  if (!q || !["imageMessage","videoMessage","audioMessage","stickerMessage"].includes(type)) return null;
  const media = await q.download();
  if (!media?.length) throw new Error("Media download failed");
  if (type === "imageMessage") return { image: media, caption: caption || q.body || q.caption || "" };
  if (type === "videoMessage") return { video: media, caption: caption || q.body || q.caption || "" };
  if (type === "audioMessage") return { audio: media, mimetype: q.mimetype || "audio/ogg; codecs=opus", ptt: !!q.ptt };
  return { sticker: media };
}

Module({command:"gstatus", aliases:["gs","gcstatus","groupstatus","poststatus"], package:"group", description:"Post text or replied media as group status"})(async(m,a)=>{
  try {
    if (!(await admin(m))) return;
    const caption=String(a||"").trim();
    const quoted=m.quoted;
    const media=await storyFromQuoted(quoted,caption);
    await m.react("⏳").catch(()=>{});
    if (media) await relayStatus(m.conn,m.from,media);
    else if (caption) await relayStatus(m.conn,m.from,{text:caption,backgroundColor:0xff128c7e,font:1});
    else return m.send("❌ ᴛᴇxᴛ ᴅᴀᴏ ʙᴀ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ/ᴀᴜᴅɪᴏ/sᴛɪᴄᴋᴇʀ ʀᴇᴘʟʏ ᴋᴏʀᴏɴ.");
    await m.react("✅").catch(()=>{});
    return m.send("╭━━〔 ✦ 𝐆𝐒𝐓𝐀𝐓𝐔𝐒 ✦ 〕━━╮\n┃ 🟢 sᴜᴄᴄᴇssғᴜʟʟʏ ᴘᴏsᴛᴇᴅ\n┃ 📦 ᴛᴇxᴛ/ᴍᴇᴅɪᴀ sᴜᴘᴘᴏʀᴛᴇᴅ\n╰━━━━━━━━━━━━━━━━━━╯");
  } catch(e) { await m.react("❌").catch(()=>{}); return m.send(`❌ ɢsᴛᴀᴛᴜs ᴇʀʀᴏʀ : ${String(e?.message||e).slice(0,180)}`); }
});

Module({command:"gstatusall", aliases:["gsall"], package:"group", description:"Post text or replied media to group statuses"})(async(m,a)=>{
  try {
    if (!(await admin(m))) return;
    const caption=String(a||"").trim();
    const media=await storyFromQuoted(m.quoted,caption);
    if (!media && !caption) return m.send("❌ ᴛᴇxᴛ ᴅᴀᴏ ʙᴀ ᴍᴇᴅɪᴀ ʀᴇᴘʟʏ ᴋᴏʀᴏɴ.");
    const story=media || {text:caption,backgroundColor:0xff128c7e,font:1};
    const groups=await m.conn.groupFetchAllParticipating();
    const ids=Object.keys(groups||{});
    let sent=0,failed=0;
    for(const id of ids){ try { await relayStatus(m.conn,id,story); sent++; } catch(e){ failed++; console.error("[gstatusall]",id,e?.message||e); } }
    return m.send(`╭━━〔 ɢsᴛᴀᴛᴜsᴀʟʟ 〕━━╮\n┃ ᴛᴏᴛᴀʟ : ${ids.length}\n┃ sᴇɴᴛ : ${sent}\n┃ ғᴀɪʟᴇᴅ : ${failed}\n╰━━━━━━━━━━━━━━╯`);
  } catch(e) { return m.send(`❌ ɢsᴛᴀᴛᴜsᴀʟʟ ᴇʀʀᴏʀ : ${String(e?.message||e).slice(0,180)}`); }
});
