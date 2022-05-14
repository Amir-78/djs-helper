'use strict';
/**
 * Split string every 2000 character
 * @param {string} content - String to split
 * @param {number} max - Max length to split, default: 2000
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

 function splitMessage(content, max = 2000) {
    // Throwing necessary errors
    if (typeof content !== 'string') throw new TypeError('content must be a string');
    if (typeof max !== 'number') throw new TypeError('max must be a number');

    // Using Regular Expression to Split string
    const regex = new RegExp(`[\\s\\S]{1,${String(max)}}`,'g');
    const results = content.match(regex) || [];
    return results;
};

module.exports = { splitMessage }