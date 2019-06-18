import React from 'react';
import '../css/Description.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    }
  }

  render() {

    const hide = <div onClick={() => this.setState({ collapse: true })}>HIDE FULL DESCRIPTION</div>;
    const show = <div onClick={() => this.setState({ collapse: false })}>SHOW FULL DESCRIPTION</div>;

    return (
    <div className="descriptionClass">
      <div className={`${this.state.collapse ? 'collapse' : 'extend'}`}>
        {this.props.description ? this.props.description.split('\r\n\r\n').map((paragraph, i) => (
          <p key={Math.random()}>{paragraph}</p>
        )) : null}
      </div>
      {this.state.collapse ? show : hide}
    </div>
    )
  }
};

export default Description;