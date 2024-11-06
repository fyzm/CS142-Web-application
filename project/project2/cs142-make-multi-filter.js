'use strict';

function cs142MakeMultiFilter(originalArray) {
    if (!Array.isArray(originalArray)) {
        originalArray = [];
    }
    
    let currentArray = originalArray.slice();
    
    function arrayFilterer(filterCriteria, callback) {
        // If filterCriteria is not provided, return currentArray
        if (!filterCriteria) {
            return currentArray;
        }
        
        // If filterCriteria is not a function, return currentArray
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }
        
        // Filter currentArray based on criteria
        currentArray = currentArray.filter(filterCriteria);
        
        // If callback is provided and is a function, execute it
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }
        
        // Return arrayFilterer for chaining
        return arrayFilterer;
    }
    
    return arrayFilterer;
}