//Dependencies

/* Function Modules */
//Create Response Structure
exports.create_response = function(text) {
    return {
        speech: text,
        displayText: text,
        source: 'simpledemoservice'
    };
};