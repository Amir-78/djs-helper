/**
 * Checks if the string contains URLs
 * @param {string} content - String to check
 * @param {Array} whitelist - Allowed URLs
 * @see https://github.com/Amir-78
 */

function isURL(content, whitelist = []) {
    // Throwing necessary errors
    if (typeof content !== 'string') throw new TypeError('content must be a string');
    if (typeof whitelist !== 'object') throw new TypeError('whitelist must be an array');
    // Using Regular Expression to detect URLs
    let regex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    const match = regex.test(content);
    let urls = content.match(regex);
    urls = urls.filter(url => !whitelist.find(wurl => url.includes(wurl)));
    if (urls.length === 0) return false
    return match;
};

module.exports = { isURL }