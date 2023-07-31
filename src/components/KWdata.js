// import { useEffect } from "react";
// import axios from "axios";

// const KWdata = ({ onDataLoaded }) => {
//   useEffect(() => {
//     // API 호출
//     axios
//       .get(
//         "http://192.168.100.30:8090/api/ems/pub/com/2008/kw?device_list=1,2,3&start_date=2023-06-16%2000:00:00&end_date=2023-06-19%2000:00:00&filter=H"
//       )
//       .then((response) => {
//         console.log("API 호출 성공:", response.data);
//         onDataLoaded(response.data);
//       })
//       .catch((error) => {
//         console.error("API 요청 실패:", error);
//       });
//   }, []);

//   return null;
// };

// export default KWdata;
