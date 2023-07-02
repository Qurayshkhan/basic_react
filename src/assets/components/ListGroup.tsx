import { MouseEvent, useState } from "react";
import Alert from "./Alert";
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: Props) {
  //   let items = ["Punjab", "KPK", "Sindh", "Balotichistan"];

  // State Hooks
  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {message(items)}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index); // State method
              onSelectedItem(item); // method by Props
            }}
            // onClick={handleMouseEvent}
            // onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

let message = (items: any) => {
  return items.length === 0 ? "No List found" : null;
};

let handleMouseEvent = (event: MouseEvent) => {
  return console.log(event.target);
};

export default ListGroup;
