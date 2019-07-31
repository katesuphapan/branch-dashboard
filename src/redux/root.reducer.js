import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import dashboardReducer from "./dashboard.reducer";

export default (history) => combineReducers({
    router: connectRouter(history),
    dashboard: dashboardReducer
})