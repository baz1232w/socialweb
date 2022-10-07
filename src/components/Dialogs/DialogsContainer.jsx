import React from 'react'
import {newInputTextActionCreator, newMessageActionCreator} from "../../redux/MessagePageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogs:state.messagePage.dialogs,
        messages:state.messagePage.messages,
        myMessages:state.messagePage.myMessages,
        text:state.messagePage._inputText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: (textMessage) => {
            dispatch(newMessageActionCreator(textMessage))
        },
        newInputText: (text) => {
            dispatch(newInputTextActionCreator(text))
        }

    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)
(Dialogs)

// compose(
//     connect(mapStateToProps,mapDispatchToProps)(AuthRedirectContainer),
//     withAuthRedirect
// )
// (Dialogs)

// let AuthRedirectContainer = withAuthRedirect(Dialogs)

// const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectContainer)
// export default SuperDialogsContainer