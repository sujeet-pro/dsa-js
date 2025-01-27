import { optimalFreelancing } from './optimal-freelancing';

describe('optimalFreelancing', () => {
    test('should return the maximum profit for given jobs', () => {
        const jobs = [
            { deadline: 1, payment: 100 },
            { deadline: 2, payment: 200 },
            { deadline: 2, payment: 50 },
            { deadline: 3, payment: 300 },
            { deadline: 4, payment: 250 },
            { deadline: 5, payment: 150 },
            { deadline: 6, payment: 400 },
            { deadline: 7, payment: 350 },
        ];
        expect(optimalFreelancing(jobs)).toBe(1750);
    });

    test('should return 0 if no jobs are given', () => {
        const jobs: { deadline: number, payment: number }[] = [];
        expect(optimalFreelancing(jobs)).toBe(0);
    });

    test('should return the maximum profit when some jobs cannot be completed', () => {
        const jobs = [
            { deadline: 1, payment: 100 },
            { deadline: 1, payment: 200 },
            { deadline: 2, payment: 50 },
            { deadline: 2, payment: 300 },
            { deadline: 3, payment: 250 },
        ];
        expect(optimalFreelancing(jobs)).toBe(750);
    });

    test('should return the maximum profit when all jobs can be completed', () => {
        const jobs = [
            { deadline: 1, payment: 100 },
            { deadline: 2, payment: 200 },
            { deadline: 3, payment: 300 },
            { deadline: 4, payment: 400 },
            { deadline: 5, payment: 500 },
            { deadline: 6, payment: 600 },
            { deadline: 7, payment: 700 },
        ];
        expect(optimalFreelancing(jobs)).toBe(2800);
    });

    test('should return the maximum profit when jobs have the same deadline', () => {
        const jobs = [
            { deadline: 1, payment: 100 },
            { deadline: 1, payment: 200 },
            { deadline: 1, payment: 300 },
            { deadline: 1, payment: 400 },
            { deadline: 1, payment: 500 },
            { deadline: 1, payment: 600 },
            { deadline: 1, payment: 700 },
        ];
        expect(optimalFreelancing(jobs)).toBe(700);
    });
});