/**
 * 
 * @param {*} obj 
 * @returns 
 * 
 * Function that renames the keys of an object according to the group
 */

//Initial clone object functiom
const clone = (obj) => Object.assign({}, obj);

export const renameKeys = (object, key, newKey) => {
    //pass original objecto to clone
     const clonedObj = clone(object);
    //Catch original keys
     const targetKey = clonedObj[key];
    //Delete original key
     delete clonedObj[key];
    //asing new key
     clonedObj[newKey] = targetKey;
    //Return new object with new key
     return clonedObj;
   
   };
