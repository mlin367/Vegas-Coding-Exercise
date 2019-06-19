import React from 'react';
import '../css/Details.css';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  render() {
    const more = (
      <div className="more" onClick={() => this.setState({ collapse: false })}>
        <span>VIEW MORE DETAILS </span>
        <i class="fas fa-chevron-circle-down fa-xs"></i>
      </div>
    );
    const less = (
      <div className="less" onClick={() => this.setState({ collapse: true })}>
        <span>VIEW LESS DETAILS </span>
        <i class="fas fa-chevron-circle-up fa-xs"></i>
      </div>
    );

    return (
      <div className="detailsClass">
        <div className={`${this.state.collapse ? 'collapse' : 'extend'}`}>
          {this.props.details.map((detail, i) => (
            <div key={i} className="detailText">
              <span className="label">{detail.label}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
        {this.state.collapse ? more : less}
      </div>
    );
  }
}

export default Details;
