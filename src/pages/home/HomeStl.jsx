import React from 'react';
import CardLoader from '../../components/loader/CardLoader';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';

const HomeStl = ({ characters, handleClickCharacters }) => {
  return (
    <>
      <>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Button
              variant="contained"
              disabled={characters.prev === null}
              onClick={() => handleClickCharacters(characters.prev)}
            >
              <FastRewindIcon />
            </Button>
          </Grid>
          <Grid item xs={8} sx={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              disabled={characters.next === null}
              onClick={() => handleClickCharacters(characters.next)}
            >
              <FastForwardIcon />
            </Button>
          </Grid>
        </Grid>
        <br />
        {characters.loading ? (
          <CardLoader />
        ) : (
          <Grid container spacing={3}>
            {characters.data.map((character) => {
              return (
                <Grid item xs={3} key={character.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="250"
                      image={character.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {character.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {character.origin?.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">{character.species}</Button>
                      <Button size="small">{character.gender}</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </>
    </>
  );
};

export default HomeStl;
