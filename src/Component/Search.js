import React from 'react';
import { connect } from 'react-redux'
import { setSearchField } from '../Redux/dispatch';

// state = this.getCurrentStateFromStore();



const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)