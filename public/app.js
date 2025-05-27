// Import Firebase SDKs
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Firebase Auth instance (available via window.auth from index.html config)
const auth = window.auth;

// DOM Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const logoutBtn = document.getElementById("logout");
const appSection = document.getElementById("app");
const authSection = document.getElementById("auth-section");

// Register
registerBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Registered successfully"))
    .catch((err) => alert(err.message));
});

// Login
loginBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Logged in"))
    .catch((err) => alert(err.message));
});

// Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => alert("Logged out"));
});

// Auth state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    authSection.style.display = "none";
    appSection.style.display = "block";
    logoutBtn.style.display = "inline-block";
  } else {
    authSection.style.display = "block";
    appSection.style.display = "none";
    logoutBtn.style.display = "none";
  }
});
