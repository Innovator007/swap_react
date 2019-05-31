import axios from 'axios';

export const fetchBtcSelling = () => async dispatch => {
	const res = await axios.get("http://localhost:5000/api/btc/selling");
	dispatch({ type: "FETCH_BTC_SELLING", payload: res.data });
}

export const fetchBtcBuying = () => async dispatch => {
	const res = await axios.get("http://localhost:5000/api/btc/buying");
	dispatch({ type: "FETCH_BTC_BUYING", payload: res.data });
}