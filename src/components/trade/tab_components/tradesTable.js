import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class TradesTable extends React.Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding='dense'>Trade Date</TableCell>
            <TableCell padding='dense'>Commodity</TableCell>
            <TableCell padding='dense'>Side</TableCell>
            <TableCell numeric padding='dense'>QTY (MT)</TableCell>
            <TableCell numeric padding='dense'>Price (/MT)</TableCell>
            <TableCell padding='dense'>Counterparty</TableCell>
            <TableCell padding='dense'>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.trades.map(trade => {
            return (
              <TableRow key={trade.id}>
                <TableCell>{trade.tradeDate}</TableCell>
                <TableCell>{trade.commodity}</TableCell>
                <TableCell>{trade.side}</TableCell>
                <TableCell>{trade.quantity}</TableCell>
                <TableCell>{trade.price}</TableCell>
                <TableCell>{trade.counterParty}</TableCell>
                <TableCell>{trade.location}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
  );
  }
}


TradesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TradesTable);
