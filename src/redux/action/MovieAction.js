import { Action_type } from "../../constant/Action_type"
export const setMovieData=(MovieData)=>{
    return async (dispatch) => {
            dispatch({
                type: Action_type.SET_MOVIE_DATA,
                payload: MovieData
            })
        }
}
export const searchItems=(inputValue, MovieData)=>{
    console.log("MovieData",inputValue,MovieData)

    return async (dispatch) => {
        if(inputValue.length>1){
            const newData= MovieData.filter((element,index)=>{
                return element.movieName.toLowerCase().includes(inputValue.toLowerCase())
                })
                console.log("newData",newData)
                dispatch({
                    type: Action_type.SET_FILTER_MOVIE_DATA,
                    payload: newData
                })
        }else{
            dispatch({
                type: Action_type.SET_FILTER_MOVIE_DATA,
                payload: MovieData
            })
        }
    
    }
}
export const filterItems=(movieData)=>{
    const  Data=[...movieData]
  return async(dispatch)=>{
    const Sort=Data.sort((a,b)=>{
                if(a.movieName.toLowerCase()<b.movieName.toLowerCase()){
                  return -1;
                }
                else if(a.movieName.toLowerCase()>b.movieName.toLowerCase()){
                  return 1;
                }
                
              })
              console.log('Sort',Sort)
              dispatch({
                type: Action_type.SET_FILTER_MOVIE_DATA,
                payload: Sort
            })
             
            }
}