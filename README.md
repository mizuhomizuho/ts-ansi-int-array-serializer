# TS ASCII-int-Array serializer

```ts
import {Serializer} from "./Serializer";

const instanceSerializer = new Serializer();

const arrayLength = 1000;
const elementValueMin = 1;
const elementValueMax = 300;

const array = instanceSerializer.getRandom(arrayLength, elementValueMin, elementValueMax);

const encode = instanceSerializer.getString(array);

console.log(array);
console.log(encode);
console.log(instanceSerializer.decode(encode));
```