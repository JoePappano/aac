const initState = {
    dogs: [
        {id: '1', name: 'help me find peach', info: 'blah blah blah'},
        {id: '2', name: 'collect all the stars', info: 'blah blah blah'},
        {id: '3', name: 'egg hunt with yoshi', info: 'blah blah blah'}
      ]
}

const dogReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_DOG":
            console.log("created dog", action.dog)
    }
    return state
}

export default dogReducer