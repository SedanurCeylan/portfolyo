const getConfig = () => ({ apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID });

export function hasFirebaseConfig() {
  const { apiKey, projectId } = getConfig();
  return Boolean(apiKey && projectId);
}

export function getFirestoreDocumentUrl() {
  const { projectId } = getConfig();
  if (!projectId) throw new Error("Firebase project ID is missing.");
  return `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/site_content/main`;
}

export function getStorageBucket() {
  return process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || `${getConfig().projectId}.firebasestorage.app`;
}

export async function firebaseSignIn(email, password) {
  const { apiKey } = getConfig();
  if (!apiKey) throw new Error("Firebase API key is missing.");
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password, returnSecureToken: true }), cache: "no-store" });
}

export async function getFirebaseUser(idToken) {
  const { apiKey } = getConfig();
  if (!apiKey || !idToken) return null;
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ idToken }), cache: "no-store" });
  if (!response.ok) return null;
  const data = await response.json();
  const user = data.users?.[0];
  const allowed = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  return allowed && user?.email?.toLowerCase() === allowed ? user : null;
}
