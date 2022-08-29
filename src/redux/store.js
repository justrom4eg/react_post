import { legacy_createStore as createStore } from 'redux';

const initialState = {
    like: 3
}

const reducer = (state = initialState, action) => {
    console.log('reducer> ', action)

    return state
}

let store = createStore(reducer);

export default store