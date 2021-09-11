var p=new Promise(function(resolve,reject){
        var x=2+3;
        if(x==5){
            resolve("Promise is excuted successfully");
        }else{
            reject("Rejected");
        }
    });
    p.then(function(fromResolve){
        console.log("Promise is :"+fromResolve)
    }).catch(function(fromReject){
        console.log("Promise is :"+fromReject);
    });
