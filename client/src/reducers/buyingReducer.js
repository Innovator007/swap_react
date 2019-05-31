export default (state = [], action) => {
	switch(action.type) {
		case "FETCH_BTC_BUYING":
			return action.payload;
		default:
			return state;
	}
}