import React from "react";
import { Link } from "react-router-dom";
import Page from "../Component/Assets/Page.png";

const Main = () => {
    const handleClick = () => {
        // Perform any custom actions here
        console.log("Button clicked!");
    };

    return (
        <div className="relative w-screen h-screen">
            <img src={Page} alt="Company Logo" className="w-full h-full object-cover" />
            <Link to="/home" onClick={handleClick}>
                <button 
                      className="absolute bottom-20 right-4 p-2  text-black font-semibold rounded-lg shadow-md focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300"
                   >
                    Click Here >>
                </button>
            </Link>
        </div>
    );
};

export default Main;



















// import React from "react";
// import {useHistory} from "react-router-dom";
// import Page from "../Component/Assets/Page.png";

// const Main = () =>{
//     const history = useHistory();

//     const handleclick = () => {
//         console.log ("Button Clicked!");

//         history.push('/home')
//     };

//     return(
//         <div className="relative">
//         <img src={Page} alt="Resturant Logo" className="w-screen h-screen object-cover"/>
//          {/* <Link to = "/home" /> */}
//          <button 
//                 onClick={handleclick} 
//                     className="absolute bottom-20 right-4 p-2  text-black font-semibold rounded-lg shadow-md focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300"
//                 >
//                     Click Here >>
//                 </button>
         
       
//       </div>
        
//     )
// }

// export default Main;