import s from './../Dialogs.module.css'

const MessagesItem = (props) => {
    return (
        <div className={s.message}>
            <div>
                <img className={s.contactImage}
                    src="https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png"
                    alt=""/>
                <div><p className={s.name}>{props.name}</p></div>
            </div>
            <div>
                <div className={s.textMessage}>{props.message}</div>
            </div>
        </div>
    )
}



export default MessagesItem;