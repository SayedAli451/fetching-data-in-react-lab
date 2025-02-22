const BASE_URL = 'https://swapi.dev/api/starships'

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

export {
    index,
}