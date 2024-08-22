function getData(dataId, getNextData){
   return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("data", dataId);
        resolve("success");
        if(getNextData){
            getNextData();
        }
    }, 2000)
   })
}
getData(122)