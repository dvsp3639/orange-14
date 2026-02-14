// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrCUl3vY2ZeQ1UrbQREnvTUImNVabYcg4",
  authDomain: "orange-delivery-db.firebaseapp.com",
  projectId: "orange-delivery-db",
  storageBucket: "orange-delivery-db.firebasestorage.app",
  messagingSenderId: "185759993186",
  appId: "1:185759993186:web:69677777698186e05d303b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Collections
const MENU_ITEMS_COLLECTION = "menuItems";
const ORDERS_COLLECTION = "restaurantOrders";
const DAILY_SALES_COLLECTION = "dailySales";
const LAST_ORDER_INFO_DOC = "lastOrderInfo";
const CATEGORIES_DOC = "categories";

// Initialize default data if needed
async function initializeFirebaseData() {
  try {
    // Check if menu items exist
    const menuItemsSnapshot = await db.collection(MENU_ITEMS_COLLECTION).limit(1).get();
    if (menuItemsSnapshot.empty) {
      // Initialize with default menu items
      console.log("Initializing Firebase with default menu items...");
      const batch = db.batch();
      
      menuItems.forEach(item => {
        const docRef = db.collection(MENU_ITEMS_COLLECTION).doc(item.id.toString());
        batch.set(docRef, item);
      });
      
      await batch.commit();
      console.log("Default menu items added to Firebase");
    }

    // Check if categories exist
    const categoriesRef = db.collection("config").doc(CATEGORIES_DOC);
    const categoriesDoc = await categoriesRef.get();
    if (!categoriesDoc.exists) {
      await categoriesRef.set({ categories: categories });
      console.log("Categories initialized in Firebase");
    }

    // Check if last order info exists
    const lastOrderRef = db.collection("config").doc(LAST_ORDER_INFO_DOC);
    const lastOrderDoc = await lastOrderRef.get();
    if (!lastOrderDoc.exists) {
      await lastOrderRef.set({ kot: 50, bill: 50 });
      console.log("Last order info initialized in Firebase");
    }

  } catch (error) {
    console.error("Error initializing Firebase data:", error);
  }
}