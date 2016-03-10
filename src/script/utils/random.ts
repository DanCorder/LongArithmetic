namespace Utils {
    export class Random {
        // Returns a random int betwween min and max inclusive.
        static getIntBetween(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}