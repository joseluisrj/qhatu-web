import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCartStl = ({
  products,
  totalCart,
  refPaymentMethod,
  refComment,
  savePurchase,
}) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            ORDEN
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="txtPaymentMethod"
            name="txtPaymentMethod"
            label="Método de Pago"
            fullWidth
            variant="standard"
            inputRef={refPaymentMethod}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            required
            variant="standard"
            id="txtComment"
            name="txtComment"
            fullWidth
            label="Comentario"
            inputRef={refComment}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Mis Productos
          </Typography>
          <List disablePadding>
            {products.map((product) => (
              <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
                <Box sx={{ m: 2 }}>
                  <Avatar
                    variant="square"
                    sx={{ width: 100, height: 100 }}
                    alt="Producto"
                    src={product.imageUrl}
                  />
                </Box>

                <ListItemText
                  primary={product.name}
                  secondary={'SKU:' + product.sku}
                />

                <Typography>
                  <ListItemText
                    primary={'S/. ' + product.total.toFixed(2)}
                    secondary={`${
                      product.quantity
                    } x  ${product.salePrice.toFixed(2)}`}
                  />
                </Typography>
              </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary="Total"
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: 'medium',
                  lineHeight: '20px',
                  mb: '2px',
                }}
              />
              <Typography sx={{ fontWeight: 700 }}>
                {'S/. ' + totalCart.toFixed(2)}
              </Typography>
            </ListItem>
          </List>
          <br />
          <Grid container spacing={2}>
            <Grid item container direction="column" xs={12}>
              <Button
                onClick={savePurchase}
                variant="contained"
                size="large"
                startIcon={<ShoppingCartIcon />}
              >
                Comprar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ShoppingCartStl;
