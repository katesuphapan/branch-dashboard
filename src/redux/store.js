import { createStore, applyMiddleware, compose } from "redux";
import dashboardReducer from "./dashboard.reducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { createBrowserHistory } from "history";
import createRootReducer from "./root.reducer";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export default function configureStore() {
    let store = createStore(
        createRootReducer(history),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                logger
            )
        )
    );
    return store;
}