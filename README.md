# TS ASCII-int-Array serializer

```ts
import {Convertor} from "./Convertor";

const instance = new Convertor();

const arrayLength = 1000;
const elementValueMin = 1;
const elementValueMax = 300;

const array = instance.getRandom(arrayLength, elementValueMin, elementValueMax);

const encode = instance.getString(array);

console.log(array);
console.log(encode);
console.log(instance.decode(encode));
```