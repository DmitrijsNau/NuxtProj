export interface Id {
    IdA: string
    IdB: number
}

type GameType = 'FPS' | 'RTS' | 'Open-World' | 'TBS'

export interface Game {
    label: string
    type: Game
    isComplete: boolean
}