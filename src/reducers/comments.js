/**
 * Created by carhe on 4/19/2018.
 */
import {SAVE_COMMENT} from '../actions/types';

export default function(state = [], action={}) {
    switch(action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
    }

    return state;
}

