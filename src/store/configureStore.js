/**
 * Created by littlestone on 2017/2/16.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

/**
 * thunk的作用是使action创建函数可以返回一个function代替一个action对象
 * @type {StoreEnhancerStoreCreator<S>}
 */
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

  export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);

    //热替换选项
    if (module.hot) {
      module.hot.accept('../reducers', ()=>{
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer)
      })
    }
    return store;
  }