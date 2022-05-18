'use strict';
const { Client } = require('discord.js');

/**
 * Get Bot users count;
 * @param {Client} client - Client
 * @returns {number} The total users in client.
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

function usersCount(client) {
    // Throwing necessary errors
    if (typeof client !== 'object') throw new TypeError('client must be a object');
    if (!client.guilds) throw new SyntaxError('pass a correct Discord.Client');

    if (client.shard) {
        client.shard.fetchClientValues('guilds.cache')
            .then(results => {
                return results.reduce((prev, val) => prev + val.memberCount, 0)
            })
    } else {
        try {
            return client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
        } catch (err) {
            console.error(err)
        }
    }
};

module.exports = { usersCount }