
function cartReducer(state, action){
    if(state === undefined){
        return{
            totalCost: 0,
            productCart: []
        }
    }
    switch (action.type){
        case "ADD":
        return {
            ...state,
            totalCost: state.totalCost + parseInt(action.productData.productPrice),
            productCart: state.productCart.concat({
                name: action.productData.name,
                price: action.productData.price,
                description: action.productData.description
            })
        }

        case "DELETE":
        var updatedArray = state.productCart.filter((product)=>{
            return product.name !== action.productData.name
        })
        return {
            ...state,
            totalCost: state.totalCost - parseInt(action.productData.price),
            productCart: updatedArray   
        }
        default:
            return state
    }
}