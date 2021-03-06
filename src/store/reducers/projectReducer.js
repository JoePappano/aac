const initState = {
    projects: [
        {id: '1', name: 'help me find peach', bio: 'blah blah blah'},
        {id: '2', name: 'collect all the stars', bio: 'blah blah blah'},
        {id: '3', name: 'egg hunt with yoshi', bio: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case "CREATE_PROJECT":
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer