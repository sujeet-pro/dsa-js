import { classPhotos } from './class-photo';

describe('classPhotos', () => {
    test('should return true when blue shirts can be in the back row', () => {
        const redShirtHeights = [5, 8, 1, 3, 4];
        const blueShirtHeights = [6, 9, 2, 4, 5];
        expect(classPhotos(redShirtHeights, blueShirtHeights)).toBe(true);
    });

    test('should return true when red shirts can be in the back row', () => {
        const redShirtHeights = [6, 9, 2, 4, 5];
        const blueShirtHeights = [5, 8, 1, 3, 4];
        expect(classPhotos(redShirtHeights, blueShirtHeights)).toBe(true);
    });

    test('should return false when neither can be in the back row', () => {
        const redShirtHeights = [5, 8, 1, 3, 4];
        const blueShirtHeights = [5, 8, 1, 3, 4];
        expect(classPhotos(redShirtHeights, blueShirtHeights)).toBe(false);
    });

    test('should return false when heights are equal', () => {
        const redShirtHeights = [5, 5, 5, 5, 5];
        const blueShirtHeights = [5, 5, 5, 5, 5];
        expect(classPhotos(redShirtHeights, blueShirtHeights)).toBe(false);
    });

    test('should return true for different lengths of arrays', () => {
        const redShirtHeights = [5, 8, 1];
        const blueShirtHeights = [6, 9, 2];
        expect(classPhotos(redShirtHeights, blueShirtHeights)).toBe(true);
    });
});