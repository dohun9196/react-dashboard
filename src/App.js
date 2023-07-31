// 로그인시 코드

// import React, { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import Header from "./components/Header";
// import { Gnb } from "./components/HeaderData";
// import Login from "./components/Login";
// import Main from "./Main";

// const App = () => {
//   // 로그인 상태를 관리하기 위한 상태 변수
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   // 로그인 성공 시
//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     navigate("/Main");
//   };

//   // 로그아웃 시
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("token");
//   };

//   return (
//     <div className="Wrap">
//       <Header Gnb={Gnb} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//       <Routes>
//         {/* 로그인 페이지 */}
//         <Route
//           path="/"
//           element={<Login onLoginSuccess={handleLoginSuccess} />}
//         />
//         {/* 메인 페이지 true일 때만 렌더링 */}
//         {isLoggedIn ? (
//           <Route path="/Main" element={<Main />} />
//         ) : // Main 페이지로X
//         null}
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { Gnb } from "./components/HeaderData";
import Main from "./Main";

const App = () => {
  const navigate = useNavigate();

  // 항상 로그인 상태로 설정
  const isLoggedIn = true;

  // 로그아웃 시
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="Wrap">
      <Header Gnb={Gnb} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/Main" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
