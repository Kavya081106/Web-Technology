const fs = require("fs");

// fs.writeFile('First.txt',"Hello World!!",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Success");
//     }
// })

// fs.readFile('First.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successfully read")
//     }
// })

// fs.appendFile('First.txt','\nAppend data',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successfully appended")
//     }
// })

// fs.stat ('First.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// fs.exists('First.txt',(exists)=>{
//     if(exists){
//         console.log("Exists")
//     }
//     else{
//         console.log("Does not Exists")
//     }
// })

const child_process = require("child_process");

child_process.exec("start https://www.youtube.com/watch?v=C1wnLv7P4Yo",(err,stdout)=>{//stout aaiyaj file kholva mate baki word ma kholi dese 
    if(err){
        console.log(err);
    }
    else{
        console.log("Run successfully!!");
    }
});

// fs.unlink('First.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successfully appended")
//     }
// })




