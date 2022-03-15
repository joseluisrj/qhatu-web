import instance from '../../axios/instance';

const getAll = async () => {
  try {
    const productsReponse = await instance.get(
      process.env.REACT_APP_QHATU_API_PATH_PRODUCTS +
        process.env.REACT_APP_QHATU_API_PATH_PRODUCTS_GETALL
    );
    return {
      success: productsReponse.status === 200,
      data: productsReponse.data,
    };
  } catch (error) {}
};

const getById = async (productId) => {
  try {
    const productReponse = await instance.get(
      `${
        process.env.REACT_APP_QHATU_API_PATH_PRODUCTS +
        process.env.REACT_APP_QHATU_API_PATH_PRODUCTS_GETBYID
      }/${productId}`
    );
    return {
      success: productReponse.status === 200,
      data: productReponse.data,
    };
  } catch (error) {}
};

const validateStock = async (productId, quantity) => {
  try {
    const productReponse = await instance.get(
      `${
        process.env.REACT_APP_QHATU_API_PATH_PRODUCTS +
        process.env.REACT_APP_QHATU_API_PATH_PRODUCTS_VALIDATESTOCK
      }/${productId}/${quantity}`
    );
    return {
      success: productReponse.status === 200,
      data: productReponse.data,
    };
  } catch (error) {}
};

const ProductService = {
  getAll: getAll,
  getById: getById,
  validateStock: validateStock,
};

export default ProductService;
