function add(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a == 'number' && typeof b == 'number') {
      resolve(a + b);
    }
    else {
      reject('These are not numbers');
    }
  });
}

add(3, 4).then(function (sum) {
  console.log('The sum of this is ' + sum);
}).catch(function (error) {
  console.log(error);
});


add('Hello', 4).then(function (sum) {
  console.log('The sum of this is ' + sum);
}, function (error) {
  console.log(error);
});


console.log('Hello!');
