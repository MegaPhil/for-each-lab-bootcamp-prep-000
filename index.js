function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  const characters = ['Megaman', 'Zero', 'Roll']
  characters.forEach(callback)
  return characters
}

function doToArray(array, callback) {
  array.forEach(callback)
}