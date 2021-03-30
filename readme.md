## 1.1. ts 是由微软开发的开源的编程语言;
## 2. typescript 是javascript 的超集;
## 3. ts 是开发大型应用的基石;
## 4. ts 提供了更丰富的语法提示;
## 5. ts 在编写阶段能够检查错误;

类型检查;

jsppxiaoye 

## 2.1. ts 是静态类型 , js 是动态类型;

tsc index.ts

## 3.1 数据类型：
  
  原始数据类型： boolean string number null undefined symbol
  引用数据类型： object

  
  基础类型：boolean string number null undefined symbol
    any  never void

    any 没办法有代码提示;
    any 在代码测试的时候用;

   对象 interface
   数组 number[]  string[] boolean[]  泛型的写法： Array<number>

   函数的注解：
      let test = function (a: number, b: number): number {
        return a + b
      }
   新的语法特性：
     as 断言
     class (OOP 面向对象的三大特性) ： 封装 , 继承, 多态;

  ## 4.1 原始数据的注解;
  布尔值的注解：
  let isDone: boolean = false;

  数字的注解：
  let decLiteral: number = 6;

  字符串的注解:
  let name: string = "bob";

## 5.1 原始数据的注解;
  any 数据类型： 任意数据类型;
    1. 如果是不同变量的话，可以是任意的数据类型：
    2. 如果是对象的话, any 不能够提示原有的属性和方法;
    3. 未给初始值的变量类型 为 any;

 ## 6.1 原始数据的注解;
  Void  当一个函数没有返回值时

  null && undefined;
    null和undefined是所有类型的子类型
    --strictNullChecks :  let num: number = undefined;

  Never  类型表示的是那些永不存在的值的类型;

  object 表示非原始类型

 ## 7.1 类型注解 && 类型推断; 
    7.2 联合类型;
      注意：1. 联合类型的共有属性是不会报错;
            2. 在赋值的时候确认类型;

 ## 8.1 接口 interface
  1. 对象的形状进行描述;
  2. 对类的一部分行为的抽象;

  interface 不可多，不可少;
  可选属性：  age?: number;
  任意属性：[propName: string]: any
  只读属性： readonly

  interface Person {
    name: string;
    age?: number;  // 可选属性;
    [propName: string]: any
  }

## 9.1数组的注解：
     写法方式 
      1. 类型[]  // number[]  (纯数字的数组， 没有长度限制) , push 非类型的数据，是进不去的;

      2. Array<类型>  Array<number>
      3. interface 方式;
              interface List {
                [index: number]: number | string
              }
      4. 类数组
              interface Args {
                [index: number]: any;
                length: number;
                callee: Function;
              }


              function test() {
                let args: IArguments = arguments;
              }

              test()
  
## 10.1 函数的注解方式：
   1. 函数声明的注解方式;
      function test(a: number, b: number): number {
        return a + b
        // console.log(1)
        // throw new Error()
      }

   2. 函数表达式的注解方式;

   let test1: (a: number, b: number) => {} = function (a, b) {
    return { a: 1 }
  }

  
  ## 10.2 函数的注解方式： this 和重载;
  
    this 可以通过 => 来绑定this 指向;

   noImplicitThis -> false  指定this 为参数, 注解this 的
   类型的方式, 来 注解this;

   interface Card {
  suit: string;
  card: number;
}


interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

  ## 10.3 函数的重载;
    表意更清楚;

    function reverse(x: string): string;
    function reverse(x: number): number;
    function reverse(x: string | number) {
      if (typeof x === 'string') {
        return x.split('').reverse().join('')
      }

      if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
      }
    }

    console.log(reverse('123'));

  ## 11.1 类;

  "strictPropertyInitialization": false,

  类的注解方式：

  class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  继承中的super;

  ## 11.2 类的修饰符;
   OOP: 封装 ， 继承， 多态;

 类成员的修饰符;

 public 公共的成员属性：
 1. 自身调用;
 2. 子类可以调用;
 3. 实例调用;

 private 1. 自身调用;

 protected 1.自身调用; 2子类可以调用;
## 11.3 类的修饰符 readonly;

  1. 顺序  ->  public readonly
  2. 是否可写： readonly 只读， 不可写
  3. 不能修饰成员方法;

  参数属性： 简写的写法;
  class Animal1 {
  constructor(private name: string) { }
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

 let jake = new Animal1('jake');
 console.log(jake);

class Animal2 {
  private name: string;
  constructor(name: string) { this.name = name }
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
## 11.4 类的存取器;
   getter 取值函数  obj.a
   setter 存值函数 obj.a = '123'

  //同时出现, 就是一个属性;

   改变赋值和读取的行为;
## 11.5 类的静态属性&& 抽象类;

抽象类： 能够提供其他类的基类;
抽象类： 1. 无法创建实例;
        2. 抽象方法一定要有实现;

        abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch...');
  }
}


class Snack extends Animal {
  makeSound() {
    console.log('zzzzzzz');
  }
  move(): void {
    console.log('roaming the earch...');
  }
}

class Rhino extends Animal {
  makeSound() {
    console.log('mmmmmmm');
  }
  move(): void {
    console.log('roaming the earch...');
  }
}

new Snack();

## 11.6 高阶技巧;

 1. 定义类的时候 ， 定义了一个类型;
 2. 定义类的时候, 定义了一个构造函数;

3. 接口可以继承类;

## 12.1 接口和 函数类型接口;
  函数类型接口：
  interface SearchFunc {
  (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function (source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
  }

  type SearchFunc = (source: string, subString: string) => boolean

// function mySearch(source: string, subString: string): boolean {
//   let result = source.search(subString);
//   return result > -1;
// }
## 12.2 接口和 可索引的类型接口;

  1.共有支持两种索引签名：字符串和数字。

  interface NumberArray {
    [index: number]: number
  }

  是因为当使用number来索引时，
  JavaScript会将它转换成string然后再去索引对象;

  2.索引签名 有点像老大的意思;

  interface NumberDictionary {
    [index: string]: number | string;
    length: number;    // 可以，length是number类型
    name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
  }

  3. 索引签名可以设置为只读;
  interface ReadonlyStringArray {
      readonly [index: number]: string;
  }
  let myArray: ReadonlyStringArray = ["Alice", "Bob"];
  myArray[2] = "Mallory"; // error!

  ## 12.3 类类型接口;   -- 类实现接口;

   对类的一部分行为的抽象;

    类实现所有接口中的属性和方法; && 对比 抽象类： 抽象方法需要实现;

  
    interface ClockInterface {
        currentTime: Date;
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        constructor(h: number, m: number) { }
    }

    interface Alarm {
  alert(): void;
}

interface Light {
  color: string;
  lightOn(): void;
  lightOff(): void;
}

class Door { }

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('hei');
  }
}

class Car implements Alarm, Light {
  color = 'red';
  lightOn() {

  }
  lightOff() {

  }
  alert() {
    console.log('hello');
  }
}

## 12.4 类类型接口 --类静态部分与实例部分的区别

constructor存在于类的静态部分，所以不在检查的范围内
     
     类静态部分与实例部分需要单独做;

interface ClockInterface {
  currentTime: Date;
  getTime(h: number, m: number): any;
}

interface ClockConstructor {
  new(h: number, m: number): any
}

class Clock implements ClockInterface {
  currentTime = new Date()
  constructor(h: number, m: number) { }
  getTime() {

  }
}

function createClock(C: ClockConstructor, h: number, m: number) {
  return new C(h, m);
}

let clock = createClock(Clock, 12, 12);


 ## 12.5 接口继承接口 | 类实现接口;
     interface Shape {
      color: string;
    }

    interface PenStroke {
      penWidth: number;
    }

    interface Square extends Shape, PenStroke {
      sideLength: number;
    }   

 ## 12.6 混合类型;

    函数类型的interface, 添加属性的方式来实现 对象的interface;
<!-- 函数类型 + 对象的类型; -->
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
  }

  function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }

  let c = getCounter();
  c(10);
  c.reset();
  c.interval = 5.0;

## 12.7 混合类型的应用：
interface ClockInterface {
  currentTime: Date;
  getTime(h: number, m: number): any;
}

interface ClockConstructor {
  new(h: number, m: number): any;
  getTime1(): void;
}
class Clock implements ClockInterface {
  currentTime = new Date()
  constructor(h: number, m: number) { }
  getTime() {

  }

  static getTime1() {

  }
}

function createClock(C: ClockConstructor, h: number, m: number) {
  return new C(h, m);
}

let clock = createClock(Clock, 12, 12);

## 12.8 接口继承类：

  1. 类可以实现接口;
  2. 接口可以继承接口;
  3. 接口可以继承类;

## 13.1 泛型;

T 泛型变量 | 类型变量;
function identity1<T>(arg: T): T {
  return arg;
}

identity1('123')
identity1<number>(123)

 interface MyArray<T> {
   [n: number]: T;
 }

let a: number[] = [12, 3, 4];
 let b: Array<number> = [1, 2, 3, 4]

 ## 13.2 泛型类型;
 function identity<U>(arg: U): U {
  return arg;
}

interface IdentityInterface<T> {
  (arg: T): T
}
interface IdentityInterface {
  <T>(arg: T): T
}

 1.函数泛型的注解方式；

let a: <T>(arg: T) => T = identity;

 2.对象字面量的方式来定义泛型类型;

 let a: { <T>(arg: T): T } = identity;

 3.泛型接口的定义方式：
 let a: IdentityInterface = identity;

  ## 13.3 泛型类 泛型约束;
class MinClass<T>{
  public list: T[] = [];
  add(num: T) {
    this.list.push(num);
  }

  min(): T {
    let minNum = this.list[0];
    for (var i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

泛型约束： 
   extends 接口的方式(不一定是接口);

interface LenthWise1 {
  length: number;
}
type LenthWise = string | LenthWise1
function loggingIdentity<T extends LenthWise>(arg: T): T {
  console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

  ## 13.4 多重泛型约束;   ||  &&   |  &
interface Sentence {
  content: string;
  title: string;
}

interface Music {
  url: string;
}

class Test<T extends Sentence & Music>{
  props: T
  constructor(public arg: T) {
    this.props = arg
  }

  info() {
    return {
      url: this.props.url,
      content: this.props.content,
      title: this.props.title
    }
  }
}

## 13.5  在泛型里使用类类型, 约束或是更好的推论;

function create<T>(c: { new(): T; }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask; 

## 14  元组;
   1.确定成员 类型， 长度;

   2.push 越界的时 , 类型为联合类型;

   3.可选的元素类型：
   let list: [number, string, boolean?];

   4. rest 拓展运算符;
   declare function test(...args: [number, string, boolean]): void;
declare function test(arg1: number, arg2: string, arg3: boolean): void;

 let list1: [number, ...string[]] = [1, '2', '3', '4'];
let list2: [string, ...number[]] = ['1', 2, 3, 4, 5, 6, 7];

## 15  声明文件;
   在引入第三方的类型声明用的;

   @types/***

   **.d.ts

   declare var 
   declare const 
   declare function 
   declare let 
   declare enum

   interface 
   type


   






  
       
    



        






    
