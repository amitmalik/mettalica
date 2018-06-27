export default class Trade {
	constructor(id, tradeDate, commodity, side, quantity, price, counterParty, location) {
		this.id = id;
		this.tradeDate = tradeDate;
		this.commodity = commodity;
		this.side = side;
		this.quantity = quantity;
		this.price = price;
		this.counterParty = counterParty;
		this.location = location;
	}
}