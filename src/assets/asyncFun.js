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
// toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
// 对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

// js判断数据类型的最完美方法   取到Object的原型再转换成String  通过call\apply改变this达成各种数据的类型

    Object.prototype.toString.call([1,2,3])//[object Array]
    Object.prototype.toString.apply([1,2,3])//[object Array]


startFun();
