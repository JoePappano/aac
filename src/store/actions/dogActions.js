export const createDog = (dog) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: "CREATE_DOG", dog})
    }
};