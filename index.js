const drivers = ['kenny', 'kyle', 'david', 'frank', 'joe', 'larry', 'lenny']

//anon function takes in an array
const returnFirstTwoDrivers = (array) => {
//return first two drivers as array
   return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//having () rund the function we just want to store it 

//function takes in an integer, multiplier
const createFareMultiplier = (multiplier) => {
    //return anon function
    //function takes parameter fare (integer)
    return function(fare) {
        //multiply fare by multiplier
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)
/*
fareDoubler = 
const createFareMultiplier = (multiplier) => {
    return function(fare) {
        return fare * multiplier
    }
} 
*/

const fareTripler = createFareMultiplier(3)

//function takes in an array, function
const selectDifferentDrivers = (array, func) => {
    return func(array)
}