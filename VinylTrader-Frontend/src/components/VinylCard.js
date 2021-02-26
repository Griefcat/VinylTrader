// import React, { Component } from 'react'
// import { Card } from '@material-ui/core'

// export default class VinylCard extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>this is a card</h3>
//                 <Card> It'sa me, Mario </Card> 
//             </div>
//         )
//     }
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export default function VinylCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={props.vinyl.image}
          title="${props.vinyl.image}"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.vinyl.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.vinyl.artist}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.vinyl.genre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.vinyl.year}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.vinyl.rare}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

// (image: 'https://m.media-amazon.com/images/I/617rSnmzb3L._SS500_.jpg',
//                         title: 'Griefcat',
//                         artist: 'Griefcat',
//                         genre: 'folk',
//                         year: 2020,
//                         rare: true )