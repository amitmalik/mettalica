import trades from '../resources/mock-data/tradeService';

const tradeReducer = function trades(state = trades, action) {
	console.log(action);
	return state;
}

export default tradeReducer;