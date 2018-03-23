// This will help by having only one file in which to refer to a list of all the possible actions for the app.

export const FETCH_STUFF = 'FETCH_STUFF';
export const RECEIVE_STUFF = 'RECEIVE_STUFF';

/*We will also need the actions themselves. We are going to set this up with a function for each action type, which returns an object containing at least the type of the action.
In the case of fetching our stuff, we want to be sure we are getting our data, and so we request it by executing a fetch for our given url. We will be using the native fetch, depending on your project you may want to use a polyfill for fetch.
*/

import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
  };
}
