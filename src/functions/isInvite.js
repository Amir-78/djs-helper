'use strict';
/**
 * Checks if the string contains Discird Invites
 * @param {string} content - String to check
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

 function isInvite(content) {
    // Throwing necessary errors
    if (typeof content !== 'string') throw new TypeError('content must be a string');
    
    // Using Regular Expression to detect Discird invites
    let regex = /discord(?:\.com|app\.com|\.gg)[\/invite\/]?(?:[a-zA-Z0-9\-]{2,32})/g;
    const match = regex.test(content);
    return match;
};

module.exports = { isInvite }