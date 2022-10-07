import Header from "./Header";
import React from "react";
import { logOutMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{


    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps,{
    logOutMe
})(HeaderContainer)
