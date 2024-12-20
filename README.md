# TS ASCII-int-Array serializer

The class converts each number in the array from decimal to a 127-based numeral system using ASCII characters.

Then, the class returns the serialized data as a string.

The compression percentage depends on the bit depth of the array elements.

```ts
import {Serializer} from "./Serializer";
import {sizeof} from "sizeof";
import ScatterPlot from "console-scatter-plot";
import isEqual from "lodash.isequal";

const instanceSerializer = new Serializer();

const arrayLength = 1000;
const elementValueMin = 1;
const elementValueMax = 300;

const array = instanceSerializer.getRandom(arrayLength, elementValueMin, elementValueMax);
const encodeString = instanceSerializer.getString(array);

console.log(isEqual(array, instanceSerializer.decode(encodeString)));

[0, Number.MAX_SAFE_INTEGER].forEach((value) => {
    console.log("Values: %s", value);
    (new ScatterPlot({
        xAxis: {label: "The size of the array"},
        yAxis: {label: "Compression ratio"},
        points: instanceSerializer.getPlot(sizeof, value).map(
            pointObject => ({
                ...pointObject,
                marker: "+",
                color: "red",
            })
        ),
    })).print();
});
```
---

<img src="https://github.com/mizuhomizuho/ts-ascii-int-array-serializer/blob/master/screenshots/webstorm64_IaAOO59TED.png" alt="">

---

<img src="https://github.com/mizuhomizuho/ts-ascii-int-array-serializer/blob/master/screenshots/webstorm64_IIdeuJBv3d.png" alt="">