const initState = {
    dogs: [
    //   {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    //   {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    //   {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]}



const dogReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_DOG":
            console.log("created dog", action.dog, state);
            return state;
        case "CREATE_DOG_ERROR":
            console.log("create dog error", action.err);
            return state;
        case "DELETE_DOG":
            console.log("deleted dog", action.dog, action.id);
            return state;
        case "DELETE_DOG_ERROR":
            console.log("delete dog error", action.err);
            return state;
        case "UPDATE_DOG":
            console.log("updated dog", action.data, action.id);
            return state;
        case "UPDATE_DOG_ERROR":
            console.log("update dog error", action.err);
            return state;
        case "QUERY_DOG":
            console.log("queried dogs", action.dog.data());
            initState.dogs.push(action.dog.data())
            console.log(state)
            return {
                state,
                dog: action.dog.data()
            };
        case "QUERY_DOG_ERROR":
            console.log("query dog error", action.err);
            return state;
        default:
            return state;
    }
}



export default (dogReducer)