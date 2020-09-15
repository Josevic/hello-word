import React from 'react';
import logo from '../logo.svg';

export default class Cabecera {
  manejaClick = () => {
    console.log('He sido clicleado');
  }
    render() {
      const { miau} = this.props
      
        return (
    <header className="App-header">
          <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {miau}
            
          </h1>               
        </header>
        );
    }
}
