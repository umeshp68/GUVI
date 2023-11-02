function getdressed(callback){
    console.log("dressed")
    setTimeout(()=>{
        callback()
    },3000)
}

function eatbreakfast(callback){
    console.log("ate")
    setTimeout(()=>{
        callback()
    },3000)
}

function goout(){
    console.log("done")
   }

getdressed(()=>{
 eatbreakfast(()=>{
    goout()
    })
   })