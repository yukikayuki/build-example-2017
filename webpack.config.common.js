const entries = {
  app: './src/js/index.js',
}

module.exports.entries = entries


module.exports.addLibEntriesToTopOfEntries = (topEntries = []) => {
  const placedEntries = {}
  Object.keys(entries).forEach(k => {
    const newEntry = topEntries.concat(entries[k]);
    placedEntries[k] = newEntry
  })

  return placedEntries
}

module.exports.output = {
  path: `${__dirname}/dist`,
  filename: 'js/[name].bundle.js'
}
