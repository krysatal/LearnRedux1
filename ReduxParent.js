import React, { Component } from 'react'
import { Input,Button,List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'
import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './store/actionTypes'
class ReduxParent extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) // 状态侦查
    }
    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input style={{ width:'250px', marginRight:'10px'}}
                           onChange={this.changeInputValue.bind(this)}
                           value={this.state.inputValue}
                    />
                    <Button type="primary" onClick={this.addItemList.bind(this)}>增加</Button>
                </div>
                <div>
                    <div style={{marginTop:'10px',width:'300px'}}>
                        <List
                            bordered
                            //关键代码-----------start
                            dataSource={this.state.list}
                            //关键代码-----------end
                            renderItem={(item, index)=>(<List.Item onClick={this.deleteItemList.bind(this, index)}>{item}</List.Item>)}
                        />
                    </div>
                </div>
            </div>
        )
    }
    storeChange() {
        this.setState(store.getState())
    }
    changeInputValue(e) {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }
    addItemList() {
        const action = {
            type: ADD_ITEM
        }
        store.dispatch(action)
    }
    deleteItemList(index) {
        const action = {
            type: DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }
}
export default ReduxParent
