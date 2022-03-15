import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartStl from './ShoppingCartStl';
import ProductService from '../../core/services/ProductService';
import PurchaseService from '../../core/services/PurchaseService';
import TokenService from '../../core/services/TokenService';
import QhatuAction from '../../core/actions/qhatuAction';
import { useHistory } from 'react-router-dom';

const ShoppingCartStf = () => {
  const history = useHistory();
  const refPaymentMethod = useRef(null);
  const dispatch = useDispatch();
  const refComment = useRef(null);
  const [myOrder, setMyOrder] = useState({
    shopCart: [],
    items: [],
    total: 0,
  });

  const shoppingCart = useSelector((state) => state.shoppingCart);

  const closeModal = () => {
    dispatch(QhatuAction.modalAction(false));
  };

  const getOrder = async () => {
    let arrayProducts = [];
    let shopCart = [];
    let totalCart = 0;
    for (let index = 0; index < shoppingCart.length; index++) {
      const productId = shoppingCart[index]['id'];
      const quantity = shoppingCart[index]['quantity'];
      const productResponse = await ProductService.getById(productId);
      if (productResponse.success) {
        const productTemp = productResponse.data;
        productTemp.quantity = quantity;
        productTemp.salePrice = parseFloat(productTemp.salePrice);
        productTemp.total = parseFloat(
          parseFloat(quantity) * parseFloat(productTemp.salePrice)
        );
        totalCart = productTemp.total + totalCart;
        arrayProducts.push(productTemp);
        shopCart.push({
          productId: productId,
          quantity,
          total: productTemp.total,
        });
      }
    }
    setMyOrder({
      shopCart: shopCart,
      items: arrayProducts,
      total: totalCart,
    });
  };

  const savePurchase = async () => {
    const paymentMethod = refPaymentMethod.current?.value;
    const comment = refComment.current?.value;
    if (paymentMethod && comment && shoppingCart.length > 0) {
      const objPurchase = {
        customerId: TokenService.getUserId(),
        paymentMethod: paymentMethod,
        comment: comment,
        purchaseDet: myOrder.shopCart,
      };
      const responsePurchase = await PurchaseService.add(objPurchase);
      if (responsePurchase.success) {
        TokenService.removeShoppingCart();
        dispatch(
          QhatuAction.modalAction(
            true,
            () => {
              history.push('/purchases');
            },
            'Gracias 😁',
            'Tu compra se ha realizado correctamente.'
          )
        );
      } else {
        dispatch(
          QhatuAction.modalAction(
            true,
            () => {
              closeModal();
            },
            'Lo sentiemos 😔',
            'Tu compra no se ha podido realizar, intenta en unos minutos.'
          )
        );
      }
    }
  };

  useEffect(() => {
    getOrder();
    return () => {
      closeModal();
    };
  }, []);

  return myOrder.items.length > 0 ? (
    <ShoppingCartStl
      products={myOrder.items}
      totalCart={myOrder.total}
      refPaymentMethod={refPaymentMethod}
      refComment={refComment}
      savePurchase={savePurchase}
    />
  ) : (
    <h1>Cargando...</h1>
  );
};

export default ShoppingCartStf;
