import { GameData, ChartDataType } from '../mock/mocktypes';

// transforma los datos del GameData en ChartDataType
export function getChartData(game: GameData): ChartDataType {
    let labels: string[] = [];
    let data: number[] = [];
    game.forEach((balance, jugador) => {
        labels.push(jugador);
        data.push(balance);
    });
    return { labels: labels, datasets: [{ data: data }] };
}