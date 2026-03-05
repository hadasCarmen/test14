import {create} from 'zustand'

baseUrl='http:/localhost:5000/api'

const useMovieStore=create((set,get)=>({
    movies : [],
    isLoading : false,
    error : null ,
    searchQuery : "",
    seatSelections : {},


}))