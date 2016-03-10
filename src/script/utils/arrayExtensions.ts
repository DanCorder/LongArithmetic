/// <reference path="random.ts" />
interface Array<T> {
   shuffle(): void;
}

Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i >= 0; i--) {
        const index = Utils.Random.getIntBetween(0, i - 1);
        const temp = this[index];
        this[index] = this[i];
        this[i] = temp;
    }
};