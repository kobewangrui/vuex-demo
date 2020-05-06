//promist测试
function asyncFun(){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log('异步操作完成');
            if(true){     
                resolve('resolve的数据');
            }else{
                reject('reject Value：这是捕捉到的出错')
            };
            },1000);
    });
    return p;
};
asyncFun().then((val)=>{
    // console.log(val);
}).catch((error)=>{
    // console.log(error);
});





// async await测试
// 理解：async表示这个是async函数，
// await只能等待promise返回结果了才继续执行，后面应该跟着一个promise对象，跟一个其他返回值也没关系，只是会立即执行，没有意义
function sleepFun(time){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log('异步执行完成');//3s后弹出
            if(true){
                resolve('resolve value');
            }else{
                reject('reject Value：这是捕捉到的出错')
            }
        },time);
    });
    return p;//return一个promise对象
};

async function startFun(){
    try{
        let result = await sleepFun(3000);
        console.log(`result Value:${result}`);//3s后弹出
    }catch(error){
        console.log(error);
    }

};
startFun();
