export default (state, action) => {
    switch (action.type) {
        case 'AUTH': 
        return {
            ...state,
            isAuth: action.payload
        }
        default:
            return state;
    }
}