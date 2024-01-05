const accountId = 1213141516;
let accountEmail = 'email@gmail.com';
var accountPassword = '123456';
// prefer not to use var variables
accountCity = 'Dhaka'; // naver use
let accountState;

// accountId = 12345; // not allowed
accountEmail = 'example@gmail.com';
accountPassword = '101010';
accountCity = 'Rajshahi';

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
