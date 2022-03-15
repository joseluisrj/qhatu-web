import React from 'react';
import Grid from '@mui/material/Grid';
import ProductContainer from '../../components/products/ProductContainer';
import CardLoader from '../../components/loader/CardLoader';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const PurchasesStl = ({ products, refCategory, refOrder, hdlChgCategory, hdlChgSort }) => {

  return (
    <>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>Filtros</Grid>
        <Grid item xs={8} sx={{ textAlign: 'right' }}></Grid>
      </Grid>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        <InputLabel id="demo-simple-select-label">Categorías</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue='0'
            label="Categorías"
            onChange={hdlChgCategory}
            displayEmpty
            inputRef={refCategory}
          >
            <MenuItem value='0'><em>Todos</em></MenuItem>
            {products.nestCategories && products.nestCategories.map((category) => {
              return <MenuItem value={category.categoryId} key={category.categoryId}>{category.description}</MenuItem>;
            })}
          </Select>
        </Grid>
        <Grid item xs={8} sx={{ textAlign: 'right' }}>
        <InputLabel id="demo-simple-select-label2">Ordenar de</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="demo-simple-select"
            defaultValue='NI'
            label="Ordenar de"
            onChange={hdlChgSort}
            displayEmpty
            inputRef={refOrder}
          >
            <MenuItem value='NI'><em>Ninguno</em></MenuItem>
            <MenuItem value='ME'><em>Menor a mayor precio</em></MenuItem>
            <MenuItem value='MA'><em>Mayor a menor precio </em></MenuItem>
            <MenuItem value='MV'><em>Más vendido al menos vendido </em></MenuItem>
          </Select>
        </Grid>
      </Grid>
      <br />
      {products.loading ? (
        <CardLoader />
      ) : (
        <ProductContainer products={products} />
      )}
    </>
  );
};

export default PurchasesStl;
