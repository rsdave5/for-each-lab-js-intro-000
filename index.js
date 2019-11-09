function iterativeLog(array) {
  array.forEach( (element, index, array) => {
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  let pets = ['dogs', 'cats', 'hamsters'];
  pets.forEach(callback);
  return pets;
};

function doToArray(array, callback) {
  array.forEach(callback);
}
