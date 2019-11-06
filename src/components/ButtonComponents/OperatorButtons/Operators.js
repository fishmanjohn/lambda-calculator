import React from "react";
import OperatorButton from "./OperatorButton";
import {operators} from '../../../data';
//import any components needed

//Import your array data to from the provided data file
//console.log(ope)
const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         operators.map((item , index) => {
           console.log('this bites')
           return (<OperatorButton key={index} print={item}/>)
         })
       }
    </div>
  );
};
export default Operators;