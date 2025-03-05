// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42; 
    return Math.abs(pickupLocation - hq);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
  }
  
  // Testing functions
  console.log(distanceFromHqInBlocks(43)); // Should return 1
  console.log(distanceFromHqInFeet(50)); // Should return 2112
  console.log(distanceTravelledInFeet(43, 48)); // Should return 1320
  console.log(calculatesFarePrice(34, 32)); // Should return 2.56
  console.log(calculatesFarePrice(34, 24)); // Should return 'cannot travel that far'
  
