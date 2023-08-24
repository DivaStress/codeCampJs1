//Understand the differencce between import and require
// import { capitalizeString } from "./string_function";
// const cap = capitalizeString("harro");

// console.log(cap)

//use export to Reuse Code Block
const capitalizeString = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
}

export {capitalizeString};

export const foo = "bar";
export const bar = "foo";


//Use * to Import Everything From File
import * as capitalizeString from "capitalize_strings";

//Create an Export Fallback with export default;
export default function subtract(x,y) {return x - y;}

//Import a default Export
import subtract from "math_functions";

subtract(7,4);