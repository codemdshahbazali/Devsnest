To reframe your thinking of it, don't think of TypeScript as something that changes your JavaScript, it's to make your JavaScript typesafe, so you don't run into silly errors later, and make autocomplete better.

treat types and interfaces as if they are the same thing (they aren't actually, but they're so similar that you don't really have to worry about the differences right now). Just pick one and stick with it

Fireship says we'll be consuming Generics more than you will be making them

You don't often have to worry about writing out your own Generics to make functions that accept everything unless you're a library author. In my time with typescript I honestly cannot think of a time that I've used a generic in that fashion

one thing to keep in mind is typescript will get mad at you if something could potentially be undefined
especially with chaining
so like
person.hello

you may have to use optional chaining to make ts happy
that's a common one

also, if you ever need to override anything or you're truly truly stuck. you can always explicity define something as any, or use a bang (!) to say that something does exist

@Kyle 🚀 🏆
also, if you ever need to override anything or you're truly truly stuck. you can always explicity define something as any, or use a bang (!) to say that something does exist

yeah exactly, you should VERY rarely reach for it since you lose all type safety if you do
but it's an out if you need it

Pros
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
More Robust
Easily Spot Bugs
Predictability
Readability
Popular

Cons
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
More code to write
more to learn
required compliation
not true static typing

It shines in really bug projects.

TSC - typescript complier.

Typescript used .ts and .tsx extentions
TSC(typescript compiler) is used to compile .ts files down to JS
Can watch files and report errors at compile time
Many tools include TS compilation by default
Most IDEs have great support for TS
The tsconfig.json file is used to configure how TypeScript works

TypeScript Setup
npm i -g typescript - installing typescript globally
tsc -v - for current version

TSC (TypeScript Compiler)

- by default typescript complies to ES5
- to watch a ts file for changes and compiling it automatically for js
- tsc --watch
- to compile all the ts file just type "tsc" at the root directory

Config file

- to create a ts config file use -> tsc --init
- outDir - where we want to output the compiled js file
- rootDir - where we want out ts file to be present
- dist folder - we can add production code here. We can have html files here as compiled CSS file will be generated here.

interface Person {
first: string;
last: string;
[key: string]: any
}

const person1: Person = {
first: 'Jeff',
last: 'Delaney'
}

const person2: Person = {
first: 'Usain',
last: 'Bolt',
fast: true
}
