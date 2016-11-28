'use strict';
/**
 * Import dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions-creator';
import GoogleMap from 'google-map-react';
/**
 * Manage collections
 */
class Collections extends React.Component{

  constructor() {
    super();
    this.fetched = false;
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return<div>
      <ul className=" collapsible">
        <li className="collection-header"><h4>Restaurantes</h4></li>
        { 
          this.props.restaurants.map((restaurant, index) => {
            const rating = Array.apply('star', { length: restaurant.rating });
            return <li key={ index }className="collection-item">
              <div className="collapsible-header active">
                { restaurant.name }
                <a href="#!" className="secondary-content">
                  {
                    rating.map((star, index) => {
                      return <i key= { index } className="material-icons">grade</i>
                    })
                  }
                </a>
              </div>
              <div className="collapsible-body">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://foodiesfeed.com/wp-content/uploads/2016/11/foodiesfeed.com_Cong-café-in-Vietnam_low-1024x768.jpg"></img>
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      { restaurant.name }
                      <i className="material-icons right">location_on</i>
                    </span>
                    <span className="card-content activator grey-text text-darken-4">
                      <div>Sitio: <a href={ restaurant.contact.site }>{ restaurant.contact.site }</a></div>
                      <div>Correo electrónico: <a href={ restaurant.contact.email }>{ restaurant.contact.email }</a></div>
                      <div>Telefono: <a href={ restaurant.contact.site }>{ restaurant.contact.phone }</a></div>
                    </span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      { restaurant.address.street }, { restaurant.address.city }, { restaurant.address.state }
                      <i className="material-icons right">close</i></span>
                      <GoogleMap
                        center={ restaurant.address.location }
                        zoom={ 18 }>
                      </GoogleMap>
                  </div>
                </div>
              </div>
            </li>
          }) 
        }
      </ul>
    </div>;
  }
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.fetchCollections.restaurants
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetch(options){
    dispatch(actions.fetch(options));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);