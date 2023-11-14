export const ADD_ITEM='ADD_ITEM'
export const REMOVE_ITEM='REMOVE_ITEM'
export const REMOVE_ALL='REMOVE_ALL'
import uuid from 'react-native-uuid';

export function addItem(item){
    return{
        type:ADD_ITEM,
        item:{...item, id:uuid.v4()}
    }
}

export function removeItem(item){
    return{
        type:REMOVE_ITEM,
        item
    }
}

export function removeAll(){
    return{
        type:REMOVE_ALL,
    }
}