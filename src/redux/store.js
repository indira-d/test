import { combineReducers, createStore,  applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};


const reducers = combineReducers({
	transactions: reducer,
})

const persistedStore = loadFromLocalStorage();


const store = createStore(reducers, persistedStore, 
	composeWithDevTools(
 		 applyMiddleware(thunkMiddleware), 
		  
))

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});


export default store