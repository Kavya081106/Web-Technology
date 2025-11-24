//CORE MODULES
const path = require("path");

console.log(path.dirname('/Users/kavya/OneDrive/Desktop/Sem-3/DSA.js'))
console.log(path.basename('/Users/kavya/OneDrive/Desktop/Sem-3/DSA.js'))
console.log(path.join('/abc','def','efg'))
console.log(path.normalize('/foo/abc/..')) 
console.log(path.normalize('/Users/kavya/OneDrive/../Desktop/Sem-3/DSA.js'))// onedrive, kavya etc all before dot will be delted
console.log(path.extname('/Users/kavya/OneDrive/Desktop/Sem-3/DSA.js'))
console.log(path.resolve('/abc','def','efg'))//absolute path
console.log(path.relative('/abc','def','efg'))//relative path
