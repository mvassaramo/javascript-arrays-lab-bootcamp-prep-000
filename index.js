const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens) {
   kittens.push();
   return kittens;
}

function destructivelyPrependKitten(array,prependname) {
  array.unshift(prependname);
  return array;
}

function destructivelyRemoveLastKitten(array) {
  array.pop();
  return array;
}

