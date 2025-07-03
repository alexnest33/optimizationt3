import { memo } from "react";

const SearchInput = ({ search, searchList }) => {
  return (
    <div>
      <input
        type="text"
        onChange={searchList}
        value={search}
        placeholder="Поиск пользователя"
      />
    </div>
  );
};

export default memo(SearchInput);
