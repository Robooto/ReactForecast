
import { FETCH_WEATHER } from '../actions/index';

// Weather reducer
// redux promise is resolving the promise before coming here
export default function (state = [], action) {

    switch (action.type) {

        // dont mutate state in a reducer
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            // same as line above in es6
            return [ action.payload.data, ...state];
    }
    return state;
}