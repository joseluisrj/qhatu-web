import instance from '../../axios/instance';

const getAll = async () => {
  try {
    const categoriesReponse = await instance.get(
      process.env.REACT_APP_QHATU_API_PATH_CATEGORIES +
        process.env.REACT_APP_QHATU_API_PATH_CATEGORIES_GETALL
    );
    return {
      success: categoriesReponse.status === 200,
      data: categoriesReponse.data,
    };
  } catch (error) {}
};

const getById = async (categoryId) => {
  try {
    const categoryReponse = await instance.get(
      `${
        process.env.REACT_APP_QHATU_API_PATH_CATEGORIES +
        process.env.REACT_APP_QHATU_API_PATH_CATEGORIES_GETBYID
      }/${categoryId}`
    );
    return {
      success: categoryReponse.status === 200,
      data: categoryReponse.data,
    };
  } catch (error) {}
};

const CategoryService = {
  getAll: getAll,
  getById: getById,
};

export default CategoryService;
