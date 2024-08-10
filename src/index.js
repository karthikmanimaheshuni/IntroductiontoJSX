import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// const img = "https://picsum.photos/200";

// ReactDom.render(
//   <div>
//     <h1 className="heading" contentEditable="true">
//       hello world{" "}
//     </h1>
//     <ul>
//       <div>
//         <li>Sweets</li>
//         <img
//           className="image"
//           src="https://buddymantra.com/wp-content/uploads/2016/10/sweets.jpg"
//         />
//         <li>chicken tikka masala</li>
//         <img
//           className="image"
//           src="https://th.bing.com/th/id/OIP.-u7rLV3GfLR9PDohjphObgAAAA?rs=1&pid=ImgDetMain"
//         />

//         <li>random images generation</li>
//         <img src={img} />

//         <li>random images generation</li>
//         <img src={img + "?grayscale"} />
//       </div>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// const fname = "karthik";
// const lname = "mani";

// const favnum = 12;

// ReactDom.render(
//   //only expressions will work in {} not statements of JS
//   <div>
//     <h1>hello {fname}</h1>

//     <p>
//       my name is {fname} {lname}
//     </p>

//     <p>my name is {fname + " " + lname}</p>

//     <p>my name is {`${fname}  ${lname}`}</p>

//     <p>my fav num is {favnum}</p>

//     <p>my fav num is {Math.floor(Math.random() * 10)}</p>
//   </div>,
//   document.getElementById("root")
// );

// const name = "karthik";
// const currentdate = new Date();
// const curr = currentdate.getDate();
// console.log(currentdate);
// const year = currentdate.getFullYear();

// ReactDom.render(
//   <div>
//     <p>current year is {curr}</p>
//     <p>current year is {year}</p>
//   </div>,
//   document.getElementById("root")
// );

ReactDom.render(<App />, document.getElementById("root"));
