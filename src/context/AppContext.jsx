import React, { createContext, useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [query] = useSearchParams();
  const nav = useNavigate();
  const location = useLocation();


  const doApi = async (searchQuery) => {
    try {
      const url = `https://randomuser.me/api/?results=12&seed=${searchQuery}`;
      const resp = await fetch(url);
      const data = await resp.json();
      setList(data.results || []);
    } catch (err) {
      console.log("oshibka v liste?",err);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      const searchQuery = query.get("search") || "";
      doApi(searchQuery);
    }
  }, [query, location.pathname]); 

  const onSearch = (searchQuery) => {
    nav(`/?search=${searchQuery}`);
  };

  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavs = localStorage.getItem("my_favs");
      return savedFavs ? JSON.parse(savedFavs) : [];
    } catch (err) {
      console.error("oshibka v favoritah?", err);
    }
  });

  useEffect(() => {
    localStorage.setItem("my_favs", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (employeeObject) => {
    setFavorites(prevFavs => {
      const isFav = prevFavs.some(fav => fav.login.uuid === employeeObject.login.uuid);
      if (isFav) {
        return prevFavs.filter(fav => fav.login.uuid !== employeeObject.login.uuid);
      } else {
        return [...prevFavs, employeeObject];
      }
    });
  };

  const isFavorite = (employeeId) => {
    if (!employeeId) return false; 
    return favorites.some(fav => fav.login.uuid === employeeId);
  };

  const value = {
    list,
    onSearch,
    doApi,
    favorites,
    toggleFavorite,
    isFavorite
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};