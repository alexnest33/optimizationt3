import { useState, useCallback, useMemo } from "react";
import SearchInput from "./components/SearchInput";
import CounterButton from "./components/CounterButton";
import ItemList from "./components/ItemList";

import WithRenderTracker from "./components/WithRenderTracker";
import "./App.css";




function App() {
  const [list, setList] = useState([
    { id: 1, name: "Алексей", lastName: "Иванов" },
    { id: 2, name: "Мария", lastName: "Петрова" },
    { id: 3, name: "Дмитрий", lastName: "Смирнов" },
    { id: 4, name: "Екатерина", lastName: "Кузнецова" },
    { id: 5, name: "Игорь", lastName: "Попов" },
    { id: 6, name: "Ольга", lastName: "Васильева" },
    { id: 7, name: "Сергей", lastName: "Новиков" },
    { id: 8, name: "Анна", lastName: "Федорова" },
    { id: 9, name: "Никита", lastName: "Соколов" },
    { id: 10, name: "Елена", lastName: "Морозова" },
    { id: 11, name: "Максим", lastName: "Волков" },
    { id: 12, name: "Алина", lastName: "Алексеева" },
    { id: 13, name: "Артем", lastName: "Лебедев" },
    { id: 14, name: "Юлия", lastName: "Семенова" },
    { id: 15, name: "Владимир", lastName: "Егоров" },
    { id: 16, name: "Ирина", lastName: "Павлова" },
    { id: 17, name: "Роман", lastName: "Козлов" },
    { id: 18, name: "Татьяна", lastName: "Степанова" },
    { id: 19, name: "Андрей", lastName: "Зайцев" },
    { id: 20, name: "Светлана", lastName: "Николаева" },
  ]);


 
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const searchList = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const filtration = useMemo(() => {
    return list.filter((item) => {
      const searching =
        `${item.id} ${item.name} ${item.lastName}`.toLowerCase();
      return searching.includes(search.toLowerCase());
    });
  }, [list, search]);

  const WrappedItem = WithRenderTracker(ItemList)



  return (
    <>
      <CounterButton increment={increment} />
      <h1>Счетчик: {count}</h1>
      <SearchInput search={search} searchList={searchList} />
      <ItemList filtration={filtration} />
      <WrappedItem  /> 
      
      
    </>
  );
}

export default App;
