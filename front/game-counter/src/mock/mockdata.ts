import { Player } from "./mocktypes";

export const DATA: Player[] = [
    {
        nombre: "Jugador 1",
        player_uuid: "uuid1",
        partidas: [
            {
                id: "partida1",
                jugadores: [
                    { nombre: "Jugador 1", valor: 10 },
                    { nombre: "Jugador 2", valor: 20 },
                    { nombre: "Jugador 3", valor: 30 },
                    { nombre: "Jugador 4", valor: 40 },
                ],
            },
            {
                id: "partida2",
                jugadores: [
                    { nombre: "Jugador 1", valor: 15 },
                    { nombre: "Jugador 2", valor: 25 },
                    { nombre: "Jugador 3", valor: 35 },
                    { nombre: "Jugador 4", valor: 45 },
                ],
            },
        ],
    },
    {
        nombre: "Jugador 2",
        player_uuid: "uuid2",
        partidas: [
            {
                id: "partida1",
                jugadores: [
                    { nombre: "Jugador 1", valor: 20 },
                    { nombre: "Jugador 2", valor: 30 },
                    { nombre: "Jugador 3", valor: 40 },
                    { nombre: "Jugador 4", valor: 50 },
                ],
            },
            {
                id: "partida2",
                jugadores: [
                    { nombre: "Jugador 1", valor: 25 },
                    { nombre: "Jugador 2", valor: 35 },
                    { nombre: "Jugador 3", valor: 45 },
                    { nombre: "Jugador 4", valor: 55 },
                ],
            },
        ],
    },
    {
        nombre: "Jugador 3",
        player_uuid: "uuid3",
        partidas: [
            {
                id: "partida1",
                jugadores: [
                    { nombre: "Jugador 1", valor: 30 },
                    { nombre: "Jugador 2", valor: 40 },
                    { nombre: "Jugador 3", valor: 50 },
                    { nombre: "Jugador 4", valor: 60 },
                ],
            },
            {
                id: "partida2",
                jugadores: [
                    { nombre: "Jugador 1", valor: 35 },
                    { nombre: "Jugador 2", valor: 45 },
                    { nombre: "Jugador 3", valor: 55 },
                    { nombre: "Jugador 4", valor: 65 },
                ],
            },
        ],
    },
    {
        nombre: "Jugador 4",
        player_uuid: "uuid4",
        partidas: [
            {
                id: "partida1",
                jugadores: [
                    { nombre: "Jugador 1", valor: 40 },
                    { nombre: "Jugador 2", valor: 50 },
                    { nombre: "Jugador 3", valor: 60 },
                    { nombre: "Jugador 4", valor: 70 },
                ],
            },
            {
                id: "partida2",
                jugadores: [
                    { nombre: "Jugador 1", valor: 45 },
                    { nombre: "Jugador 2", valor: 55 },
                    { nombre: "Jugador 3", valor: 65 },
                    { nombre: "Jugador 4", valor: 75 },
                ],
            },
        ],
    },
    {
        nombre: "Jugador 5",
        player_uuid: "uuid5",
        partidas: [
            {
                id: "partida1",
                jugadores: [
                    { nombre: "Jugador 1", valor: 50 },
                    { nombre: "Jugador 2", valor: 60 },
                    { nombre: "Jugador 3", valor: 70 },
                    { nombre: "Jugador 4", valor: 80 },
                ],
            },
            {
                id: "partida2",
                jugadores: [
                    { nombre: "Jugador 1", valor: 55 },
                    { nombre: "Jugador 2", valor: 65 },
                    { nombre: "Jugador 3", valor: 75 },
                    { nombre: "Jugador 4", valor: 85 },
                ],
            },
        ],
    },
];
