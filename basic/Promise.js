/**
 * 
 * Promise
 */

//两个原型方法
//Promise.prototype.then()
//Promise.prototype.catch()

//两个常用的静态方法
//Promise.all()
//Promise.race()

const imgs = [
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3632677651,3179755979&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3190441126,995644236&fm=26&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2204139582,2705239110&fm=15&gp=0.jpg'
]


const p = new Promise(function(resolve,reject){
  const img = new Image()
  img.src = imgs[0]
  img.onload = function(){
    resolve(this)
  }
  img.error = function(){
    reject(err)
  }
})