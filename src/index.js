import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  data:'',
  currenttab: '',
  merge:''
};

const App2 = () => (
    <Provider store = {store}>
      <App/>
    </Provider>
  )
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DATA':
      return {
        ...state,
        data: action.data,
      
      }
      case 'CURRENTTAB':
        return {
          ...state,
          currenttab:action.currenttab
         
        }
        case 'Merged':
        return {
          ...state,
          merge:action.merge
         
        }
    default:
      return state;
  }
}
const store = createStore(reducer);
ReactDOM.render(<App2/>, document.getElementById('root'));
