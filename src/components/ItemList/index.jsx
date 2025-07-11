import { memo } from "react";

const ItemList = ({ filtration }) => {


  return (
    <ul>
      {filtration?.map((item) => {
        return (
          <li key={item.id}>
            <p>
              {item.id} {item.name} {item.lastName}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default memo(ItemList);
