import { memo } from "react";

const SearchInput = ({ search, searchList }) => {
  console.log("rerender serarchInput");
  return (
    <>
      <input
        type="text"
        onChange={searchList}
        value={search}
        placeholder="Поиск пользователя"
      />
    </>
  );
};

export default memo(SearchInput);
