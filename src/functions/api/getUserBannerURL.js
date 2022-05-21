'use strict';

const fetch = require('node-fetch');
/**
 * Get member Banner from guild;
 * @param {Client} client - The discord client.
 * @param {User} id - The User to get.
 * @returns {User} The user.
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

async function getUserBannerURL(data) {
  let result = ''
  
   let user = await (await fetch(`https://discord.com/api/v9/users/${data.id}`, { headers: { "Authorization": `Bot ${data.client.token}`, "Content-Type": "application/json" } })).json();

    if(user.code){
            result = null;
        }
  if(user.banner === null){
    result = null
  }else{
 let bannerformat = 'pn'
  if(user.banner.startsWith('a_')) {
    bannerformat = 'gif'
  }    
    let userbannerlink = `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.${bannerformat}`

    result = userbannerlink

    
  }


  
  return result;
};

module.exports = { getUserBannerURL }