const initState = {
    dogs: [
        
      ]
}

const dogReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_DOG":
            console.log("created dog", action.dog);
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
        default:
            return state;
    }
}

export default dogReducer