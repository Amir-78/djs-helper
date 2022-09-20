'use strict';
const { Client, User} = require('discord.js');
const fetch = require('node-fetch');
/**
 * Get member from guild;
 * @param {Client} client - The discord client.
 * @param {User} id - The User to get.
 * @returns {User} The user.
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

async function getUser(client, id) {
    // Throwing necessary errors
    if (typeof id !== 'string') throw new TypeError('id must be a string');
    if (isNaN(id)) throw new SyntaxError('Incorrect id given')
    if (id.length < 18 && id.length > 19) throw new SyntaxError('Incorrect id given')
    if (typeof client !== 'object') throw new TypeError('client must be an object');
    // Get user using id;
    try {
        let user = await (await fetch(`https://discord.com/api/v9/users/${id}`, { headers: { "Authorization": `Bot ${client.token}`, "Content-Type": "application/json" } })).json();
        if(user.code){
            return null;
        }
        return user;
    } catch (err) {
        console.error(err)
        return null;
    }
};

module.exports = { getUser }