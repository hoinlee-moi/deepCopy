# deepCopy

객체를 깊은 복사하는 데 도움이 되는 라이브러리 입니다.

## Install

`npm i @mo_lee/deepcopy`

참고 : ESM 방식으로 작성되었으며 CMS에서 정상적으로 동작하지 않을 수 있습니다

## Usage

```javascript
import { deepCopy } from "@mo_lee/deepcopy";

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

<br><br>

## Example

```javascript
import assert from "assert";
import { deepCopy } from "@mo_lee/deepcopy";

class Dog {
  name;
  constructor(name) {
    this.name = name;
  }
}
const lucy = new Dog("lusy");
const arr = [1, 2, "lee"];
const hong = { id: 1, name: "hong" };
const object = {
  nid: 3,
  addr: { city: "pusan", village: { name: "homeTown" }, arr: [1, 2, 3, 4] },
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: (a) => {
    return a;
    this.addr;
  },
  yyy(x, y) {
    return this.oo;
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
  dog: lucy,
  sobj: new String("abc"),
  nobj: new Number(123),
  bobj: new Boolean(true),
  [Symbol()]: Object(Symbol("symbol3")),

  zs: new Set([arr, hong]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[hong, arr]]),
  zwm: new WeakMap([[hong, arr]]),
};

const copiedObject = deepCopy(object);

user.name = "lee";
copiedObject.addr.city = "seoul";
copiedObject.addr.village.name = "chon";
copiedObject.addr.arr[2] = 100;
assert.notDeepStrictEqual(copiedObject.name, user.name);

user.zs.add("john");
assert.notDeepStrictEqual(copiedObject.zs, user.zs);

copiedObject.zm.set("d", 4);
assert.notDeepStrictEqual(newObj.zm, user.zm);
```
