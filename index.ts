class Convertor {

    private _symbolsArray: string[];

    private readonly ASCII_LENGTH = 127;

    private readonly SEPARATOR = String.fromCharCode(this.ASCII_LENGTH);

    constructor() {
        this._symbolsArray = [];
    }

    private get symbolsArray(): string[] {
        if (!this._symbolsArray.length) {
            const symbolsArray: string[] = [];
            for (let i = 0; i <= this.ASCII_LENGTH - 1; i++) {
                symbolsArray.push(String.fromCharCode(i));
            }
            this.symbolsArray = symbolsArray;
        }
        return this._symbolsArray;
    }

    private set symbolsArray(value: string[]) {
        this._symbolsArray = value;
    }

    private toBase(number: number) {
        const symbolsArray = this.symbolsArray;
        if (number == 0) {
            return symbolsArray[0];
        }
        let result = "";
        while (number > 0) {
            result = symbolsArray[number % symbolsArray.length] + result;
            number = parseInt('' + number / symbolsArray.length);
        }
        return result;
    }

    public getRandom(arrayLength: number, min: number, max: number) {
        const numbersArray: number[] = Array.from({ length: arrayLength }, () =>
            Math.floor(Math.random() * (max - min + 1)) + min
        );
        return numbersArray;
    }

    public getString(arrayValues: number[]) {
        const result: string[] = [];
        arrayValues.forEach((value) => {
            result.push(this.toBase(value));
        });
        return result.join(this.SEPARATOR);
    }

    private decodeValue(baseValue: string) {
        const digits = this.symbolsArray.join("");
        let result = 0;
        let power = 1;
        for (let i = baseValue.length - 1; i >= 0; i--) {
            const digit = baseValue[i];
            const digitValue = digits.indexOf(digit);
            result += digitValue * power;
            power *= this.symbolsArray.length;
        }
        return result;
    }

    public decode(value: string) {
        const decodeArray = value.split(this.SEPARATOR);
        const decodeResult: number[] = [];
        decodeArray.forEach((value) => {
            decodeResult.push(this.decodeValue(value));
        });
        return decodeResult;
    }
}


const instance = new Convertor();

const arrayLength = 1000;
const elementValueMin = 1;
const elementValueMax = 300;

const array = instance.getRandom(arrayLength, elementValueMin, elementValueMax);

const encode = instance.getString(array);

console.log(array);
console.log(encode);
console.log(instance.decode(encode));
