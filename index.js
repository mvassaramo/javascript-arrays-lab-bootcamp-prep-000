const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens,appendname) {
   kittens.push(appendname);
   return kittens;
}

function destructivelyPrependKitten(kittens,prependname) {
  kittens.unshift(prependname);
  return kittens;
}

function destructivelyRemoveLastKitten(kittens,name) {
  
}