export interface Player {
    nombre: string;
    uuid: string;
    partidas: Game[];
}

export interface Game {
    id: string;
    jugadores: {
        nombre: string;
        valor: number;
    }[];
}
