// ===== חיבור למאגר משותף (Firebase) =====
//
// כל עוד הקובץ הזה ריק מהגדרות, האתר שומר את הנתונים רק בדפדפן שבו הוא פתוח
// (מתאים להתנסות, לא לעבודה אמיתית עם כמה אנשים).
// כדי שהחופפים והנחפפים יתחברו כל אחד מהמחשב שלו:
//
// 1. באתר Firebase: Project settings (גלגל השיניים) -> Your apps -> האפליקציה שיצרתם
//    -> SDK setup and configuration -> בוחרים "Config".
// 2. מעתיקים את הקטע שמתחיל ב-   const firebaseConfig = {   ומסתיים ב-   };
// 3. מדביקים אותו בדיוק כמו שהוא מתחת לשורה הזו, ושומרים את הקובץ.
//
// אפשר להשתמש באותו פרויקט Firebase של אפליקציה אחרת. הנתונים של האתר הזה נשמרים
// באוספים שמתחילים ב- hafifa_ ולא מתערבבים עם שום דבר אחר.

const firebaseConfig = {
  apiKey: "AIzaSyCLb35SNSGCkepMQ-Q7rfTdffbKR3m2z8A",
  authDomain: "hafifa-2026.firebaseapp.com",
  projectId: "hafifa-2026",
  storageBucket: "hafifa-2026.firebasestorage.app",
  messagingSenderId: "377912203393",
  appId: "1:377912203393:web:77ed56a3aae756c0319580"
};

// ---- אל תשנו מכאן והלאה ----
window.FIREBASE_CONFIG = (typeof firebaseConfig !== 'undefined') ? firebaseConfig : null;
