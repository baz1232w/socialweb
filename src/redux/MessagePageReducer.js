const NEW_MESSAGE = 'SEND-MESSAGE';
const NEW_INPUT_TEXT = 'NEW-INPUT-TEXT';

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            photo: 'https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png'
        },
        {
            id: 2,
            name: 'Sveta',
            photo: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png'
        },
        {
            id: 3,
            name: 'Andrey',
            photo: 'https://www.shareicon.net/data/128x128/2016/05/24/770039_man_512x512.png'
        },
        {
            id: 4,
            name: 'Oksana',
            photo: 'https://www.shareicon.net/data/128x128/2016/05/24/770041_people_512x512.png'
        },
        {
            id: 5,
            name: 'Sergei',
            photo: 'https://www.shareicon.net/data/128x128/2016/09/15/829470_user_512x512.png'
        }
    ],
    messages: [
        {id: 1, message: 'Hello', name: 'Dimych'},
        {id: 2, message: 'How are you', name: 'Dimych'},
        {id: 3, message: 'How is your It kamasutra', name: 'Dimych'},
        {id: 4, message: 'Good Morning', name: 'Dimych'},
        {id: 5, message: 'Hello man', name: 'Dimych'}
    ],

    myMessages: [],

    _inputText: '',
}

const messagePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE :
            return {
                ...state,
                myMessages: [...state.myMessages, {
                    id: state.myMessages.length + 1,
                    message: action.textMessage,
                    name: 'Me'
                }],
            }
        // case NEW_INPUT_TEXT :
        //     return {
        //         ...state,
        //         _inputText : action.value
        //     }
        default :
            return state
    }
}

export const newMessageActionCreator = (textMessage) => ({type: NEW_MESSAGE,textMessage})
export const newInputTextActionCreator = (value) =>
    ({type: NEW_INPUT_TEXT, value: value})

export default messagePageReducer