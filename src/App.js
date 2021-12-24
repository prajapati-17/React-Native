import React,{Component} from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import ListViewScreen from './components/ListViewScreen';

class App extends Component{
    render(){

        // Store
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <ListViewScreen/>
            </Provider>
        );
    }
}

export default App;


// redux - action,reducer,root reducer,store 