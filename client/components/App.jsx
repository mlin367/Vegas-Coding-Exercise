import React from 'react';
import Header from './Header';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'description',
      hotel: {}
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/hotels/venetian')
      .then(result => {
        this.setState({
          hotel: result.data
        })
      })
  }

  render() {
    return (
      <div className="app">
        <span>SEE ALL LAS VEGAS HOTELS</span>
        <div className="appWrapper">
          <div className="leftCol">
            <img src={this.state.hotel.media ? this.state.hotel.media[0].href : null}></img>
          </div>
          <div className="rightCol">
            <Header hotel={this.state.hotel}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;