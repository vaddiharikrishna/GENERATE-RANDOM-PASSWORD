const passwordbox = document.getElementById("password");
const size = 15;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers ="0123456789";
const specialsymbols = "@#$%^&*({})[]\/<?>~!"

const allitems = uppercase + lowercase + numbers + specialsymbols;

function createpassword(){
    let password ='';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialsymbols[Math.floor(Math.random() * specialsymbols.length)];

    while(size > password.length){
        password += allitems[Math.floor(Math.random() * allitems.length)];
    }
    passwordbox.value = password;
}
function copypassword() {
    passwordbox.select();
    document.execCommand("copy"); 
}