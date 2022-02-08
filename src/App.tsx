import React, { useEffect } from "react";
import { userLogin } from "./Redux/Slices/securitySlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userLogin("eve.holt@reqres.in", "123123"));
    // Cleanup
  }, []);

  return <div className="App"></div>;
}

export default App;
