import React from 'react';
import Navbar from './component/navbar/Navbar';
import Chakra from './component/chakra/Chakra';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name : '', 
      input : false,
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <Chakra/>
      </div>
    );
  }

}
export default App;
