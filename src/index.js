const recipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const newRecepie = {
  ...recipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(recipe);
console.log(newRecepie);
