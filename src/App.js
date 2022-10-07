import "./App.css";
import Navigation from "./components/Navbar/Navigation";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersPageContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaederContainer";
import ConteinerComponent from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import {compose} from "redux";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<SuperDialogsContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/users' element={<UsersPageContainer/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<ConteinerComponent/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default compose(
    connect((state) => ({initialized: state.app.initialized}), {
        initializeApp,
    }),
)(App)

