import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TradesTable from './tab_components/tradesTable'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class TradeTabContainer extends React.Component {
    render() {
    	const { classes } = this.props;
        return (
        		<div className={classes.root}>
			      <Grid container spacing={8}>
			        <Grid item xs={12}>
			          <Paper className={classes.paper}>Trade Search</Paper>
			        </Grid>
			        <Grid item xs={8}>
			          <Paper className={classes.paper}><TradesTable trades={this.props.trades}/></Paper>
			        </Grid>
			        <Grid item xs={4}>
			          <Paper className={classes.paper}>Trade Action </Paper>
			        </Grid>
			      </Grid>
    			</div>
        	);
    }
}

TradeTabContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (TradeTabContainer);
