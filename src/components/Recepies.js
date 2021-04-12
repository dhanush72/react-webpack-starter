import { useState } from "react";

function Recepies() {
  const [recipe, setRecipe] = useState({});

  const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
  };

  const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 3,
  };

  return (
    <div>
      <h3>Current Recipe:</h3>

      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletRecipe)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((data) => (
          <li key={data}>
            {data} : {recipe[data]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recepies;
