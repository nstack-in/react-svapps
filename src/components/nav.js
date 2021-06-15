import React from 'react';

function Nav(props) {
  return (
    <div className="nav">
      Nav bar goes here
      <br/>
      active page is {props.active}
    </div>
  );
}

export default Nav;
