import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./Dialog/DialogsItem";
import MessagesItem from "./Message/MessagesItem";
import MyMessagesItem from "./myMessage/myMessagesItem";
import {Field, reduxForm} from "redux-form";
import {InputCreator} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";

const maxLength30 = maxLengthCreator(30)
const inputType = InputCreator('textarea')


const Message = (props) => {
    return (
        <div className={s.inputsArea}>
            <form onSubmit={props.handleSubmit}>
                <div className={s.textarea}>
                    <Field component={inputType} name="messageText"
                           placeholder={'Enter your message'} validate={[required,maxLength30]}></Field>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const MessageFormContainer = reduxForm({
    form: "message"
})(Message)

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(d =>
        <DialogsItem name={d.name} id={d.id} photo={d.photo} key={d.id}/>
    )

    const messagesElements = props.messages.map(m =>
        <MessagesItem message={m.message} name={m.name} key={m.id}/>
    )

    const myMessagesElements = props.myMessages.map(m =>
        <MyMessagesItem message={m.message} name={m.name} key={m.id}/>
    )

    // const textAreaElement = React.createRef()
    //
    // const sendMessage = () => {
    //     props.sendMessage()
    // }
    //
    // const newInputText = (e) => {
    //     props.newInputText(e.target.value)
    // }

    const onSubmit = (newMessage) => {
        props.sendMessage(newMessage.messageText)
    }

    return (
        <div>

            <div className={s.dialogs_content}>
                <div className={s.dialogs}>
                    <div><h2 className={s.tittle}>Dialogs</h2></div>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    {myMessagesElements}
                    <MessageFormContainer onSubmit={onSubmit}/>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;