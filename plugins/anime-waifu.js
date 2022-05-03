import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, '𝕁𝔸ℕ𝔾𝔸ℕ 𝕃𝕌ℙ𝔸 𝔻𝕆ℕ𝔸𝕋𝔼 ℕ𝕆𝕄𝕆ℝ 𝔾𝕆ℙ𝔸𝕐 𝔻𝔸ℕ 𝔻𝔸ℕ𝔸 𝕀ℕ𝕀 𝕐𝔸 𝕂𝔸𝕂 6282239202895', author, json.url, [['waifu', `${usedPrefix}waifu`]], m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
