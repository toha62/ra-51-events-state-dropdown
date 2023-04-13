import DropDownList from "./DropDownList";

const itemList = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out',
];

export default function DropDown() {
  return (
    <div className="container">
      <div data-id="wrapper" className="dropdown-wrapper open">
        <button data-id="toggle" className="btn" onClick={toggleOpen}>
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

function toggleOpen() {
  console.log('button pressed');
}