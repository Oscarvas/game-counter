import { getChartData } from '../utils/utils';
import { ChartDataType } from '../mock/mocktypes';

describe('getChartData', () => {
    it('should transform GameData into ChartDataType', () => {
        const gameData: Map<string, number> = new Map([
            ['oscar', 4],
            ['juan', -4]
        ]);
        const expectedChartData: ChartDataType = {
            labels: ['oscar', 'juan'],
            datasets: [{ data: [4, -4] }]
        };
        const chartData = getChartData(gameData);
        expect(chartData).toEqual(expectedChartData);
    });
});