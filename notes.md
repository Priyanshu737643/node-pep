npm init -y    =>  npm (node package manager)
-------------------------------------------------------------
add => "type": "module", => in package.json => to use import
-------------------------------------------------------------
npm i express
-------------------------------------------------------------
if node_modules is deleted
npm install => will check package-lock.json and package.json to install the node modules that required
-------------------------------------------------------------
we will not push node_modules
create => .gitignore file => inside it write 
/node_modules
.gitignore
-------------------------------------------------------------
install => Postman
-------------------------------------------------------------
(http://localhost:8080/name/john)
app.get("/name/:name,()=>{res.send("Hello " + req.params.name)})

Query String
http://localhost:8080/?name=john
app.get("/",()=>{res.send("Hello " + req.query.name)})

//? http://localhost:8080/?name=john&age=21
app.get("/",()=>{"Hello " + req.query.name + " " + req.query.age})
-------------------------------------------------------------
REST API  =>  
-------------------------------------------------------------


// 🔹 ES Modules (ES6)
// - Uses: import / export
// - Modern JavaScript standard
// - Used in frontend (React, Next.js) and modern Node.js
// - Requires "type": "module" in package.json
// - Must use file extension (.js) in imports


// 🔹 CommonJS (CJS)
// - Uses: require() / module.exports
// - Older Node.js module system
// - Default in Node.js (without "type": "module")
// - No need to write file extension in require
// - Not used in browsers