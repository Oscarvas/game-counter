export interface Player {
    nombre: string;
    player_uuid: string;
    partidas?: Game[];
}

export interface Game {
    id: string;
    jugadores: {
        nombre: string;
        valor: number;
    }[];
}
