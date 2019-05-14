import React from 'react';

import '../styles/App.css';

import Heading from './Heading';
import Input from './Input';
import Lists from './Lists';
import Category from './Category';

// import 'bootstrap/dist/css/bootstrap.css';






class App extends React.Component {
  

  

  

  render() {
    return (
      <div className="container">
        <Heading />
        <Category />
        <Input />

        <Lists />
      </div>
    );
  }
}

export default App;
