export const createDog = (dog) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection("dogs").add({
            ...dog,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            BR: false,
            DR: false,
            EA: false,
            ER: false,
            GS: false,
            H: false,
            HT: false,
            J: false,
            LB: false,
            LLW: false,
            LWO: false,
            M: false,
            RR: false,
            SP: false,
            TM: false,
            walked: false,
            playgroup: false,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_DOG", dog});
        }).catch((err) => {
            dispatch({ type: "CREATE_DOG_ERROR", err});
        })
    }
};

export const deleteDog = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("dogs").doc(id).delete()
            .then(() => {
                dispatch({ type: "DELETE_DOG" , id});
            }).catch((err) => {
                dispatch({ type: "DELETE_DOG_ERROR", err})
            })
    }
}

export const updateDog = (id, data) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("dogs").doc(id).update({
            ...data
        }).then(() => {
            dispatch({ type: "UPDATE_DOG", data})
        }).catch((err) => {
            dispatch({ type: "UPDATE_DOG_ERROR", err})
        })
    }
}

export const queryDogs = () => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const dogs = [];
        firestore.collection("dogs").where("name", "==", "Fido").get().then((snapshot) => {
            snapshot.docs.forEach(dog => {
                // console.log(dog.data())
                dogs.push(dog)
                dispatch({ type: "QUERY_DOG", dog})
            })
        })
    }
}