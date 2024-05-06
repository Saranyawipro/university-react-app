/**
 * This function sort array or object alphabetically
 * @param {Array} items items: Array of Objects
 * @param {Array} property property: field in Array
 * @param {Array} sortOrder sortOrder: Array sortOrder
 * @returns {Array} Sorted Array
 */
export const sort = (items, property, sortOrder) => {
  let sortArray = items;
  if(sortOrder){
   sortArray.sort(function(a,b){return a.property < b.property ? -1 : 1});
  }else{
   sortArray.sort(function(a,b){return a.property < b.property ? 1 : -1});
  }
    return sortArray;
  }