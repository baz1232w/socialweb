const initialState = {
    friends: [
                {
                    id: 1,
                    name: 'Andrey',
                    photo: 'https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png'
                },
                {
                    id: 2,
                    name: 'Sveta',
                    photo: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png'
                },
                {
                    id: 3,
                    name: 'Dimych',
                    photo: 'https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png'
                }
            ]

}


const sideBarReducer = (state = initialState,action) => {
    return state
}

export default sideBarReducer