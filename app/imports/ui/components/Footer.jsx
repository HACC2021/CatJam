import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
      <footer>
        <div style={divStyle} className="ui center aligned container">
          <hr />
              Beneficiary Services Chatbot <br />
              Office of Hawaiian Affairs<br />
              560 Nimitz Hwy #200 <br />
              Honolulu, HI 96817 <br />
          <a href="https://www.oha.org/">OHA Main Website</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
