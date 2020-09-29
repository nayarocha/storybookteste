import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const action = msg => () => console.log(msg);

const MaterialComponent = withStyles(theme => ({
    card: {
      maxWidth: 800,
      margin: 'auto',
    },
    media: {
      height: 0,
      paddingTop: '30%', // 16:9
    },
    button: {
      fontFamily:['Poppins', 'sans-serif'],
      textTransform: 'none',
      border: 4,
      color: "white",
      backgroundColor: "pink",
      //boxShadow: "none",
        "&:hover": {
          backgroundColor: "#001B8B",
          //boxShadow: "none",
        },
        "&:active":{
          backgroundColor:"#4C5FAE",
        }
      },
  }),
)(({ classes, variant }) => (
  <div> 
      <Button
        disableElevation
        className={classes.button}
        size="medium"
        color="primary"
        variant={variant} //Add o estilo do bt: outlined, contained
        onClick={action('primary')}
      >
        Enviar mensagem 
      </Button>
     
  
  </div>
));

storiesOf('ButtonNew', module)
 // .add('Text Buttons', () => <MaterialComponent />)
  //.add('Outlined Buttons', () => <MaterialComponent variant="outlined" />)
  .add('Contained Buttons', () => <MaterialComponent classes='' variant="contained" />);
