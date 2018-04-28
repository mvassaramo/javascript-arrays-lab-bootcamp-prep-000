const app = "I don't do much."

var array = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array,appendname) {
   array.push(appendname);
   return array;
}

function destructivelyPrependKitten(array,prependname) {
  array.unshift(prependname);
  return array;
}

function destructivelyRemoveLastKitten(array) {
  array.pop();
  return array;
}

