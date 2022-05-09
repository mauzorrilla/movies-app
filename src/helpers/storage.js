const setInStorage = (key, value) => {
  localStorage.setItem(key, value);
};

const getFromStorage = (key) => localStorage.getItem(key);

export { setInStorage, getFromStorage };
