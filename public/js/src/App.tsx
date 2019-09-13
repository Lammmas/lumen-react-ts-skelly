import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
margin: 15px 10px;
background-color: lightgrey;
padding: 10px 15px;
`;

function App() {
    return (
        <div className="App">
            <Header>
                <p id="main-title">
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </Header>
        </div>
    );
}

export default App;
