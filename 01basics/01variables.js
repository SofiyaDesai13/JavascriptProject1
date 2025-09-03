const accountId = 12345
let accountemail = "sofiya@google.com"
var accountPassword = "12345"
accountCity = "India"
let accountState;  // ; is not mandatory 
//accountId = 7  -- const cannot be modified
console.log(accountId);
accountemail = "sd@sd.com" //let variables can be changed
accountPassword = "89234" //var variables can be changed
/* Prefer not to use 'var' because of issues of block scope - '{}' and functional scope , if block and functions*/
accountCity = "Germany"
console.table([accountId,accountemail,accountPassword,accountCity,accountState])
/* output - 
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 12345       │
│ 1       │ 'sd@sd.com' │
│ 2       │ '89234'     │
│ 3       │ 'Germany'   │
│ 4       │ undefined   │
└─────────┴─────────────┘
*/

