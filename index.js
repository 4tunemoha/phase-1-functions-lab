// Code your solution in this file!

//funtion name distanceFromHqInBlocks
//scuber headquaters addres stored in const scuberHeadquaters
//destination address stored in dest_address

const scuberHeadquaters = 42;
let dest_address, distance, distanceInFeet, numberOfBlocks;

function distanceFromHqInBlocks(dest_address) {
  // takes in a pickup location for a passenger, and returns the number of blocks from Scuber headquarters on 42nd Street.
  numberOfBlocks = Math.abs(dest_address - scuberHeadquaters);
  return numberOfBlocks;
}
console.log(distanceFromHqInBlocks(50));

// #function 2 distanceFromHqInFeet
//calculate diatsnce from hq in feet
//1block = 264 feet long

function distanceFromHqInFeet(dest_address) {
  const distanceInBlocks = distanceFromHqInBlocks(dest_address); 
    const distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(startDestination, endDestination) {
  const numberOfFeetTravelled = Math.abs((endDestination - startDestination) * 264);
  return numberOfFeetTravelled;
}
console.log(distanceTravelledInFeet(80, 100));

function calculatesFarePrice(startDestination, endDestination) {
  const travelledInFeet = distanceTravelledInFeet(startDestination, endDestination);
  let price; // ✅ FIXED: declared 'price' properly

  if (travelledInFeet <= 400) {
    console.log("This is a free test drive ride");
    return 0;
  } else if (travelledInFeet > 400 && travelledInFeet <= 2000) {
    price = (travelledInFeet - 400) * 0.02;
    console.log(`The charge for the journey is $${price}`);
    return price;
  } else if (travelledInFeet > 2000 && travelledInFeet <= 2500) {
    price = 25;
    console.log(`The charge for the journey is $${price}`);
    return price;
  } else {
    console.log(`Cannot travel that far`);
    return 'cannot travel that far';
  }
}
console.log(calculatesFarePrice(20, 30));
