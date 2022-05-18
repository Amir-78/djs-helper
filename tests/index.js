const { Client, Intents, MessageEmbed } = require('discord.js');
const djsHelper = require('../index');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(djsHelper)
});

client.on('messageCreate', async (message) => {
    if (!message) return;
    if (message.startsWith('!extract-emojis')) {
        let emojis = DjsH.matchEmojis(message.content, true);
        if (emojis.length === 0) {
            let embed = new MessageEmbed()
                .setTitle("Extract Emojis")
                .setDescription(":x: No emoji found!")
                .setColor(DjsH.Colors.HEX.Red)
            return message.reply({ embeds: [embed] });
        } else {
            let embed = new MessageEmbed()
                .setTitle("Extract Emojis")
                .setDescription(`Emojis found: \`${emojis.join(',')}\``)
                .setColor(DjsH.Colors.HEX.Aqua)
            message.reply({ embeds: [embed] });
        }
    }
});

client.login('ODUwNjY5NDQ5OTgzODE5ODE4.YLtFqQ.SXFnemq_qw3DZlHmjsFWIxDDbmk');