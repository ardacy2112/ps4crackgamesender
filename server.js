const net = require("net")
const express = require("express")

const app = express()

app.use(express.json())

app.post("/send",(req,res)=>{

let ip = req.body.ip
let pkg = req.body.pkg

let client = new net.Socket()

client.connect(12800, ip, function() {

let data = JSON.stringify({
type:"direct",
packages:[pkg]
})

client.write(data)

client.destroy()

})

res.send("PKG sent to PS4")

})

app.listen(3000,()=>{
console.log("PKG Sender running")
})
