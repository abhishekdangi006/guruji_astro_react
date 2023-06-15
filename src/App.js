import React from 'react';
import Navbar from './component/navbar/Navbar';
import Chakra from './component/chakra/Chakra';
import { problems, problems2} from './data/problem';
import AstrologerList from './component/astrologer/AstrologerList';
import { astrologer } from './data/astrologer';
import { offer } from './data/offer';
import Offer from './component/offer/Offer';
import Footer from './component/footer/Footer';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      astrologer: astrologer,
      problems: problems,
      problems2: problems2,
      offfer:offer,
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <Offer offer={this.state.offfer}/>
        <AstrologerList astrologer={this.state.astrologer}/>
        <Chakra problems={this.state.problems} problems2={this.state.problems2}/>
        <Footer/>
      </div>
    );
  }

}
export default App;
