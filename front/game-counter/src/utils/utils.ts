import { GameData, ChartDataType } from '../mock/mocktypes';

// transforma los datos del GameData en ChartDataType
export function getChartData(game: GameData): ChartDataType {
    let labels: string[] = [];
    let data: number[] = [];
    game.forEach((summary, jugador) => {
        labels.push(jugador);
        data.push(summary.saldo_total);
    });
    return { labels: labels, datasets: [{ data: data }] };
}