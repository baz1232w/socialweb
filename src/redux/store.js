// import messagePageReducer from "./MessagePageReducer";
// import profilePageReducer from "./ProfilePageReducer";
// import sideBarReducer from "./SideBarREducer";
//
// const store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, postsText: 'Hi, how are you?', like: 144},
//                 {id: 2, postsText: 'Good Day to you.', like: 2},
//                 {id: 3, postsText: 'Very happy ends.', like: 5},
//                 {id: 4, postsText: 'Good holidays.', like: 15},
//                 {id: 5, postsText: 'Hello my friends!', like: 10}
//             ],
//             _inputText: '',
//
//         },
//
//         messagePage: {
//             dialogs: [
//                 {
//                     id: 1,
//                     name: 'Dimych',
//                     photo: 'https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png'
//                 },
//                 {
//                     id: 2,
//                     name: 'Sveta',
//                     photo: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png'
//                 },
//                 {
//                     id: 3,
//                     name: 'Andrey',
//                     photo: 'https://www.shareicon.net/data/128x128/2016/05/24/770039_man_512x512.png'
//                 },
//                 {
//                     id: 4,
//                     name: 'Oksana',
//                     photo: 'https://www.shareicon.net/data/128x128/2016/05/24/770041_people_512x512.png'
//                 },
//                 {
//                     id: 5,
//                     name: 'Andrey',
//                     photo: 'https://www.shareicon.net/data/128x128/2016/09/15/829470_user_512x512.png'
//                 }
//             ],
//             messages: [
//                 {id: 1, message: 'Hello', name: 'Dimych'},
//                 {id: 2, message: 'How are you', name: 'Dimych'},
//                 {id: 3, message: 'How is your It kamasutra', name: 'Dimych'},
//                 {id: 4, message: 'Good Morning', name: 'Dimych'},
//                 {id: 5, message: 'Hello man', name: 'Dimych'}
//             ],
//
//             myMessages: [],
//
//             _inputText: '',
//
//         },
//
//         siteBar: {
//             friends: [
//                 {
//                     id: 1,
//                     name: 'Andrey',
//                     photo: 'https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png'
//                 },
//                 {
//                     id: 2,
//                     name: 'Sveta',
//                     photo: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png'
//                 },
//                 {
//                     id: 3,
//                     name: 'Dimych',
//                     photo: 'https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png'
//                 }
//             ]
//         },
//
//     },
//     _callSubscriber() {
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         store._callSubscriber = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profilePageReducer(this._state.profilePage,action)
//         this._state.messagePage = messagePageReducer(this._state.messagePage,action)
//         this._state.siteBar = sideBarReducer(this._state.siteBar,action)
//
//         this._callSubscriber(this._state)
//     }
// }
//
//
//
//
// window.state = store._state
//
// export default store;
