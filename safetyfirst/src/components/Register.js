// import React, { useState, useEffect } from 'react';
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
// import { Textarea } from "./ui/textarea";
// import axios from 'axios'; 

// const Register = () => {
//   const [formData, setFormData] = useState({
//     uinfin: '', name: '', sex: '', race: '', nationality: '', dob: '', email: '', 
//     mobileno: '', regadd: '', housingtype: '', marital: '', edulevel: '', assessableincome: ''
//   });
//   const [config, setConfig] = useState({});
//   const [isFormFilled, setIsFormFilled] = useState(false);

//   useEffect(() => {
//     fetchConfig();
//   }, []);

//   const fetchConfig = async () => {
//     try {
//       const response = await axios.get("/getEnv");
//       setConfig(response.data);
//     } catch (error) {
//       alert("ERROR: " + JSON.stringify(error.response.data.error));
//     }
//   };

//   const handleRetrieveMyInfo = async (event) => {
//     event.preventDefault();
//     const { clientId, redirectUrl, attributes, purpose, authApiUrl } = config;
//     const state = Math.floor(Math.random() * 100000);
    
//     const authoriseUrl = `${authApiUrl}?client_id=${clientId}&attributes=${attributes}&purpose=${purpose}&state=${encodeURIComponent(state)}&redirect_uri=${redirectUrl}`;
    
//     window.location = authoriseUrl;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add code here to submit the application form back to server for processing
//     console.log("Form submitted:", formData);
//     alert("Application submitted successfully!");
//   };

//   useEffect(() => {
//     // Check if the URL contains the callback code
//     if (window.location.href.indexOf("callback?code") > -1) {
//       callServerAPIs();
//     } else if (window.location.href.indexOf("callback") > -1) {
//       alert("ERROR: Missing Auth Code");
//     }
//   }, []);

//   const callServerAPIs = async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const authCode = urlParams.get('code');
//     const state = urlParams.get('state');

//     try {
//       const response = await axios.post("/getPersonData", { authCode, state });
//       prefillForm(response.data);
//     } catch (error) {
//       alert("ERROR: " + JSON.stringify(error.response.data.error));
//     }
//   };

//   const prefillForm = (data) => {
//     const noaData = data["noa-basic"] ? formatMoney(data["noa-basic"].amount, 2, ".", ",") : "";
//     let address = "";
//     if (data.regadd.type === "SG") {
//       address = `${data.regadd.block} ${data.regadd.building}\n#${data.regadd.floor}-${data.regadd.unit} ${data.regadd.street}\nSingapore ${data.regadd.postal}`;
//     } else if (data.regadd.type === "Unformatted") {
//       address = `${data.regadd.line1}\n${data.regadd.line2}`;
//     }

//     const newFormData = {
//       uinfin: data.uinfin,
//       name: data.name,
//       sex: data.sex,
//       race: data.race,
//       nationality: data.nationality,
//       dob: data.dob,
//       email: data.email,
//       mobileno: `${data.mobileno.prefix}${data.mobileno.areacode} ${data.mobileno.nbr}`,
//       regadd: address,
//       housingtype: data.housingtype || data.hdbtype,
//       marital: data.marital,
//       edulevel: data.edulevel,
//       assessableincome: noaData
//     };

//     setFormData(newFormData);
//     setIsFormFilled(true);
//   };

//   const formatMoney = (n, c, d, t) => {
//     c = isNaN(c = Math.abs(c)) ? 2 : c;
//     d = d === undefined ? "." : d;
//     t = t === undefined ? "," : t;
//     let s = n < 0 ? "-" : "";
//     let i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
//     let j = (j = i.length) > 3 ? j % 3 : 0;
//     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">Register with MyInfo</h1>
//       {!isFormFilled ? (
//         <div className="text-center mb-8">
//           <p className="mb-4">To start the SingPass login and consent process, click on the "Retrieve MyInfo" button below.</p>
//           <Button onClick={handleRetrieveMyInfo}>Retrieve MyInfo</Button>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
//           {Object.entries(formData).map(([key, value]) => (
//             <div key={key} className="mb-4">
//               <Label htmlFor={key} className="block text-gray-700 text-sm font-bold mb-2">
//                 {key.charAt(0).toUpperCase() + key.slice(1)}
//               </Label>
//               {key === 'regadd' ? (
//                 <Textarea
//                   id={key}
//                   value={value}
//                   disabled
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               ) : (
//                 <Input
//                   type="text"
//                   id={key}
//                   value={value}
//                   disabled
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               )}
//             </div>
//           ))}
//           <div className="flex items-center justify-center">
//             <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//               Submit Application
//             </Button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Register;

import React from 'react';
import '../styles/Register.css' 

const Register = () => {
  return (
    <div className="login-container">
      <img src="Singpass_Logo.png" alt="SingPass Logo" />
      <h2>Login with SingPass</h2>

      {/* Manual Login Form */}
      <form action="#" method="post">
        <label htmlFor="username">SingPass ID</label>
        <input type="text" id="username" name="username" placeholder="Enter your SingPass ID" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>

      {/* OR Divider */}
      <hr />
      <div className="qr-option">
        <p>Or scan the QR code to log in</p>
        <img src="LoginQRCode.jpg" alt="Scan QR Code" />
      </div>

      <div className="signup-option">
        <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
      </div>
      <p className="footer-note">For assistance, contact support at 1800-111-1111</p>
    </div>
  );
};

export default Register;
