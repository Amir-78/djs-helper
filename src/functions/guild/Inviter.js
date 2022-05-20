'use strict';
const { Client, GuildMember, Invite, Collection } = require('discord.js');

/**
 * Get member from guild;
 * @param {Client} client - The discord client.
 * @param {GuildMember} member - The guildMember to get.
 * @returns {Invite} The used invite.
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

async function Inviter(client, member) {
    // Throwing necessary errors
    if (typeof client !== 'object') throw new TypeError('client must be a object');
    if (typeof member !== 'object') throw new TypeError('member must be a object');
    let guild = member.guild;
    if (!guild) {
        throw new Error('member guild not recognized!');
    }
    // Check if guild invites in Collection;
    if (!client.invites) {
        client.invites = new Collection();
    }
    if (!client.invites.has(guild.id)) {
        await guild.invites.fetch()
            .then(invites => {
                const Uses = new Map();
                invites.each(invite => Uses.set(invite.code, invite.uses));
                client.invites.set(guild.id, Uses);
            })
            .catch(error => console.error(error))
        return member.invite = null;
    }
    var cached = client.invites.get(guild.id);
    var Ninvites = await guild.invites.fetch();
    var Used = Ninvites.find(invite => cached.get(invite.code) < invite.uses);
    //Update old cache
    await guild.invites.fetch()
        .then(invites => {
            const Uses = new Map();
            invites.each(invite => Uses.set(invite.code, invite.uses));
            client.invites.set(guild.id, Uses);
        })
        
    if (!Used) return member.invite = null;
    member.invite = Used;

};
module.exports = { Inviter }