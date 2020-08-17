import { create } from "lodash";
import reducer from './reducer';

function createStore(reducer) {
    let state;
    let listeners = [];

    function dispatch(action){
        // call the reducer to get the new state
        state = reducer(state, action);

        for( let i = 0; i < listeners.length; i++){
            listeners[i]();
        }
    }

    function getState() {
        return state;
    }

    function subscribe(listener){
        listeners.push(listener);
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}

export default createStore(reducer);