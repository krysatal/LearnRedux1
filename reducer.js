import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './actionTypes'
const defaultStore = {
    inputValue: '',
    list: ['按摩','洗脚','捶背']
}
export default (state = defaultStore, action)=>{
    if (action.type===CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type ===ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type ===DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}
