const React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className='body'>
        <link rel='stylesheet' type='text/css' href='../home.css' />
        <div className='container'>
          <header>
            <div className='logo-box'>
              <img
                className='logo'
                src='https://www.shutterstock.com/image-vector/vegetables-logo-template-260nw-461447215.jpg'
                alt='logo'
              />

              <div className='home-box'>
                <span className='home'>FRESH VEGETABLES</span>
                <span className='home-sub'>
                  HOME OF QUALITY AND AFFORDABLE PRODUCE
                </span>
                <button className='btn'>
                  <a href='/vegetables'>GET SOME VEGETABLES</a>
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
module.exports = Home;
