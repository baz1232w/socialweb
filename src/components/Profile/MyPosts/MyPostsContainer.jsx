import React from 'react'
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/ProfilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        inputText: state.profilePage._inputText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText))
        }

    }
}

const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperMyPostContainer;
