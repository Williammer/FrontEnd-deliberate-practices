import React from 'react';
import StopWatch from './components/StopWatch';
import NameForm from './components/NameForm';
import RepoListContainer from './components/DataFetchList';
import logo from './logo.svg'
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <img
                  src={logo}
                  className="App-logo"
                  alt="logo"
                />
            </div>

            <StopWatch />
            <br/>
            <br/>
            <NameForm />

            <RepoListContainer username="Williammer" />
        </div>
    );
}

export default App;