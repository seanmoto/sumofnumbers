function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function recursionSum(index, list) {
  if (index === list.length - 1) {
    return list[index];
  }
  return (list[index] + recursionSum(index + 1, list));
}

function sumRecursion(list) {
  return recursionSum(0, list);
}

function sumTheSimpleWay(list) {
  let sum = 0;
  _.each(list, function (num) {
    sum += num;
  });
  return sum;
}

const myList = [1, 2, 3, 4, 5];
console.log(sumFor(myList));
console.log(sumWhile(myList));
console.log(sumRecursion(myList));
console.log(sumTheSimpleWay(myList));
