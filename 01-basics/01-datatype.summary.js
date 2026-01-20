// Primitive datatypes
// 7 types: string, number, boolean, null,undefined,symbol,bigint

//Reference types (non primitive)

// array,object,functions

const score=100;
const scorevalue=100.3;
const isloggedIn=false;
const outsidetemp=null;
let useremail;

const id=Symbol("123");
const id1=Symbol("123");
console.log(id==id1);

const bignumber=649346903479849498n;
//console.log(bignumber);
const heros=["shaktiman","nagraj","superman"]
let obj={
    name:"Nitin",
    age:21,
}
const myfunction=function(){
    console.log("hello world");
}
console.log(typeof myfunction);
console.log(typeof id);