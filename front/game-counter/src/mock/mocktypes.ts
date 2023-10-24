export interface Player {
    nombre: string;
    player_uuid: string;
    partidas?: Game[];
}

export interface Transaction {
    hunter: string;
    prey: string;
}
export interface Game {
    id: string;
    jugadores: {
        nombre: string;
        valor: number;
    }[];
}

export type GameData = Map<string, Map<string, number>>;
