# djs-helper
**djs-helper** is a JavaScript library that helps you to develop your own Discord Bot, **Still under development, more features will be added in the future**

## Installation
<div align="center">
    <a href="https://www.npmjs.com/package/djs-helper"><img src="https://img.shields.io/npm/v/djs-helper.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/djs-helper"><img src="https://img.shields.io/npm/dt/djs-helper.svg?maxAge=3600" alt="npm downloads" /></a>
</div>

- Download [Node.js](https://nodejs.org)
- Write in CMD / Terminal:
```bash
npm i djs-helper
```
## Example Code:

```javascript
const { Client, Intents, MessageEmbed } = require('discord.js');
const DjsH = require('djs-helper');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (!message.guild) return;
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

client.login('token');
```

## Documentation
### Functions:

 **Name**      | **Params**            | **Type**           | **Function**           | **Returns**                                                                                                 
---------------|-----------------------|--------------------|------------------------|------------------------------------------------------------------------------------
 matchId()     | `content`             | `String`           | `Extract All Discord IDs from content`  | `Array`                                                                    
 matchEmojis() | `content`,`unicode`   | `String`,`Boolean` | `Extract All Discord Emojis from content, If` **unicode** `is` **true** `it will return Unicode emojis too`| `Array`
 isInvite()    | `content`             | `String`           | `Checks if content contains Discord Invites`| `Boolean`                                                        
 isURL()       | `content`,`whitelist` | `String`,`Array`   | `Checks if content contains URLs`| `Boolean`  
 splitMessage()       | `content`,`max` | `String`,`Number`   | `Split string every` max `default: 2000 max`| `Array`
 await getMember()       | `guild`,`userID` | `Object`,`String`   | `Get member from guild using ID`| `Object`/`null`
guildsCount()       | `client` | `Object (Discord.Client())`  | `Get client guilds count (Supports Sharding)`| `Number`       
usersCount()       | `client` | `Object (Discord.Client())`  | `Get client users count (Supports Sharding)` | `Number`        
channelsCount()       | `client` | `Object (Discord.Client())`  | `Get client channels count (Supports Sharding)`| `Number`  
 await getUser()       | `client`,`userID` | `Object`,`String`   | `Get user using ID`| `Object`/`null`| `Object`/`null`   
[await Inviter()](https://github.com/Amir-78/djs-helper/blob/master/examples/Inviter.md#await-inviter)       | `client`,`member` | `Object`,`Object`   | `Get used invite`| `Object`                                                   
                                                                                                 
### Utils:

 Name   | Function            | Usage                                    
--------|---------------------|------------------------------------------
 Colors | Contains all colors | to Show all colors: `console.log(Colors.HEX)` 

 
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.