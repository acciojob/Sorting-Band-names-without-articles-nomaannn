//your code here

function strip (word) {
    let regex = new RegExp('^(a |the |an )', 'i')
    return word.replace(regex, '').trim()
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1)