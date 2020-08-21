//promist测试
function asyncFun(){
    let p = new Promise((resolve,reject)=>{//Promise是一个容器里面放一些异步操作(如 ajax)
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
// asyncFun().then((val)=>{
//     console.log(val);
// },(error)=>{
//     console.log(error);
// });






// 关于await后面跟不跟Promise
let f1=()=>{//await后Promise
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("周")
            resolve('周 then Fun');     //这一步必写，否则会阻塞在这里
        }, 1000);
    })
   
}
let f2=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("震")
            resolve();
        }, 1000);
    })
}
let f3=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("南")
            resolve();
        }, 1000);
    })
}
async function  con(){
    await f1().then(v=>console.log(v));//周 then Fun
    await f2();
    await f3();
    console.log('王大锤')
    return '123' //return 之后then的参数才会得到值 ，类似return Promise.resolve(123)

}
// con().then(v=>console.log(v,'confun then Fun'));
// 打印结果  每隔1秒输出一个字   隔1s 周(紧接着打印 周 then Fun) 隔1s 震  隔1s  南  接着打印王大锤 接着打印123confun then Fun



function H1(){//await后普通
    setTimeout(()=>{
        console.log("I  ")
    },1000)
}
function H2(){
    setTimeout(()=>{
    console.log("am  ")
   },1000)
}
function H3(){
    setTimeout(()=>{
    console.log("fangqianwen  ")
    },1000)
}
async function  Hon(){
    // 同步执行
    //await 后面不跟promise  等于如下代码 有没有await不影响
    // H1()
    // H1()
    // H1()
    // console.log('王大锤 HonFun')

    await H1();
    await H2();
    await H3();//await 后面不跟promise     h2不等待h1类似。。。 console.log('王大锤 HonFun')也不会等待，会率先执行
    console.log('王大锤 HonFun')
    return '123'//return 之后then的参数才会得到值 ，类似return Promise.resolve(123)
}
Hon().then(v=>console.log(v,'Hon Fun Then'));
// 打印结果  王大锤 HonFun   123Hon Fun Then 隔了一秒后，同时输出三个字 I am  fangqianwen  
// 之所以这样是因为王大锤 HonFun是同步任务顺序执行  promise在事件轮询的微队列在同步任务之后执行  await在事件轮询的宏队列最后才执行   









// async await测试
// 理解：async表示这个是async函数 返回一个promise对象 可硬使用sleepfun.then(v=>v)，必须dei renturn才可以，否则then的参数是一个undefined
// await只能等待promise返回结果了才继续执行，后面应该跟着一个promise对象，跟一个其他返回值也没关系，只是会立即执行(会默认变为Promise.resolve(value))，没有意义
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
    return p;//return一个promise对象  如果没有return  ,则默认return一个Promise.resolve(undefined),     return value 等于 Promise.resolve(undefined)
};

async function startFun(){
    try{
        let result = await sleepFun(3000);
        console.log(`result Value:${result}`);//3s后弹出
    }catch(error){
        console.log(error);
    }
};
// startFun();

// toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
// 对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

// js判断数据类型的最完美方法   取到Object的原型再转换成String  通过call\apply改变this达成各种数据的类型

    Object.prototype.toString.call([1,2,3])//[object Array]
    Object.prototype.toString.apply([1,2,3])//[object Array]






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
        // console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
    }).catch((error) => {
        console.log(error)
    })



    //Promise.race()
    //顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        },1000)
    })
    
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('failed')
        }, 500)
    })
    
    Promise.race([p3, p4]).then((result) => {
        // console.log(result)
    }).catch((error) => {
        console.log(error)  // 打开的是 'failed'
    })


    // Promise.race可用用来设置请求接口网络超时，10s后执行的空promise,和请求数据。如果请求数据超过10s，则率先返回10s后执行的网络超时,巧妙