

var socket=io()
const textArea=document.getElementById("textEditor")

socket.on("startingCoEditor",(data)=>{
    textArea.value=data
    console.log("Starting data: "+data)
})

socket.on('updatedText',(data)=>{
    console.log("Updated text recived as: "+data)
    textArea.value=data
})

textArea.addEventListener('keydown',()=>{
    console.log("Enterd Text: "+textArea.value)
    socket.emit('textUpdate',textArea.value)
})