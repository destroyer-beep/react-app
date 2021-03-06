export default (state, action) => {
    switch (action.type) {
        case 'AUTH': 
        return {
            ...state,
            isAuth: true,
            userName: action.payload.userName,
            userId: action.payload.userId
        }
        default:
            return state;
    }
}