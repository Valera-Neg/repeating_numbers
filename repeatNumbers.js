const repeatNumbers = function(data) {
  let res = [];
  data.map(arr => res.push([...Array(arr[1]).fill(arr[0])]))
  return res.map(e =>  e.join('')).join(', ');
};


console.log(repeatNumbers([[1, 10]])); // => 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // => 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); // => 10101010, 343434343434, 9292