const { admin, db } = require('../config/firebaseConfig');

// Register a new user with Firebase Authentication
const registerUser = async (req, res) => {
  const { name, email, password,phoneNumber, profilePicture } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
      phoneNumber, 
      photoURL: profilePicture, 
    });

    // Store additional user info in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      name,
      email,
      phoneNumber,
      profilePicture,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user profile data from Firestore
const getUserProfile = async (req, res) => {
  const userId = req.user.uid;

  try {
    const userDoc = await db.collection('users').doc(userId).get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(userDoc.data());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, getUserProfile };
