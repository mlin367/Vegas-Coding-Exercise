import React from 'react';
import '../css/Details.css';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    }
  }

  render() {

    const more = <div onClick={() => this.setState({ collapse: false })}>VIEW MORE DETAILS</div>;
    const less = <div onClick={() => this.setState({ collapse: true })}>VIEW LESS DETAILS</div>;

    return (
      <div className="detailsClass">
        <div className={`${this.state.collapse ? 'collapse' : 'extend'}`}>
          {this.props.details.map((detail, i) => (
            <div key={i} className="detailText">
              <span>{detail.label}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
        {this.state.collapse ? more: less}
      </div>
    )
  }
}

export default Details;