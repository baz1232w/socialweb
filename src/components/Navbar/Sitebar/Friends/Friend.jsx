import s from './../Sitebar.module.css'

const Friend = (props) => {
    return (
        <div className={s.friendItem}>
            <div><img className={s.friendPhoto} src={props.photo} alt="friend photo"/></div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default Friend