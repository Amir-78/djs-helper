'use strict';
/**
 * Extracting Discord IDs from String
 * @param {string} content - String to extract IDs from
 * @returns {array} array of all discord IDs
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

function matchId(content) {
    // Throwing necessary errors
    if (typeof content !== 'string') throw new TypeError('content must be a string');
    
    // Using Regular Expression to match IDs from string
    const match = content.match(/[0-9\(\)]{19}/g);
    return match || [];
};

module.exports = { matchId }
