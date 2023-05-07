import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import Posts from "./components/Posts";
import "./app.css";
import { useState } from "react";

function App() {
  const [userId, setUserId] = useState();

  return (
    <>
      <Users setUserId={setUserId} />
      <Posts userId={userId} />
    </>
  );
}

export default App;
