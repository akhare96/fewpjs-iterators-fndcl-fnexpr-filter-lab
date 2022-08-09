// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(stringMatch => stringMatch.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(stringMatch => stringMatch.toLowerCase().indexOf(string.toLowerCase()) === true)
}

function matchName(drivers, string) {
    return drivers.filter(stringMatch => stringMatch.name === string)
}