import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {
  return (
    <div className='header'>
        <h1>{title}</h1>
        <Button 
        color={showAdd ? 'pink' : 'hotpink'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}/>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header;