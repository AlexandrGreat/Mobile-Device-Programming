import uuid from 'react-native-uuid';
import{ADD_ITEM,REMOVE_ALL,REMOVE_ITEM} from '../actions';

const initialState={items:[]}

const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEM: return {items:[...state.items,action.item]}
        case REMOVE_ITEM: const  index = state.items.findIndex(item=>item.id===action.item.id);return {items:[...state.items.slice(0,index),...state.items.slice(index+1)]}
        case REMOVE_ALL:return{items:[]}
        default: return state;
        }
}
export default cartReducer