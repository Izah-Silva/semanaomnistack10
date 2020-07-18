module.exports = function parseStrinAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech =>tech.trim());
}