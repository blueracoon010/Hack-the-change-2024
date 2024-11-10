const admin = require("firebase-admin");
const serviceAccount = require("./config/serviceaccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/project/hack-the-change-202/database"
});

const db = admin.firestore();
module.exports = { admin, db };

