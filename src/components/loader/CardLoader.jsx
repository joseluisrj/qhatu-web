import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const CardLoader = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton variant="text" />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={150} height={35} />
              <Skeleton variant="rectangular" width={150} height={35} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton variant="text" />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={150} height={35} />
              <Skeleton variant="rectangular" width={150} height={35} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton variant="text" />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={150} height={35} />
              <Skeleton variant="rectangular" width={150} height={35} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton variant="text" />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={150} height={35} />
              <Skeleton variant="rectangular" width={150} height={35} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton variant="text" />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={150} height={35} />
              <Skeleton variant="rectangular" width={150} height={35} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton variant="text" />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={150} height={35} />
              <Skeleton variant="rectangular" width={150} height={35} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton variant="text" />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={150} height={35} />
              <Skeleton variant="rectangular" width={150} height={35} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton variant="text" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton variant="text" />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton variant="rectangular" width={150} height={35} />
              <Skeleton variant="rectangular" width={150} height={35} />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CardLoader;
