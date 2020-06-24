import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
wallet1:{
  color:'#7e7c7c', 
  fontSize: 19,
  fontWeight: 600,
  textAlign:'left'
},
wallet2:{
  color:'#939393', 
  fontSize: 15,
  fontWeight: 400,
  textAlign:'left'
},
wallet3:{
  color:'#7e7c7c', 
  fontSize: 18,
  fontWeight: 600,
  textAlign:'left'
},
wallet4:{
  backgroundColor:'#39B0E6',
  color:'#fff',
  padding:30, 
  display: 'flex',
  flexDirection:'column', 
  alignItems: 'center', 
  justifyContent: 'center'
},
wallet5:{
  textAlign: 'center', 
  maginBottom: 20, 
  color: '#fff'
},
wallet6:{
  backgroundColor: '#40B2E7',
   display: 'flex',
    alignItems: 'center',
     justifyContent: 'center' 
}
});

class wallet extends Component {
  render() {
    const {classes} = this.props
    return (
      <div>
        <AppBar position="fixed"  className={classes.wallet6}>
          <Toolbar>
            <Link to="/"> <Typography variant="h5" className={classes.wallet5}>Transaction History</Typography></Link>
          </Toolbar>
        </AppBar>
         <Grid container spacing={3}  direction="row"  justify="center" alignItems="center" style={{marginTop: 80}}>
         <Grid item xs={12} className={classes.wallet4}>
           <Typography style={{fontSize: 25}}>TOTAL BALANCE ₹115</Typography>
             <Typography>0 withdrawal in progress</Typography>
         </Grid>
         <Grid item xs={12}>
           <Paper style={{padding:18}}>
             <Typography className={classes.wallet1} >550 withdrawal in progress..</Typography>
             <Typography  className={classes.wallet2}>withdrown from your winnings</Typography>
             </Paper>
         </Grid>
         <Grid item xs={12} sm={4}>
           <Paper style={{padding:18}}>
           <Typography className={classes.wallet3}>₹81</Typography>
             <Typography className={classes.wallet2}>Add money Successfully</Typography>
           </Paper>
         </Grid>
         <Grid item xs={12} sm={4} >
           <Paper style={{padding:18}}>
           <Typography className={classes.wallet3}>₹115</Typography>
             <Typography className={classes.wallet2}>Paid from your wallet</Typography>
           </Paper>
         </Grid>
         <Grid item xs={12} sm={4}>
           <Paper style={{padding:18}}>
           <Typography className={classes.wallet3}>₹17</Typography>
             <Typography className={classes.wallet2}>Transaction Unsuccessful</Typography>
           </Paper>
         </Grid>
         <Grid item xs={6} sm={6}>
           <Paper style={{padding:18}}>
           <Typography className={classes.wallet3}>₹81</Typography>
             <Typography className={classes.wallet2}>Join a paid Contest</Typography>
           </Paper>
         </Grid>
         <Grid item xs={6} sm={6}>
           <Paper style={{padding:18}}>
           <Typography className={classes.wallet3}>₹81</Typography>
             <Typography className={classes.wallet2}>Join a paid Contest</Typography>
           </Paper>
         </Grid>
       </Grid>
       </div>
    )
  }
}


wallet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(wallet));
