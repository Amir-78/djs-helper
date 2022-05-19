# await Inviter()

```javascript
const { Client, Intents, MessageEmbed } = require('discord.js');
const djsHelper = require('djs-helper');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!, guilds: ${djsHelper.guildsCount(client)}`);

});

client.on("guildMemberAdd", async (member) => {

    await djsHelper.Inviter(client, member);
    if (member.invite) {
        console.log(member.invite)
    }

});

client.login("token");
```
