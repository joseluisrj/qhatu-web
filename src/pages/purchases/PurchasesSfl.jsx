import React, { useEffect, useState, useRef } from 'react';
import instance from '../../axios/instance';
import nestInstance from '../../axios/nestInstance';
import PurchasesStl from './PurchasesStl';

const PurchasesSfl = () => {
  const [products, setProducts] = useState({
    loading: true,
    nestCategories: undefined,
    data: undefined,
    initialData: undefined,
  });

  const refCategory = useRef(0);
  const refOrder = useRef(0);

  const hdlChgCategory = (event) => {
    setProducts({ 
      loading: true 
    });
    const filterProducts = event.target.value === '0' ? (
      products.initialData
    ) : (
      products.initialData.filter(product => product.categoryId === event.target.value)
    );
    setProducts({
      loading: false,
      nestCategories: products.nestCategories,
      data: filterProducts,
      initialData: products.initialData
    });
  };

  const hdlChgSort = (event) => {
    setProducts({
      loading: true
    });
    let sortProducts = [];
    let sortInitialProducts = [];
    switch(event.target.value) {
      case 'NI':
        sortProducts = products.data.sort((a, b) => a.id - b.id);
        sortInitialProducts = products.initialData.sort((a, b) => a.id - b.id);
        break;
      case 'ME':
        sortProducts = products.data.sort((a, b) => a.salePrice - b.salePrice);
        sortInitialProducts = products.initialData.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'MA':
        sortProducts = products.data.sort((a, b) => b.salePrice - a.salePrice);
        sortInitialProducts = products.initialData.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case 'MV':
        sortProducts = products.data.sort((a, b) => a.stock - b.stock);
        sortInitialProducts = products.initialData.sort((a, b) => a.stock - b.stock);
        break;
      default:
        // code block
    }
    setProducts({ 
      loading: false, 
      nestCategories: products.nestCategories,
      data: sortProducts, 
      initialData: sortInitialProducts, 
       
    });
  };

  const getProducts = async () => {
    try {
      setProducts({
        loading: true
      });
      const nestCategories = await nestInstance.get('/category');
      const products = await instance.get('/gtw-prd/products/getAll');
      setProducts({
        loading: false,
        nestCategories: nestCategories.data,
        data: products.data,
        initialData: products.data
      });
      
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <PurchasesStl products={products} refCategory={refCategory} refOrder={refOrder} hdlChgCategory={hdlChgCategory} hdlChgSort={hdlChgSort} />;
};

export default PurchasesSfl;
