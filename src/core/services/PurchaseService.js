import instance from '../../axios/instance';

const add = async (purchase) => {
  try {
    const purchaseReponse = await instance.post(
      process.env.REACT_APP_QHATU_API_PATH_PURCHASE +
        process.env.REACT_APP_QHATU_API_PATH_PURCHASE_ADD,
      purchase
    );
    return {
      success: purchaseReponse.status === 200,
      data: purchaseReponse.data,
    };
  } catch (error) {}
};

const PurchaseService = {
  add: add,
};

export default PurchaseService;
