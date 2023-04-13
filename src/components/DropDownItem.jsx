export default function DropDownItem ({ item, selected, onSelectItem }) {
  return (
    <li
      className={item === selected ? 'active' : ''}
      onClick={() => onSelectItem(item)}
    >
      <a href="#">{item}</a>
    </li>
  );
}