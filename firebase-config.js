/* =====================================================================
   SHARED DATABASE + AI READER SETTINGS  —  seam-erp
   ===================================================================== */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCizWTOPmxzVSs54eDZFk6hPzCOYyUEVLo",
  authDomain: "seam-erp.firebaseapp.com",
  projectId: "seam-erp",
  storageBucket: "seam-erp.firebasestorage.app",
  messagingSenderId: "410905755785",
  appId: "1:410905755785:web:a02f2416ceedfac28b8658"
};

/* Auto PDF reader — Supabase Edge Function URL (keeps the API key server-side). */
window.AI_PROXY_URL = "https://ykujpxepceuvarrtvusm.supabase.co/functions/v1/extract-po";
