const initialState = {
    email: ''
}

export default ( state = initialState, action ) => {
    
    if(action.type === 'SET.EMAIL'){
        return {...state, email:action.payload.email}
    }
    
    return state;
}