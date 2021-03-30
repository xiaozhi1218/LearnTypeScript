

// let isDone: boolean = false;

// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;

// let myName: string = "bob";
// myName = "smith";


// let sentence: string = `Hello, my name is ${myName}.
// `;


// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean

// let a;

// a = '123';
// a = 123;
// // a = '123';

// let notSure: any = 4;
// // notSure.ifItExists(); // okay, ifItExists might exist at runtime
// // notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)


// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// prettySure.toString(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// console.log(prettySure)

// let obj: {
//   num: string;
//   toString: () => void
// } = {
//   num: '123',
//   toString: function () {

//   }
// }

// interface Obj {
//   num: string;
//   toString: () => void
// }

// type Obj = {
//   num: string;
//   toString: () => void
// }

// let obj: Obj = {
//   num: '123',
//   toString: function () {
//   }
// }
// // let obj: any = {
// //   num: '123',
// //   toString: function () {
// //   }
// // }

// console.log(obj)

// function test(): void {
//   console.log("This is my warning message");
//   //return undefined;
//   // return 3;
// }

// let unusable: void = undefined;

// let a: null = null;
// let b: undefined = undefined;


// a = 3;
// a = '3';
// b = 4;
// b = '4';

// let num: number = undefined;

// let num: number | undefined | null = undefined;
// let bol: boolean | null | undefined = null;


// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//   throw new Error(message);
// }

// // 推断的返回值类型为never
// function fail() {
//   return error("Something failed");
// }

// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//   while (true) {
//   }
// }

// declare function create(obj: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK
// create([])
// create({})
// create(function () { })

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// function test(a: number, b: number): string {
//   return '' + a + b
// }

//**************************************** */

// let count: number;
// count = 3;

// let count = 3;

// function test(a: number, b: number): number {
//   return a + b;
// }

// test(1, 2)

// let a: string | number;
// a = '123';
// a = 123;


// Number.prototype   String.prototype
// function test(a: number | string) {
//   return a.split('');
// }

// test('1')

// let a: string | number;
// a = '123';
// console.log(a.length);

// a = 10;
// console.log(a.length);

// interface Person {
//   readonly id: number
//   name: string;
//   age?: number;
//   [propName: string]: any
// }

// let person: Person = {
//   id: 1234,
//   name: 'zhangsan',
//   age: 18,
//   sex: 'male',
//   car: 'maz',
//   wife: 14
// }
// person.id = 1234143;

//**************************************** */

// let list = [1, 2, 3, '1'];
// let list1: number[] = [1, 2, 3, 4];

// list1.push(5)
// list1.push('5');

// let list: Array<number> = [1, 2, 3];

// interface List {
//   [index: number]: number | string
// }

// let list: List = [1, 2, 3, 4, 5, '5']

// interface Args {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }


// function test() {
//   let args: IArguments = arguments;
// }

// test()

//**************************************** */


// function test(a: number, b: number): number {
//   return a + b
//   // console.log(1)
//   // throw new Error()
// }

// test(1, 2)

// let test1: (a: number, b: number) => {} = function (a, b) {
//   return { a: 1 }
// }

// console.log(test1(1, 2));

// 可选参数：
// 默认值：lastName = 'zhangsan'
// 剩余参数;
// function buildName(firstName: string, lastName = 'zhangsan', ...restOfName: string[]) {
//   return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");

// function test1(
//   { first, second }: { first: number, second: number } = { first: 1, second: 2 }
// ) {
//   return first + second
// }

// function test2({ first = 2 }: { first: number }) {
//   return first
// }

//**************************************** */
// interface Card {
//   suit: string;
//   card: number;
// }


// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card
// }

// let deck: Deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function (this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

//**************************************** */
// 函数的重载
// function reverse(x: string): string;
// function reverse(x: number): number;
// function reverse(x: string | number) {
//   if (typeof x === 'string') {
//     return x.split('').reverse().join('')
//   }

//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   }
// }

// console.log(reverse('123'));

//**************************************** */


// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }

// let greeter = new Greeter("world");


// 父类 -- 基类;
// class Animal {
//   name: string;
//   constructor(theName: string) { this.name = theName; }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// // 子类： 派生类;
// class Snake extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 5) {
//     console.log("Slithering...");
//     super.move(distanceInMeters);
//   }
// }

// let sam = new Snake("Sammy the Python");


// console.log(sam)

// OOP: 封装 ， 继承， 多态;

// 类成员的修饰符;

// public 公共的成员属性：
// 1. 自身调用;
// 2. 子类可以调用;
// 3. 实例调用;

// private 1. 自身调用;

// protected 1.自身调用; 2子类可以调用;

// class Animal {
//   public readonly name: string;
//   public constructor(theName: string) { this.name = theName; }
//   public move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// let jake = new Animal('jake');
// jake.move();



// class Snake extends Animal {
//   constructor(name: string) { super(name); }
//   protected move(distanceInMeters = 5) {
//     console.log("Slithering...");
//     super.move(distanceInMeters);
//   }
// }

// let rose = new Animal('rose');
// rose.move();

/***********************/
// class Octopus {
//   public readonly name: string;
//   private readonly numberOfLegs: number = 8;
//   constructor(theName: string) {
//     this.name = theName;

//   }

//   readonly say() {

//   }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";

// class Animal1 {
//   constructor(private name: string) { }
//   move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// // let jake = new Animal1('jake');
// // console.log(jake);

// class Animal2 {
//   private name: string;
//   constructor(name: string) { this.name = name }
//   move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

/**************************/

// getter  取值函数;
// setter  存值函数;
// let passcode = "secret passcode";

// class Employee {
//   private _fullName: string = '123';

//   get fullName(): string {
//     return this._fullName;
//   }

//   set fullName(newName: string) {
//     if (passcode && passcode == "secret passcode") {
//       this._fullName = newName;
//     }
//     else {
//       console.log("Error: Unauthorized update of employee!");
//     }
//   }
// }

// let employee = new Employee();


// employee.fullName = "Bob Smith";

// if (employee.fullName) {
//   alert(employee.fullName);
// }

// class Grid {
//   static origin = { x: 0, y: 0 };
//   calculateDistanceFromOrigin(point: { x: number; y: number; }) {
//     let xDist = (point.x - Grid.origin.x);
//     let yDist = (point.y - Grid.origin.y);
//     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor(public scale: number) { }
// }

// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));


// class Grid {
//   static origin = { x: 0, y: 0 };
//   calculateDistanceFromOrigin(point: { x: number; y: number; }) {
//     let xDist = (point.x - Grid.origin.x);
//     let yDist = (point.y - Grid.origin.y);
//     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor(public scale: number) { }
// }

// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));


// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log('roaming the earch...');
//   }
// }


// class Snack extends Animal {
//   makeSound() {
//     console.log('zzzzzzz');
//   }
//   move(): void {
//     console.log('roaming the earch...');
//   }
// }

// class Rhino extends Animal {
//   makeSound() {
//     console.log('mmmmmmm');
//   }
//   move(): void {
//     console.log('roaming the earch...');
//   }
// }

// new Snack();

// abstract class Department {

//   constructor(public name: string) {
//   }

//   printName(): void {
//     console.log('Department name: ' + this.name);
//   }

//   abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {

//   constructor() {
//     super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//   }

//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.');
//   }

//   generateReports(): void {
//     console.log('Generating accounting reports...');
//   }
// }

// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// class Greeter {
//   static standardGreeting = "Hello, there";
//   greeting: string;
//   greet() {
//     if (this.greeting) {
//       return "Hello, " + this.greeting;
//     }
//     else {
//       return Greeter.standardGreeting;
//     }
//   }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());

// class Point {
//   x: number;
//   y: number;
// }

// interface Point3d extends Point {
//   z: number;
// }

// let point3d: Point3d = { x: 1, y: 2, z: 3 };

/*********************/

// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }



// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) { }
// }

/**********************/



// let a: number[] = [1, 2, 3, 4];

// let a1: Array<number> = [1, 2, 3, 4];

// let ro: ReadonlyArray<number> = a;

// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// function mySearch(source: string, subString: string): boolean {
//   let result = source.search(subString);
//   return result > -1;
// }

// type SearchFunc = (source: string, subString: string) => boolean
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string): boolean {
//   let result = source.search(subString);
//   return result > -1;
// }


// interface NumberArray {
//   [index: number]: number
// }

// let obj: NumberArray = {
//   0: 1,
//   1: 2,
//   2: 3
// }
// let arr: NumberArray = [1, 2, 3, 4]

// class Animal {
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }

// // 错误：使用'string'索引，有时会得到Animal!
// interface NotOkay {
//   [x: string]: Animal;
//   [x: number]: Dog;
// }

// interface NumberDictionary {
//   [index: string]: number | string;
//   length: number;    // 可以，length是number类型
//   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

// interface Person {
//   readonly name: string;
//   age: number;
//   [propName: string]: string | number;
// }

// let person: Person = {
//   name: 'zhangsan',
//   age: 18
// }
// // person.name = 'lisi';

// person.age = 19;

/*********************/

// let a: number = null;

//类上的 抽象的公共的属性和方法, 抽成一个接口：
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }

// class Clock implements ClockInterface {
//   currentTime = new Date();
//   setTime() {

//   }
// }
// interface Alarm {
//   alert(): void;
// }

// interface Light {
//   color: string;
//   lightOn(): void;
//   lightOff(): void;
// }

// class Door { }

// class SecurityDoor extends Door implements Alarm {
//   alert() {
//     console.log('hei');
//   }
// }

// class Car implements Alarm, Light {
//   color = 'red';
//   lightOn() {

//   }
//   lightOff() {

//   }
//   alert() {
//     console.log('hello');
//   }
// }


// interface ClockInterface {
//   currentTime: Date;
//   getTime(h: number, m: number): any;

// }

// interface ClockConstructor {
//   new(h: number, m: number): any;
// }

// class Clock implements ClockInterface {
//   currentTime = new Date()
//   constructor(h: number, m: number) { }
//   getTime() {

//   }
// }

// function createClock(C: ClockConstructor, h: number, m: number) {
//   return new C(h, m);
// }

// let clock = createClock(Clock, 12, 12);

// interface ClockConstructor {
//   new(hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//   tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log("beep beep");
//   }
// }
// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log("tick tock");
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
// }

// let square = <Square>{};

// square.color = 'blue';
// square.sideLength = 10;
// square.color = "blue";
// square.sideLength = 10;
// interface Shape {
//   color: string;
// }

// interface PenStroke {
//   penWidth: number;
// }

// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }

// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;

/******************/

// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) { };
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
// interface ClockInterface {
//   currentTime: Date;
//   getTime(h: number, m: number): any;

// }

// interface ClockConstructor {
//   new(h: number, m: number): any;
//   getTime1(): void;
// }
// class Clock implements ClockInterface {
//   currentTime = new Date()
//   constructor(h: number, m: number) { }
//   getTime() {

//   }

//   static getTime1() {

//   }
// }

// function createClock(C: ClockConstructor, h: number, m: number) {
//   return new C(h, m);
// }

// let clock = createClock(Clock, 12, 12);



// class Control {
//   private state: any;
// }

// interface SelectableControl extends Control {
//   select(): void;
// }

// class Button extends Control implements SelectableControl {
//   select() { }
// }

// class TextBox extends Control {

// }

// // Error: Property 'state' is missing in type 'Image'.
// // class Image1 implements SelectableControl {

// //   select() { }
// // }

// class Location1 {

// }

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}


interface PointInterface {
  x: number;
  y: number;
}

// interface Point3D extends Point {
//   z: number
// }


// let point3D: Point3D = {
//   x: 123,
//   y: 123,
//   z: 123
// }
// interface Point3D extends PointInterface {
//   z: number;
// }

// let point3D: Point3D = {
//   x: 123,
//   y: 123,
//   z: 123
// }

// 
// function identity1<T>(arg: T): T {
//   return arg;
// }

// identity1('123')

// interface MyArray<T> {
//   [n: number]: T;
// }

// let a: number[] = [12, 3, 4];
// let b: Array<number> = [1, 2, 3, 4]


// identity1<number>(123)
// function identity2(arg: string): string {
//   return arg;
// }

// function identity<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length)
//   return arg;
// }

// function identity<U>(arg: U): U {
//   return arg;
// }

// interface IdentityInterface {
//   <T>(arg: T): T
// }

// // 函数泛型的注解方式；
// let a: <T>(arg: T) => T = identity;
// // 对象字面量的方式来定义泛型类型;
// // let a: { <T>(arg: T): T } = identity;
// // 泛型接口的定义方式：
// // let a: IdentityInterface = identity;

// identity('123')

// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) { return x + y; };

// class MinClass<T>{
//   public list: T[] = [];
//   add(num: T) {
//     this.list.push(num);
//   }

//   min(): T {
//     let minNum = this.list[0];
//     for (var i = 0; i < this.list.length; i++) {
//       if (minNum > this.list[i]) {
//         minNum = this.list[i];
//       }
//     }
//     return minNum;
//   }
// }

// interface LenthWise1 {
//   length: number;
// }
// type LenthWise = string | LenthWise1
// function loggingIdentity<T extends LenthWise>(arg: T): T {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }

// interface Person {
//   name: string;
//   age: number;
//   sex: string;
// }

// type K1 = keyof Person;
// type K2 = keyof Person[]; // length | push
// type K3 = keyof { [x: string]: Person }


// type K = keyof { a: 1, b: 2, c: 3, d: 4 };

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//     (<any>result)[id] = (<any>first)[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       (<any>result)[id] = (<any>second)[id];
//     }
//   }
//   return result;
// }

// class Person {
//   constructor(public name: string) { }
// }
// interface Loggable {
//   log(): void;
// }
// class ConsoleLogger implements Loggable {
//   log() {
//     // ...
//   }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log();

// interface Sentence {
//   content: string;
//   title: string;
// }

// interface Music {
//   url: string;
// }

// class Test<T extends Sentence & Music>{
//   props: T
//   constructor(public arg: T) {
//     this.props = arg
//   }

//   info() {
//     return {
//       url: this.props.url,
//       content: this.props.content,
//       title: this.props.title
//     }
//   }
// }

/**************/

// function create<T>(c: { new(): T; }): T {
//   return new c();
// }

// class BeeKeeper {
//   hasMask: boolean;
// }

// class ZooKeeper {
//   nametag: string;
// }

// class Animal {
//   numLegs: number;
// }

// class Bee extends Animal {
//   keeper: BeeKeeper;
// }

// class Lion extends Animal {
//   keeper: ZooKeeper;
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//   return new c();
// }

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!


// Declare a tuple type
// let x: [string, number];  // 确定长度 和 类型;
// // Initialize it
// x = ['hello', 10]; // OK
// // Initialize it incorrectly
// // x = [10, 'hello']; // Error

// // x[0].substr()
// // x[3] = 'world'; 
// // OK, 字符串可以赋值给(string | number)类型
// x.push(false);
// console.log(x);

// let list: [number, string?, boolean?];
// list = [123, '123', false]
// list = [123, '123']
// list = [123]

// declare function test(...args: [number, string, boolean]): void;
// declare function test(arg1: number, arg2: string, arg3: boolean): void;

// let list1: [number, ...string[]] = [1, '2', '3', '4'];
// let list2: [string, ...number[]] = ['1', 2, 3, 4, 5, 6, 7];

//  let number = 3;
// number = '5'


// let test = function (a: number, b: number): number {
//   return a + b
// }

// let someValue: any = '123';

// (someValue as string).length

// interface Test {
//   a: string
// }

// let obj = {};
// (obj as Test).a
// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;

// let strLength: number = (someValue as string).length;

// interface List<T> {
//   [index: number]: T // 联合类型;
// }

// // // 泛型变量：
// let arr: Array<number> = [1, 2, 3, 4, 5];

// let arr1: number[] = [1, 2, 3, 4]
// arr1.push(5);
// console.log(arr1);
// function identity<T>(arg: T): T {
//   return arg;
// }

// identity(123)

// interface Args {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }

// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }

// function test() {
//   let args: IArguments = arguments;
// }

// test()

// function test(a: number, b: number): number {
//   return a + b
//   // console.log(1)
//   // throw new Error()
// }

// interface Test1 {
//   (a: number, b: number): string
// }

// 类型别名;
// type Test2 = Test1 | {
//   a: number
// }

// let test1: Test = function (a, b) {
//   return '123'
// }

// let test1 = {
//   a: 1
// }


// interface Card {
//   suit: string;
//   card: number;
// }


// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card
// }

// let deck: Deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function (this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// function reverse(x: string): string;
// function reverse(x: number): number;
// function reverse(x: string | number) {
//   if (typeof x === 'string') {
//     return x.split('').reverse().join('')
//   }

//   if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   }
// }


class Greeter {

}

function getGreeting() {
  return "howdy";
}
class MyGreeter extends Greeter { }



// interface Fetcher {
//   getObject1(done: (data: any, elapsedTime: number) => void): void;
// }

// let fetch1: Fetcher = {
//   getObject1: function (done: (data: any, elapsedTime: number) => void) {

//   }
// }



