import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={s.dialog}>
            <img className={s.contactImage} src={props.photo} alt="avatar"/>
            <NavLink to={`/dialogs/${props.id}`}
                     className={link => link.isActive ? s.active : s.dialog}    >{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;