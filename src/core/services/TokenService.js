const getAccessToken = () => {
  const userData = JSON.parse(localStorage.getItem('USER_DATA'));
  return userData.access_token;
};

const getRefreshToken = () => {
  const userData = JSON.parse(localStorage.getItem('USER_DATA'));
  return userData.refresh_token;
};

const setUserData = (userData) => {
  localStorage.setItem('USER_DATA', JSON.stringify(userData));
};

const setShoppingCart = (shoppingCart) => {
  localStorage.setItem('SHOPPING_CART', JSON.stringify(shoppingCart));
};

const setCountItems = (count) => {
  localStorage.setItem('COUNT_ITEMS', count);
};

const getUserData = () => {
  return JSON.parse(localStorage.getItem('USER_DATA'));
};

const getShoppingCart = () => {
  return localStorage.getItem('SHOPPING_CART') === null
    ? []
    : JSON.parse(localStorage.getItem('SHOPPING_CART'));
};

const getCountItems = () => {
  return localStorage.getItem('COUNT_ITEMS') === null
    ? 0
    : parseInt(localStorage.getItem('COUNT_ITEMS'));
};

const getUserId = () => {
  const userData = getUserData();
  return userData.id;
};

const updateAccessToken = (token) => {
  const userData = JSON.parse(localStorage.getItem('USER_DATA'));
  userData.access_token = token;
  setUserData(userData);
};

const removeUserData = () => {
  localStorage.removeItem('USER_DATA');
};

const removeShoppingCart = () => {
  localStorage.removeItem('COUNT_ITEMS');
  localStorage.removeItem('SHOPPING_CART');
};

const TokenService = {
  setUserData,
  getUserData,
  removeUserData,
  getAccessToken,
  getRefreshToken,
  updateAccessToken,
  getUserId,
  setShoppingCart,
  getShoppingCart,
  setCountItems,
  getCountItems,
  removeShoppingCart,
};

export default TokenService;
