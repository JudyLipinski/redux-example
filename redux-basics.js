const redux = require('redux');
const createStore = redux.createStore;

//you need to initialize state
//usually an object ecause you need more than just one field
//can pass to reducer as defaul, so when reducer is 1st used it is initialized

const initialState = {
    counter: 0
}

// Reducer - manioulates state
// must return 1 thing  state
// IMMUTABLE - so dont just update state return NEW state
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state, ///this copies original state
            counter: state.counter + 1 //this overrides the property for counter
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store single source of state
const store = createStore(rootReducer); //1st time is initialized w default
console.log(store.getState()); 

// Subscription
//get informed if state changes
//publish/subscribe design pattern
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'}); 
//the argument is an action
//this MUST have a type property, dont misspell!
//some unique identifier, upper case is convention
//descriptive and short
//can pass an optional payload



store.dispatch({type: 'ADD_COUNTER', value: 10});
//you can add any other properties, single value or objects



console.log(store.getState());
