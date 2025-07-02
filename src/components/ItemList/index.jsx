import { useMemo, memo } from "react";

const ItemList = ({ list, search }) => {
  const filtration = useMemo(() => {
    return list.filter((item) => {
      const searching =
        `${item.id} ${item.name} ${item.lastName}`.toLowerCase();
      return searching.includes(search.toLowerCase());
    });
  }, [list, search]);

  return (
    <>
      <ul>
        {filtration.map((item) => {
          return (
            <li key={item.id}>
              <p>
                {item.id} {item.name} {item.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default memo(ItemList)
