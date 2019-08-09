export const createDog = (dog) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection("dogs").add({
            ...dog,
            authorFirstName: "Joe",
            authorLastName: "P",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_DOG", dog});
        }).catch((err) => {
            dispatch({ type: "CREATE_DOG_ERROR", err});
        })
    }
};