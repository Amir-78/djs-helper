module.exports = require('./src');
//Check for updates;
const fetch = require('node-fetch');
const package = require('./package.json');
fetch("https://raw.githubusercontent.com/Amir-78/djs-helper/master/package.json").then(async (res) => {
    let data = await res.json()
    if (data.version != package.version) {
        console.log(`Your version is outdated "${package.version}", Use: "npm i ${package.name}@${data.version}" to get new features!`)
    }
})