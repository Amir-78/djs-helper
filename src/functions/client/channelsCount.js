'use strict';
const { Client } = require('discord.js');

/**
 * Get Bot channels count;
 * @param {Client} client - The Discord Client
 * @returns {number} The total cached channels
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

async function channelsCount(client) {
    // Throwing necessary errors
    if (typeof client !== 'object') throw new TypeError('client must be a object');
    if (!client.channels) throw new SyntaxError('pass a correct Discord.Client');

    if (client.shard) {
        var results = await client.shard.fetchClientValues('channels.cache.size');
        return results.reduce((prev, val) => prev + val, 0)
    } else {
        try {
            return client.channels.cache.size
        } catch (err) {
            console.error(err)
        }
    }
};

module.exports = { channelsCount }