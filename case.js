// let cat={name: "Athena"}
// function swap(feline){
//     feline.name="Wild";
//     feline={name:"Tabby"}
// }
// swap(cat)
// console.log(cat.name)

// class Animal{
//     static belly=[]
//     eat(){Animal.belly.push('food')}
// }
// let a= new Animal()
// a.eat()
// console.log(Animal.belly[0])

// let cat= Object.create({type:'lion'})
// cat.size='large'
// console.log(cat.type, cat.size)

// const arr1=["f1f","f2f","f3f"]
// const arr3=[4,5,6]
// console.log([...arr1,...arr3])
// // console.log([...arr1,...arr3])
// console.log(arr1.unshift('f2f'))

// let animals=['kangoroo','bear','coyote']
// let key=(element,index)=>element[index]

// console.log(4+'4')

// const myNumbers=[1,2,3,4,5,6,7]
// const myFunction=arr=>{
//     return arr.map(x=>x+3).filter(x=>x<7)
// }
// console.log(myFunction(myNumbers))

// let rainForestAcres=10;
// let animals=0
// while(rainForestAcres<13||animals<=2){
//     rainForestAcres++
//     animals+=2
// }
// console.log(animals)

// const dessert= {type: 'pie'}
// dessert.type='pudding'
// const second=dessert
// second.type='fruit'
// console.log(dessert.type)

// let obj={}

// let animals=[{type:'lion'}, 'tiger']
// let clones= animals.slice()
// clones[0].type='bear'
// clones[1]='sheep'
// console.log(animals[0].type,clones[0].type);
// console.log(animals[1],clones[1])

// class RainForest{
//     static minimoRainFail=60
// }
// let congo=new RainForest()
// RainForest.minimoRainFail=80
// console.log(RainForest().minimoRainFail)

// console.log([3]==[3])

// let animals=['eagles','osprey', 'salmon']
// let key= animal=>animal==='salmon'
// console.log(animals.some(key))


// console.log('hola')
// setTimeout(()=>{
//     console.log('mundo')
// },0)

var grito='gfdglkj'
var bear={sound: 'road'}
function road(){
    console.log(this)
}
road()