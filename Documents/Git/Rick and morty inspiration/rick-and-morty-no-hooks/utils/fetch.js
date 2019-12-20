export const getAllChars = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character/')
    const json = await data.json()

    return json.results
}


export const getChar = async (id) => {
    const data = await fetch('https://rickandmortyapi.com/api/character/' + id)
    const json = await data.json()

    return json
}