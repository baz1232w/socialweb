import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profilePageReducer from "./ProfilePageReducer";
import messagePageReducer from "./MessagePageReducer";
import sideBarReducer from "./SideBarReducer";
import usersPageReducer from "./UsersPageReducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";


const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    sidebar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
})

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store

export default store
