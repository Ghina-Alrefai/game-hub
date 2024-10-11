import useGenres from "./useGenres";



export const useGeners = (id : number) => {
    const{ data: genres } = useGenres();
    return  genres?.results.find( g => g.id === id)
}
