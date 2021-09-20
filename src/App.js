import React from 'react';
import {  Route, BrowserRouter } from 'react-router-dom';
import AllTransactions from './components/AllTransactions/AllTransactions';
import AddTransaction from './components/AddTransaction/AddTransaction';

export default class App extends React.Component {
  
    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={AllTransactions} />
                        <Route path='/add' exact component={AddTransaction} />
                    </div>
                </BrowserRouter>    
        );
    }
}