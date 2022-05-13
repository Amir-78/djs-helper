/**
 * Extracting Discord IDs from String
 * @param {string} content - String to extract IDs from
 * @see https://github.com/Amir-78
 */

function matchId(content) {
    // Throwing necessary errors
    if (typeof content !== 'string') throw new TypeError('content must be a string');
    
    // Using Regular Expression to match IDs from string
    const match = content.match(/[0-9\(\)]{18}/g);
    return match || [];
};

module.exports = { matchId }