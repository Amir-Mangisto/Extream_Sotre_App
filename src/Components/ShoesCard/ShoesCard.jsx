import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

  // const ExpandMore = styled((props) => {
  //   const { expand, ...other } = props;
  //   return <IconButton {...other} />;
  // })(({ theme, expand }) => ({
  //   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // }));

export const ShoesCard = ({item}) => {
  return (
    
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={item.Picture}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      {/* <ExpandMore
        // expand={expanded}
        // onClick={handleExpandClick}  
        // aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore> */}
    </CardActions>
    <Collapse in={true} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>{item.ShoeType}</Typography>
        <Typography paragraph>
        {item.Company}
        </Typography>
        <Typography paragraph>
        {item.Brand}
        </Typography>
        <Typography paragraph>
          {item.Price}
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
    // <div>
    //  <h1>{item.ShoeType}</h1> 
    //  <h1>{item.Company}</h1> 
    //  <h1>{item.Brand}</h1> 
    //  <h1>{item.Price}</h1> 
    //  <h1>{item.OnSale}</h1> 
    //  <h1><img src="{item.Picture}" /></h1> 

    // </div>
  );
};
