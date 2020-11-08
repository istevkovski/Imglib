const generalState = {
	tab: 'active',
};

const generalReducer = (state = generalState, action) => {
	switch(action.type) {
		case "SET_ACTIVE_TAB":
			return {
				...state,
				tab: action.payload.toLowerCase()
			}
		default:
			return state
	}
}
export default generalReducer;