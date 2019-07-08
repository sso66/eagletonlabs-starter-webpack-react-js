// redux/modules/currentTime.js
console.log("Mounting currentTime.js ... ");

export const types = {
	'FETCH_NEW_TIME': 'FETCH_NEW_TIME',
}

const initialState = {
	currentTime: new Date(),
}

export const reducer = (state = initialState, actions) => {
	return state;
}

export const actions = {
	updateTime: () => ({ type: types.FETCH_NEW_TIME }),
}

// eof
