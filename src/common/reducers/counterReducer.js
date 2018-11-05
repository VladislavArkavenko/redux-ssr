import { INCREMENT, DECREMENT } from '../constants';

export default function dataReducer(state = 0, action){
    switch(action.type){
        case INCREMENT:
            return ++state ;
        case DECREMENT:
            return --state ;
        default:
            return state;
    }
}