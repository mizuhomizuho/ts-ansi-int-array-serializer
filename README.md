# TS ASCII-int-Array serializer

The class converts each number in the array from decimal to a 127-based numeral system using ASCII characters.

Then, the class returns the serialized data as a string.

The larger the value of an array element, the higher the compression percentage.

```ts
import isEqual from "lodash.isequal";
import {Serializer} from "./Serializer";

const instanceSerializer = new Serializer();

const arrayLength = 1000;
const elementValueMin = 1;
const elementValueMax = 300;

const array = instanceSerializer.getRandom(arrayLength, elementValueMin, elementValueMax);
const encodeString = instanceSerializer.getString(array);

console.log(isEqual(array, instanceSerializer.decode(encodeString)));

const compressionPercentage = encodeString.length / (array.join("").length / 100)

console.log(compressionPercentage);
```