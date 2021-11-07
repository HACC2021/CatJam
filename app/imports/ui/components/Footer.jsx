import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', backgroundColor: '#3469CA', color: 'white', borderTop: '5px solid #3469CA' };
    return (

      <footer className='blue-background'>
        <div style={divStyle} className="ui center aligned container">
              Beneficiary Services Chatbot <br />
              Office of Hawaiian Affairs<br />
              560 Nimitz Hwy #200 <br />
              Honolulu, HI 96817 <br />
        </div>
      </footer>
    );
  }
}

export default Footer;
