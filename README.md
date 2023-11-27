> # utils

This module provides various utility functions written in Vanilla JavaScript.

> ## Install

This is a **Node.js** module available through the **npm registry**.<br>
Please download and install **Node.js** before proceeding with the installation.

The installation using `npm install` is performed using the following command.

```
npm i @mo_lee/utils
```

Note: It is written in ESM format and may not function correctly in some Content Management Systems (CMS).

> ## Function

- debounce
- throttle
- deepCopy
- promiseLike
- rand
- range

version 0.0.5

- makeGenerator

<br>

> ## Usage
>
> <br>

### debounce

```javascript
import { debounce } from "@mo_lee/utils";

const printNumber = debounce(console.log, 1000);

let count = 0;

const printInter = setInterval(() => {
  if ((count += 1) > 20) return clearInterval(printInter);
  printNumber(1);
}, 100);

// Executes once after 3 seconds
```

<br>

### throttle

```javascript
import { throttle } from "@mo_lee/utils";

const printNumber = throttle(console.log, 1000);

let count = 0;

const printInter = setInterval(() => {
  if ((count += 1) > 20) return clearInterval(printInter);
  printNumber(1);
}, 100);

// Run twice for 2 seconds
```

<br>

### deepCopy

```javascript
import { deepCopy } from "@mo_lee/utils";

class Dog {
  name;
  constructor(name) {
    this.name = name;
  }
}

const user = {
  id: 1,
  name: "Jone",
  addr: {
    city: "New York City",
    Detailed: {
      Borough: "Brooklyn",
    },
  },
  like: ["soccer", "food"],
  pet: new Dog("lucy"),
};

const copiedUser = deepCopy(user); // user !==  copiedUser
```

<br>

### promiseLike

```javascript
import { promiseLike } from "@mo_lee/utils";

const myPromise = new promiseLike((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 >= 0) resolve(now);
    else reject(new Error("error"));
  }, 1000);
});

myPromise.then((res) => console.log(res)); // promise OK
```

<br>

### rand

```javascript
import { rand } from "@mo_lee/utils";

console.log(rand(1, 10)); //Random number between 1 and 10
console.log(rand(5, 20)); //Random number between 5 and 20
```

<br>

### range

```javascript
import { range } from "@mo_lee/utils";

range(0); // [0]
range(1, 10, 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(10, 1, -2); // [10, 8, 6, 4, 2]
range(-5); // [-5, -4, -3, -2, -1]
```

<br>

### makeGenerator

```javascript
import { makeGenerator } from "@mo_lee/utils";

const user = { id: 1, name: "John", job: "Doctor" };

for (const value of user) console.log(value); // Error: user is not iterable

makeGenerator(user);

for (const value of user) console.log(value); // OK!
/*
1
John
Doctor
*/
```

> ## People

mo_lee

<br>

> ## License

**MIT**
