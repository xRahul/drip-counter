import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';


import './App.css';
import { counterButtonPressAction, volumeChangeAction, resetCounterAction } from './actions';

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  counterButtonPressAction: () => dispatch(counterButtonPressAction()),
  volumeChangeAction: (volume) => dispatch(volumeChangeAction(volume)),
  resetCounterAction: () => dispatch(resetCounterAction())
 })

class App extends Component {

  counterButtonPressAction = () => {
    this.props.counterButtonPressAction();
  }

  volumeChangeAction = (event) => {
    this.props.volumeChangeAction(event.target.value);
   }

   resetCounterAction = () => {
     this.props.resetCounterAction()
   }

 render() {
  const history = this.props.appReducer.buttonPressHistory;
  const dropsPerMin = history.length > 2 ? parseInt((history.length * 60000) / (history[0]-history[history.length-1])) : 0;
  const oneMlInMins = dropsPerMin > 0 ? 1 / (0.05 * dropsPerMin) : 0;
   return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
            Drip counter
          </Typography>
          <Button variant="outlined" color="inherit"
            onClick={this.resetCounterAction}
          >Reset</Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item>
          <Fab size="large" onClick={this.counterButtonPressAction}
            style={{
              width: 250,
              height: 250
            }}

          >
            <Typography
              component="span"
              color="inherit"
              variant="h1"
            >
              {history.length}
            </Typography>

          </Fab>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>Drops/minute:</Grid>
                <Grid item>{dropsPerMin}</Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>

              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <TextField
                    id="outlined-number"
                    value={this.props.appReducer.volume}
                    onChange={this.volumeChangeAction}
                    type="number"
                    margin="dense"
                    style={{
                      width: 45
                    }}
                  />
                </Grid>
                <Grid item>
                 ml in {Math.round( this.props.appReducer.volume * oneMlInMins * 10 ) / 10} minutes
                 </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);