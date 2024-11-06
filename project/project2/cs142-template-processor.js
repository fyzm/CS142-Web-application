'use strict';

/**
 * Template processor class that replaces {{property}} with values from a dictionary
 * @param {string} template - The template string containing {{property}} placeholders
 */
function Cs142TemplateProcessor(template) {
    this.template = template;
}

/**
 * Fills in the template with values from the dictionary
 * @param {Object} dictionary - Object containing replacement values
 * @returns {string} - Processed template with values filled in
 */
Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    return this.template.replace(/\{\{([^{}]+)\}\}/g, function(match, property) {
        return dictionary && property in dictionary ? dictionary[property] : '';
    });
};