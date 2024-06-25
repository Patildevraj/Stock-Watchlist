import { Action_type } from "../ActionType/ActionType"

export const initialState = {
    watchlistData: []
}

export const StockReducer = (state = initialState, action) => {
    console.log(state, "State action", action);
    switch (action.type) {
        case (Action_type.Add_To_Watchlist):
            return { ...state, watchlistData: [...state.watchlistData, action.payload] }

        case (Action_type.Remove_From_Watchlist):
            const updatedstate = state.watchlistData.filter(el => el.ticker !== action.payload.ticker)
            return { ...state, watchlistData: updatedstate }
        default:
            return state
    }
}

