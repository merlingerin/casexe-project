import games from './mockGames'

export const fetchGames = async () => {
    return (
        new Promise(resolve => {
            
            setTimeout(() => resolve(games), 2000 )
            
        })
    )
}

export const loadMoreGames = async () => {
    return (
        new Promise(resolve => {
            
            setTimeout(() => resolve(games), 700 )
            
        })
    )
}