import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeMyStatus, getProfileInfo, getProfileStatus} from "../../redux/ProfilePageReducer";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter.";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.";




class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.router.params.userId
        if(!userId) {
            userId = this.props.userId
        }
        if(this.props.isAuth){
            this.props.getProfileInfo(userId)
            this.props.getProfileStatus(userId)
        }

    }


    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} changeStatus={this.props.changeMyStatus}/>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


// let AuthRedirectContainer = withAuthRedirect(ProfileContainer)
//
// const ShowTheParamsWithRouter = withRouter(AuthRedirectContainer)
//
// export default connect(mapStateToProps, {
//     getProfileInfo
// })(ShowTheParamsWithRouter)

export default compose(
    connect(mapStateToProps, {
        getProfileInfo,
        getProfileStatus,
        changeMyStatus,
    }),
    withAuthRedirect,
    withRouter,
)
(ProfileContainer)
