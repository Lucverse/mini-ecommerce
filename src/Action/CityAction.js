export const CityAction =(cityData, dispatch)=>{
    dispatch({
        type:'CITY', 
        payload:cityData
    })
}