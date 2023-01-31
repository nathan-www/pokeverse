import React, { createContext, useState } from 'react';

const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(favourite) {
    // copy the current favourites array and add the new favourite to it
    setFavourites([...favourites, favourite]);
  }

  function removeFavourite(name) {
    // copy the current favourites array filtering out the pokemon with the given name
    setFavourites(favourites.filter((favourite) => name !== favourite));
  }

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite}}>
      {children}
    </FavouritesContext.Provider>
  );
}

export { FavouritesProvider, FavouritesContext };
