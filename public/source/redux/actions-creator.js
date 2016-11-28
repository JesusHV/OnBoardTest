export const setCollections = result => ({ type: 'fetch', result });

export const fetch = (options) => (dispatch, getState) => {

  $.ajax({
    url: '/api/restaurants',
    type: 'GET',
    success: (response) => {
      return dispatch(setCollections(response));
    },
    error: (err) => {
      console.log('ERR', err);
    }
  })
};