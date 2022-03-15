import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import QhatuAction from '../../core/actions/qhatuAction';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleClickAddCart = (id) => {
    dispatch(QhatuAction.shoppingCartAction(id));
  };

  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={product.imageUrl}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            SKU: {product.sku}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.category.name}
          </Typography>
          <Typography gutterBottom component="div" height={50}>
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            S/. {product.salePrice}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => handleClickAddCart(product.id)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              marginLeft: 'auto',
            }}
            size="small"
            color="success"
          >
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
