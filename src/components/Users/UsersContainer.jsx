import {connect} from "react-redux";
import {follow, followUser, requestUsers, nextPages, unFollow, unFollowUser} from "../../redux/UsersPageReducer";
import Users from "./UsersList/Users";
import React from "react";
import Preloader from "../common/preloader/preloader";
import {
    getCurrentPage,
    getDefaultPhoto, getFollowingIsProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/UsersSelectors";

class UsersContainer extends React.Component {

    changePage = (p) => {
        this.props.getUsers(p,this.props.pageSize)
    }

    nextPages = () => {
        this.props.nextPages()
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> :
                    <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                           unFollow={this.props.unFollowUser} changePage={this.changePage}
                           defaultPhoto={this.props.defaultPhoto}
                           toogleFollowingProgress={this.props.toogleFollowingProgress}
                           followingIsProgress={this.props.followingIsProgress}
                           follow={this.props.followUser}
                    />}

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        defaultPhoto: getDefaultPhoto(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state)
    }
}

const UsersPageContainer = connect(mapStateToProps, {
    unFollowUser, nextPages,getUsers: requestUsers,followUser
})(UsersContainer)

export default UsersPageContainer