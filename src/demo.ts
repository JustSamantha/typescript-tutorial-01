let x:number;
let y:string;
let z:boolean;
let a:Date;
let b:string[];

b = "hello" as any;
b = 12345 as any;

x = 123;

if (x > 120) {
  x = 120;
  console.log(x);
} else {
  console.log(x);
}
