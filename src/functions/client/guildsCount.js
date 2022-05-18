'use strict';
const { Client } = require('discord.js');

/**
 * Get Bot guilds count;
 * @param {Client} client - Client
 * @returns {number} The total cached guilds
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

function guildsCount(client) {
    // Throwing necessary errors
    if (typeof client !== 'object') throw new TypeError('client must be a object');
    if(!client.guilds) throw new SyntaxError('pass a correct Discord.Client');

    if (client.shard) {
        client.shard.fetchClientValues('guilds.cache.size')
            .then(results => {
                return results.reduce((prev, val) => prev + val, 0)
            })
    } else {
        try {
            return client.guilds.cache.size
        } catch (err) {
            console.error(err)
        }
    }
};

module.exports = { guildsCount }