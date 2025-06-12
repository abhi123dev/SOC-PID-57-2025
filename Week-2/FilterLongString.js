// Write a function that takes an array of strings as argument and returns a new array with only the strings that have a length greater than 5.


function filterLongString(arr){
    return arr.filter((str)=>{
        return str.length > 5;
    })
}

