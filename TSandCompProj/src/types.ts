export interface Id {
    IdA: string
    IdB: number
}

type GameType = 'FPS' | 'RTS' | 'OpenWorld' | 'Moba'

export interface Game {
    id: string
    category: GameType
    isFun: boolean
}