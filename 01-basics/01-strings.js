const name="Nitin";
const repocount=50;
console.log(name+repocount+" Value"); // dont use this method use below one
console.log(`hello my repo is ${name} and repo count is ${repocount}`); // string interpolation
const game= new String("Nitinnj")
console.log(game[0]);
console.log(game.__proto__);

console.log(game.length); // to know the length
console.log(game.toUpperCase()); // to convert into upper case
console.log(game.charAt(2)); // to know the character at which position
console.log(game.indexOf('t')); // to know the index of character
const string1= game.substring(0,4);
console.log(string1);
const anotherstring1=game.slice(-8,4);
console.log(anotherstring1);
const newstring="  hitesh  ";
console.log(newstring);
console.log(newstring.trim());
const url="https://nitin.com/nitin%20johri";

console.log(url.replace('%20','-'));
console.log(url.includes('nitin'));
console.log(url.includes('nj'));
console.log(url.split('/'));
console.log(game.split("-"));
