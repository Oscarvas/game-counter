export interface Player {
    nombre: string;
    player_uuid: string;
    partidas?: Game[];
}

export interface Transaction {
    hunter: string | undefined;
    prey: string | undefined;
}
export interface Game {
    id: string;
    jugadores: {
        nombre: string;
        valor: number;
    }[];
}
