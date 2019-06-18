import React from 'react';
import Header from './Header';
import Description from './Description';
import Details from './Details';
import Location from './Location';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'description',
      hotel: {}
    };
    this.getData = this.getData.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/hotels/venetian').then(result => {
      this.setState({
        hotel: result.data
      });
    });
  }

  onTabClick(e) {
    this.setState({
      view: e.target.className
    });
  }

  render() {
    return (
      <div className="app">
        <span>SEE ALL LAS VEGAS HOTELS</span>
        <div className="appWrapper">
          <div className="leftCol">
            <img
              src={
                this.state.hotel.media ? this.state.hotel.media[0].href : null
              }
            ></img>
          </div>
          <div className="rightCol">
            <Header onTabClick={this.onTabClick} hotel={this.state.hotel} />
            {this.state.view === 'description' ? (
              <Description description={this.state.hotel.description} />
            ) : this.state.view === 'details' ? (
              <Details details={this.state.hotel.details}/>
            ) : (
              <Location />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
