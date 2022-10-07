import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";
import defaultPhoto from '../../../assets/ava.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        )
    }

    const contactInfo = [];
    for (const contact in props.profile.contacts) {
        if (props.profile.contacts[contact] !== null && props.profile.contacts[contact].length !== 0) {
            contactInfo.push(`${contact}: ${props.profile.contacts[contact]}`)
        }
    }

    return (
        <div>
            <div className={s.profile_info}>
                <div className={s.flex_item}>
                    <img
                        className={s.ava}
                        src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}
                    />
                </div>
                <div className={`${s.info} ${s.flex_item}`}>
                    <h3 className={s.name}>{props.profile.fullName}.
                        <ProfileStatus status={props.status} changeStatus={props.changeStatus}/>
                    </h3>
                    <ul>
                        {contactInfo.map(l => {
                            return (
                                <li key={l.length}>{l}</li>
                            )
                        })}
                    </ul>
                    <div>
                        <p>{props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</p>
                        <p>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : null}</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ProfileInfo;
