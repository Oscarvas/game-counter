import { getChartData } from '../utils/utils';
import { ChartDataType, GameSummary } from '../mock/mocktypes';

describe('getChartData', () => {
    it('should transform GameData into ChartDataType', () => {
        const gameData: Map<string, GameSummary> = new Map([
            ['oscar', { saldo_total: 4, deudores: new Map() }],
            ['juan', { saldo_total: -4, deudores: new Map() }]
        ]);
        const expectedChartData: ChartDataType = {
            labels: ['oscar', 'juan'],
            datasets: [{ data: [4, -4] }]
        };
        const chartData = getChartData(gameData);
        expect(chartData).toEqual(expectedChartData);
    });
});