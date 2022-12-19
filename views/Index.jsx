const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Index extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='body'>
        <nav>
          <a href='/'>HOME</a>

          <a href='/vegetables/new'>ADD NEW VEGETABLES</a>
        </nav>

        <DefaultLayout title={'SHOP'}>
          <link rel='stylesheet' type='text/css' href='../index.css' />
          <ul className='items'>
            {this.props.vegetables.map((vegetables, i) => {
              return (
                <li>
                  <div className='index'>
                    <a href={`/vegetables/${vegetables.id}`}>
                      {vegetables.name[0].toUpperCase() +
                        vegetables.name.slice(1)}
                      <br />
                      <img src={vegetables.img}></img>
                    </a>
                  </div>
                  <br />
                  <p>{vegetables.price} / lb</p>
                </li>
              );
            })}
          </ul>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Index;
