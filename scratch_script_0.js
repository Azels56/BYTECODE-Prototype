
        const firebaseConfig = {
            apiKey: "AIzaSyBTARZZSEIU0inIHGFKtnItYXggLhdkJ7g",
            authDomain: "bytecode-health-db.firebaseapp.com",
            databaseURL: "https://bytecode-health-db-default-rtdb.firebaseio.com",
            projectId: "bytecode-health-db",
            storageBucket: "bytecode-health-db.firebasestorage.app",
            messagingSenderId: "1074183189774",
            appId: "1:1074183189774:web:fd63e9b7035975c514935f",
            measurementId: "G-XEE15ST80C"
        };

        let firebaseDb = null;
        try {
            if (typeof firebase !== 'undefined') {
                firebase.initializeApp(firebaseConfig);
                firebaseDb = firebase.database();
                console.log('⚡ Firebase Realtime Database Initialized Successfully in Admin Portal!');
            }
        } catch (err) {
            console.warn('Firebase init notice:', err);
        }
    