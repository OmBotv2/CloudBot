let handler =  m => m.reply(`
╭─「 Donasi 」
│ • https://ibb.co/Tkv5cn9
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
