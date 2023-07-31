// import React, { useState } from "react";
// import { styled } from "styled-components";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginContainer = styled.div`
//   margin: 0 auto 0 270px;
//   padding: 100px 30px;
//   height: 100vh;
//   background-color: var(--main-color);
//   color: var(--white1-color);
// `;
// const Inner = styled.div`
//   width: 400px;
//   margin: 0 auto;

//   background-color: var(--box-color);
//   padding: 30px;
// `;

// const H2 = styled.h2`
//   font-size: 30px;
//   margin: 0 0 30px 0;
// `;

// const Log = styled.div`
//   display: flex;
//   gap: 10px;
//   justify-content: space-between;
//   flex-direction: column;
//   margin: 0 0 30px 0;
//   font-size: 20px;

//   label {
//     text-align: center;
//   }
// `;

// const Input = styled.input`
//   width: 100%;
//   height: 50px;
//   border-bottom: 1px solid var(--white2-color);
//   border-radius: 8px;
// `;

// const BTN = styled.button`
//   display: inline-block;
//   width: 100%;
//   padding: 10px 30px;
//   background-color: var(--green1-color);
//   color: var(--white1-color);
//   border-radius: 8px;
// `;

// const Login = ({ onLoginSuccess }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         "http://192.168.100.30:8090/api/ems/pub/login",
//         {},
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           params: {
//             id: username,
//             password: password,
//           },
//         }
//       );

//       const token = response.data.token;
//       localStorage.setItem("token", token);

//       console.log("회사 번호:", response.data.cpCode);
//       console.log("회사 번호:", response.data.cpName);

//       // 로그인 성공 시 onLoginSuccess 콜백 호출
//       onLoginSuccess();
//     } catch (error) {
//       console.error("로그인 요청 실패:", error);
//       alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
//     }
//   };

//   return (
//     <LoginContainer>
//       <Inner>
//         <H2></H2>
//         <form>
//           <Log>
//             <label htmlFor="username">ID</label>
//             <Input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </Log>
//           <Log>
//             <label htmlFor="password">PW</label>
//             <Input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Log>
//           <BTN type="button" onClick={handleLogin}>
//             Login
//           </BTN>
//         </form>
//       </Inner>
//     </LoginContainer>
//   );
// };

// export default Login;
