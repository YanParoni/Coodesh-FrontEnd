import logo from "./logo.svg";
import "./App.css";
import { useFetchInitialQuery } from "./services/api";
import { useSelector } from "react-redux";
import { increment } from "./services/pagination";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.patientApi.queries);
  const page = useSelector((state) => state.pagination.value);
  const { data, error, isLoading, isFetching, isSucess } =
    useFetchInitialQuery(page);
  const key = Object.keys(user);

  const [patientList, setList] = useState();
  useEffect(() => {
    if (!patientList) {
      return setList(user[key]?.data?.results);
    } else {
      return setList((prev) => [
        ...prev,
        ...user[`fetchInitial(${page})`].data.results,
      ]);
    }
  }, [data]);

  return (
    <div className="text-3xl font-bold underline">
      <h1>Home</h1>
      {isLoading && <h2>....Loading</h2>}
      {isFetching && <h2>....Fetching</h2>}
      {error && <h2>error{console.log(error)}</h2>}
      {isSucess && <h2>{console.log(data)}</h2>}

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        button that will increment on intersection observer
      </button>
      <button></button>
    </div>
  );
}

export default App;
