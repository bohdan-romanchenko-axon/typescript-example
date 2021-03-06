import * as React from 'react';
import './App.css';
import Hello from "./components/Hello";

const logo = require('./logo.svg');

export interface State {
    enthusiasmLevel?: number;
}

class App extends React.Component<{}, {}> {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Hello name="AXON Frontend team" enthusiasmLevel={3}/>
            </div>
        );
    }
}

export default App;
