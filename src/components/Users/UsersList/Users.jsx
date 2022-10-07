import s from './Users.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import defaultPhoto from '../../../assets/ava.png'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = (curP - 3) < 0 ? 0 : curP - 2;
    let curPL = curP + 1;
    let slicedPages = pages.slice(curPF, curPL);
    return (<div className={s.container}>
            {props.totalUsersCount ? <h1 className={s.tittle}>Users: <span>{props.totalUsersCount}</span></h1> : null}

            {
                props.users.map(u => {
                    return (
                        <div className={s.userItems}>
                            <div className={s.item_1}>
                                <NavLink to={`/profile/${u.id}`}><img
                                    src={u.photos.small === null ? defaultPhoto : u.photos.small}
                                    alt="ava"/></NavLink>
                                {u.followed
                                    ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                        props.unFollow(u.id)
                                    }}
                                            className={s.button}>Unfollow</button>
                                    :
                                    <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                    }}
                                            className={s.button}>Follow</button>
                                }
                            </div>
                            <div className={s.item_2}>
                                <div>
                                    <p className={s.name}>{u.name}</p>
                                    <p className={s.info}>{u.status}</p>
                                </div>
                                <div>
                                    <p>{'u.location.country'},</p>
                                    <p>{'u.location.city'}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={s.pageNav}>
                {slicedPages.map((p) => {
                    return (
                        <span onClick={() => props.changePage(p)}
                              className={props.currentPage === p ? s.selectPage : s.changePage}>{p}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Users