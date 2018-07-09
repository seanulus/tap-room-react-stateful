import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function Admin(props) {
  let _brewer = null;
  let _name = null;
  let _abv = null;
  let _price = null;
  let _description = null;
  let _remaining = null;
  let _photo = null;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onAddingNewKeg({brewer: _brewer.value, name: _name.value, abv: _abv.value, price: _price.value, description: _description.value, remaining: _remaining.value, photo: _photo.value, id: v4()});
    _brewer.value = '';
    _name.value = '';
    _abv.value = '';
    _price.value = '';
    _description.value = '';
    _remaining.value = '';
    _photo.value = '';
  }

  return(
    <div>
      <style jsx>{`
        div {
          width: 100%;
          height: 600px;
          color: white;
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          width: 30%;
          margin: auto;
        }
        input {
          height: 3vw;
          margin-top: 20px;
        }
        button {
          width: 30%;
          height: 3vw;
          margin: 10px auto;

        }

      `}</style>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='remaining'
          placeholder='Remaining Beers'
          ref={(input) => {_remaining = input;}}/>
        <input
          type='text'
          id='photo'
          placeholder='Brewery Logo URL'
          ref={(input) => {_photo = input;}}/>
        <button type='submit'>Post New Keg</button>
      </form>
    </div>
  );
}

Admin.propTypes = {
  onAddingNewKeg: PropTypes.func
};

export default Admin;
