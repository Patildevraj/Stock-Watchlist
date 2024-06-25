import { Action_type } from "../ActionType/ActionType";

export const addToWatchlist = (stock)=>{
    console.log(stock, "stockstockstock")
    return{
        type:Action_type.Add_To_Watchlist,payload:stock
    }
}

export const removeFromWatchlist = (stock)=>{
    console.log(stock, "Remove stock")
    return{
        type:Action_type.Remove_From_Watchlist,payload:stock
    }
}