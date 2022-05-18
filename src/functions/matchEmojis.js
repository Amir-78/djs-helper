'use strict';
/**
 * Extracting Discord Emojis from String
 * @param {string} content - String to extract Emojis from
 * @param {boolean} unicode - Extract unicode Emojis too
 * @returns {array} array of emojis IDs and unicode Emojis
 * @see 
 https://github.com/Amir-78/djs-helper/tree/master#documentation
 */

function matchEmojis(content, unicode = false) {
    // Throwing necessary errors
    if (typeof content !== 'string') throw new TypeError('content must be a string');
    if (typeof unicode !== 'boolean') throw new TypeError('unicode must be a boolean');

    // Using Regular Expression to match Emojis from string
    let regex = /<a?:[A-Za-z0-9~_-]+:(\d{18})>/g
    if (unicode) {
        regex = /<a?:[A-Za-z0-9~_-]+:(\d{18})>|(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g
    }
    const match = content.match(regex);
    let results = [];
    if (!match) return [];
    // Extract Emoji ID
    for (var i = 0; i < match.length; i++) {
        if (match[i].startsWith("<")) {
            if (match[i].match(/[0-9\(\)]{18}/g)[0]) {
                results.push(match[i].match(/[0-9\(\)]{18}/g)[0]);
            }
        } else {
            results.push(match[i]);
        }
    }
    return results || [];
};

module.exports = { matchEmojis }