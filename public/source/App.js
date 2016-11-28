import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <nav>
          <div className='nav-wrapper'>
            <a href='#' className='brand-logo right'>Logo</a>
            <ul id='nav-mobile' className='left hide-on-med-and-down'>
              <li><a href='/restaurants'>Restaurantes</a></li>
              <li><a href='/lol'>About</a></li>
            </ul>
          </div>
        </nav>

        <div> {this.props.children} </div>

        <footer className='page-footer'>
          <div className='footer-copyright'>
            <div className='container'>
            © 2016 Jesus Hernandez
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default connect()(App);
