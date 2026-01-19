const accountId=12834;
let accountEmail="nitinjohri@google.com";
var accountPassword="12345";
accountCity="New Delhi";
let accountState;
//accountId=1234;//
console.log(accountId);
accountEmail="nitin@gmail.com";
accountPassword="21223";
accountCity="Bengaluru";
/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
