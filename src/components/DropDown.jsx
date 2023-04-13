import DropDownList from "./DropDownList";
import React, { useState } from 'react';

export default function DropDown() {
  const itemList = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];
  const [opened, setOpened] = useState('');

  return (
    <div className="container">
      <div data-id="wrapper" className={"dropdown-wrapper" + opened}>
        <button data-id="toggle" className="btn" onClick={() => opened ? setOpened('') : setOpened(' open')}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <ul data-id="dropdown" className="dropdown">
          <DropDownList itemList={itemList}/>
        </ul>
      </div>
    </div>
  );
}
