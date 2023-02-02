export const proudctAction = (productInfo, dispatch) =>{
    dispatch({
        type:"PRODUCTS",
        payload:productInfo
    })
}