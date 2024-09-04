const express=require('express')
const socketIO=require('socket.io')

const http=require('http')
const path=require('path')


const app=express()

const server=http.createServer(app)

const io=socketIO(server)


app.use('/editor',express.static(path.join(__dirname,'client')))

var textEditor="This is co-editor space"


io.on('connection',(socket)=>{
    console.log("Connected to socket")
    socket.emit('startingCoEditor',textEditor)


    socket.on('textUpdate',(text)=>{
        console.log("Text update recieved as : "+text)
        textEditor=text
        socket.broadcast.emit('updatedText',textEditor)

    })


})

server.listen(3000,()=>{
    console.log("Running on port 3000 /editor")
})