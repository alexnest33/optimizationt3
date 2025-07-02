import React from "react";

const SearchInput = ({ search, searchList }) => {
  return (
    <>
      <input type="text" onChange={searchList} value={search} placeholder="Поиск пользователя" />
    </>
  );
};

export default SearchInput;
