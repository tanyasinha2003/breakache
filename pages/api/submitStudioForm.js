import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

// Always get the app instance
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const {firstName,lastName,phone, email,date,shootType,packageType,message,shootTypeOther , packageOther } = req.body;

  try {
    await addDoc(collection(db, 'studio'), {
      firstName,lastName,phone, email,date,shootType,packageType,message,shootTypeOther , packageOther,
      createdAt: new Date(),
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Firestore error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
