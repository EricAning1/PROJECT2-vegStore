const React = require('react');
const DefaultLayout = require('./Default.jsx');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};
const headerStyle = {
  color: 'black',
  backgroundColor: '#AF929D',
  height: '5vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

const bodyStyle = {
  display: 'grid',
  gridTemplateAreas: "'header' 'content' 'footer'",
  gridTemplateRows: 'repeat(3, 1fr)',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '50px',
  backgroundColor: '#9fd3c7',
};

const style = {
  textDecoration: 'none',
  lineHeight: '30px',
  fontWeight: 'bold',
};

class Index extends React.Component {
  render() {
    console.log(this.props);
    return (
      <DefaultLayout style={headerStyle} title={'Vegetables Home'}>
        <ul style={bodyStyle}>
          {this.props.vegetables.map((vegetables, i) => {
            return (
              <li>
                <a style={style} href={`/vegetables/${vegetables.id}`}>
                  {vegetables.name[0].toUpperCase() + vegetables.name.slice(1)}
                  <br />
                  <img src={vegetables.img}></img>
                </a>
                <br />
              </li>
            );
          })}
        </ul>
        <nav>
          <a style={style} href='/vegetables/new'>
            Create A New Vegetable
          </a>
        </nav>
      </DefaultLayout>
    );
  }
}
module.exports = Index;
