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