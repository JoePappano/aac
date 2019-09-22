const { db } = require("../util/admin")
 
exports.getAllDogs = (req, res) => {
    db
    .collection('dogs')
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
            let dogs = [];
            data.forEach(doc => {
                dogs.push({
                    ...doc.data(),
                    dogId: doc.id
                });
            });
            return res.json(dogs);
        })
        .catch((err) => console.error(err))
}

exports.createOneDog = (req, res) => {
    if(req.method !== "POST"){
        return res.status(400).json({ message: "Method not allowed" })
    }
    const newDog = {
        name: req.body.name,
        kennelNum: req.body.kennelNum,
        createdAt: new Date().toISOString()
    };
        db
        .collection("dogs")
        .add(newDog)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully`})
        })
        .catch(err => {
            res.status(500).json({ error: "Something went wrong"})
            console.error(err)
        })
}

exports.queryDogsByName = (req, res) => {
    const queriedDog = {
        name: req.body.name,
    }
    db
        .collection("dogs")
        .where("name", "==", queriedDog.name)
        .get()
        .then((data) => {
            let dogs = [];
            data.forEach(doc => {
                dogs.push({
                    ...doc.data(),
                    dogId: doc.id
                });
            });
            return res.json(dogs);
        })
        .catch((err) => console.error(err))
}