import React from 'react';

import '../styles/App.css';

import Heading from './Heading';
import Input from './Input';
import List from './List';
import Category from './Category';

// import 'bootstrap/dist/css/bootstrap.css';






class App extends React.Component {
  

  

  

  render() {
    return (
      <div className="containter">
        <Heading />
        <Category />
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
