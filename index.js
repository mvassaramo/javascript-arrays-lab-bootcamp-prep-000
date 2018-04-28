const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens,kitten) {
   kittens.push(kitten);
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

