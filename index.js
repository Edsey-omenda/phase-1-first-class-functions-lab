// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(){
   
      return ['Antonia','Nuru'];
}

const returnLastTwoDrivers = function(){
   //const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
      return ['Amari','Mo'];
}

const selectingDrivers = (() => [returnFirstTwoDrivers, returnLastTwoDrivers])();
/*const  selectingDrivers = (() => () => [
      returnFirstTwoDrivers,
      returnLastTwoDrivers,
])();*/

//var fare = 5;
/*const createFareMultiplier = () =>{
     return  fare * fare;}
     */
     const createFareMultiplier = function (multiplynumber){
      return function (number){
        return multiplynumber * number;
      }
}

    const fareDoubler = function  (fare){
          return (fare)*2;
    }

    const fareTripler = function  (fare){
      return (fare)*3;
}

const selectDifferentDrivers = function (drivers, firstTwoDrivers)  {
      return firstTwoDrivers(drivers);
    }
    /*const selectDifferentDrivers = function (drivers, lastTwoDrivers)  {
      return lastTwoDrivers(drivers);
    }*/



    