const React = require('react');
const DefaultLayout = require('./Default.jsx');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
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
      <DefaultLayout title={'Vegetables Index Page!'}>
        <ul>
          {this.props.vegetables.map((vegetables, i) => {
            return (
              <li>
                <a style={style} href={`/vegetables/${vegetables.id}`}>
                  {vegetables.name}
                </a>
                <br />
                <a href={`/vegetables/${vegetables._id}/edit`}>EDIT</a>
                <br />
                <form
                  action={`/vegetables/${vegetables._id}?_method=DELETE`}
                  method='POST'
                >
                  <input type='submit' value='DELETE' />
                </form>
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
