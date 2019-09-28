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

exports.get100sDogs = (req, res) => {
    db
    .collection("dogs")
    .where("kennelNum", ">", 100)
    .where("kennelNum", "<", 200)
    .orderBy("kennelNum", "desc")
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
exports.get200sDogs = (req, res) => {
    db
    .collection("dogs")
    .where("kennelNum", ">", 200)
    .where("kennelNum", "<", 300)
    .orderBy("kennelNum", "desc")
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
exports.get300sDogs = (req, res) => {
    db
    .collection("dogs")
    .where("kennelNum", ">", 300)
    .where("kennelNum", "<", 400)
    .orderBy("kennelNum", "desc")
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
exports.get400sDogs = (req, res) => {
    db
    .collection("dogs")
    .where("kennelNum", ">", 400)
    .where("kennelNum", "<", 500)
    .orderBy("kennelNum", "desc")
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
exports.get500sDogs = (req, res) => {
    db
    .collection("dogs")
    .where("kennelNum", ">", 500)
    .where("kennelNum", "<", 600)
    .orderBy("kennelNum", "desc")
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
exports.get600sDogs = (req, res) => {
    db
    .collection("dogs")
    .where("kennelNum", ">", 600)
    .where("kennelNum", "<", 700)
    .orderBy("kennelNum", "desc")
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
        createdAt: new Date().toISOString(),
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