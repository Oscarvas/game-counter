import { calculateDebts } from '../utils/debts';
import { ChartDataType } from '../mock/mocktypes';

describe('calculateDebts', () => {
    it('should be 1 transaction', () => {
        const gameData: Map<string, number> = new Map([
            ['Juan', 0],
            ['Oscar', 1],
            ['Luis', -1]
        ]);
        const expectedTransactions: string[] = [
            'Luis debe pagar 1 a Oscar'
        ];
        const chartData = calculateDebts(gameData);
        expect(chartData).toEqual(expectedTransactions);
    });

    it('should be 2 transactions', () => {
        const gameData: Map<string, number> = new Map([
            ['Juan', 1],
            ['Oscar', 1],
            ['Luis', -1],
            ['Jose', -1]
        ]);
        // const expectedTransactions: string[] = [
        //     'Jose debe pagar 1 a Juan',
        //     'Luis debe pagar 1 a Oscar'
        // ];
        const chartData = calculateDebts(gameData);
        expect(chartData).toHaveLength(2);
    });


});