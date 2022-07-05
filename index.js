const Discord = require("discord.js")
require("dotenv").config()

const TOKEN ="OTkzMTgyNzU0Njc2MTU4NDk0.GXl58s.A-OlukC1sA_VkmlhMNIDNQt2BC5noyC3WpomO4"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("pronto a ser utilizado", () => {
    console.log('Logged in as ${client.user.tag}')
})


client.on("messageCreate", (message) => {
    if (message.content == "ola"){
        message.reply("Ola corno")
    }
})


client.login(process.env.TOKEN)