/**
 * 
 * @param {*} obj 
 * @returns 
 * 
 * This function had to be created because, when doing the reducer and grouping, the keys of the object had separations.
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
