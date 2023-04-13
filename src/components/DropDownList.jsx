import DropDownItem from "./DropDownItem";
import React, { useState } from 'react';

export default function DropDownList ({ itemList }) {
  const [selected, setSelected] = useState('Profile Information');

  return (
    <>
      {
        itemList.map(item => (
          <DropDownItem item={item} selected={selected} onSelectItem={(item) => setSelected(item)} />
        ))
      }
    </>    
  );
}