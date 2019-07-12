## Learn Redux
    关于实际开发中如何使用
    1.创建store文件夹在该文件夹下面创建index.js，写入如下：
    import {createStore} from 'redux'
    const store = createStore
    export default store 
    2.在store文件夹下面新建reducer.js写入如下：
    const defaultstore = {}
    export default (store=defaultStore, action)=>{
        return store
    }
    3.将reducer.js引入index.js中，即
    import {createStore} from 'redux'
    import reducer from './reducer'
    const store = createStore(reducer)
    export default dtore
    4.在reducer.js文件的defaultState对象中，加入两个属性:inputValue和list编码如下：
    const defaultStore = {
        inputValue = ''
        list: [
            'one',
            'two'
        ]
    }
    5.在组件中进行引入
    import store from './store/index'
    6.把action type单独写入一个文件
    7.在src/store文件夹下面，新建立一个actionTypes.js文件，然后把Type集中放到文件中进行管理
    8.在组件中进行引入如import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM } from './store/actionTypes'
    9.在方法中进行引用dispatch给store
    10.在reducer.js中引入type接受组件传来的新的值进行处理后之后return回组件