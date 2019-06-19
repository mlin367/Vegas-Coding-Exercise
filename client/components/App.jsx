import React from 'react';
import Header from './Header';
import Description from './Description';
import Details from './Details';
import Location from './Location';
import HotelList from './HotelList';
import axios from 'axios';
import '../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'description',
      hotel: {},
      list: []
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
    axios.get('/api/hotels').then(result => {
      let list = [];
      let duplicates = {};
      for (let obj of result.data.list) {
        if (!duplicates[obj.name]) {
          duplicates[obj.name] = 1;
          list.push(obj);
        }
      }
      list.sort((a, b) => a.name.localeCompare(b.name));
      this.setState({
        list
      })
    })
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
            <img className="hotelImg" src={this.state.hotel.media ? this.state.hotel.media[0].href : null} />
            <HotelList hotels={this.state.list}/>
          </div>
          <div className="rightCol">
            <Header onTabClick={this.onTabClick} hotel={this.state.hotel} />
            {this.state.view === 'description' ? (
              <Description description={this.state.hotel.description} />
            ) : this.state.view === 'details' ? (
              <Details details={this.state.hotel.details}/>
            ) : (
              <Location address={this.state.hotel.location.address} map={this.state.hotel.media[1].href}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
