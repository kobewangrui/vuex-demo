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




    //Promise.all()
    //Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
    let wake = (time) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${time / 1000}秒后醒来`)
        }, time)
        })
    }
    
    let p1 = wake(3000)
    let p2 = wake(2000)
    
    Promise.all([p1, p2]).then((result) => {
        console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
    }).catch((error) => {
        console.log(error)
    })



    //Promise.race()
    //顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        },1000)
    })
    
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('failed')
        }, 500)
    })
    
    Promise.race([p1, p2]).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)  // 打开的是 'failed'
    })