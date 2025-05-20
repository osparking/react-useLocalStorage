import { useState } from "react";
import "./App.css";
import login from "./assets/login";
import { useLocalStorage } from "./custom-hook";

function App() {
  const data = { username: "admin", password: "1234", code: "" };
  const [loading, setLoading] = useState(false);
  const [JWT_TOKEN, setValue, removeKey] = useLocalStorage("JWT_TOKEN", null);
  const handleLogin = () => {
    login(data, setLoading, setValue);
  };
  const handleLogout = () => {
    removeKey();
    setValue(null);
  };
  const JWT_FORMATTED =
    JWT_TOKEN?.substring(0, 21) + "....." + JWT_TOKEN?.substring(120);

  return (
    <>
      <h1>맞춤 후크 - 로컬 스토리지 항목</h1>
      <div className="card">
        <p>JWT_TOKEN: {JWT_TOKEN ? JWT_FORMATTED : '(undefined)'}</p>
        <button disabled={loading} onClick={handleLogin}>
          로그인
        </button>
        <button disabled={loading} onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </>
  );
}

export default App;
