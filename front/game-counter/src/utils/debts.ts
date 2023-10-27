import { GameData } from "../mock/mocktypes";

export function calculateDebts(game: GameData): Array<string> {

    // sort and filter the data
    const saldos_finales = [...game.entries()].map(([jugador, summary]) => {
        if (summary.saldo_total != 0)
            return [jugador, summary.saldo_total]
        else
            return undefined;
    }).filter(x => x !== undefined).sort((a, b) => {
        if (a === undefined || b === undefined) {
            return 0;
        }
        return (b[1] as number) - (a[1] as number);
    });

    let resumen: Array<string> = []; // Array de strings con los resultados de la partida
    // extract the first element of the array
    let aux = saldos_finales.shift() as [string, number];
    let jugador: string = aux[0] as string;
    let saldo: number = aux[1] as number;
    // extract the last element of the array
    aux = saldos_finales.pop() as [string, number];
    let deudor: string = aux[0] as string;
    let deuda: number = aux[1] as number;

    while (saldos_finales.length >= 0) {
        let pendiente = Math.min(Math.abs(deuda), saldo);
        resumen.push(`${deudor} debe pagar ${Math.min(Math.abs(deuda), pendiente)} a ${jugador}`);

        if (saldos_finales.length === 0) break;

        if (saldo - pendiente == 0) {
            // extract the next element of the array
            [jugador, saldo] = saldos_finales.shift() as [string, number];
            deuda += pendiente;
        }
        else {
            [deudor, deuda] = saldos_finales.pop() as [string, number];
            saldo -= pendiente;
        }

    }
    return resumen;

}