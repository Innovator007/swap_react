export default (state = [], action) => {
	switch(action.type) {
		case "FETCH_BTC_SELLING":
			return action.payload;
		default:
			return state;
	}
}