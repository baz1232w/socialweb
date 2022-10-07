import  s from './Sitebar.module.css'
import Friend from "./Friends/Friend";




const SiteBar = (props) =>{
    const friends = props.friend.map(f =>
        <Friend name={f.name} photo={f.photo} key={f.id} />
    )

    return (
        <div className={s.siteBar}>
            <div><h2 className={s.tittle}>Friends</h2></div>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
    )
}

export default  SiteBar;