// declare function $(param: string): void;
// interface $ {
//   (param: string): void;
// }

interface JQuery {
  (param: string): void;
}

interface Clock {
  (param: string): void;
}

declare class Animal {
  constructor(public name: string);
  sayHi(): string;
}

declare var foo: number;

declare function greet(greeting: string): void;

declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}


declare function getWidget(n: number): number;
declare function getWidget(s: string): string[];


type GreetingLike = string | (() => string) | MyGreeter;

declare function greet(g: GreetingLike): void;
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

// declare function greet(setting: GreetingSettings): void;

// interface Fetcher {
//   getObject(done: (data: any, elapsedTime: number) => void): void;
// }

export var SomeVar: { a: SomeType };
export interface SomeType {
  count: number;
}

import * as foo from './foo';
let x: foo.SomeType = foo.SomeVar.a;
console.log(x.count);