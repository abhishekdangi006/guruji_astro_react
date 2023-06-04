import React from 'react';
import Navbar from './component/navbar/Navbar';
import Chakra from './component/chakra/Chakra';
import { problems, problems2} from './data/problem';
import AstrologerList from './component/astrologer/AstrologerList';
import { astrologer } from './data/astrologer';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      astrologer: astrologer,
      problems: problems,
      problems2: problems2,
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <AstrologerList astrologer={this.state.astrologer}/>
        <Chakra problems={this.state.problems} problems2={this.state.problems2}/>
      </div>
    );
  }

}
export default App;
