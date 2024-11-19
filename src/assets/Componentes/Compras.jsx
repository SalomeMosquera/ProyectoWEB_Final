import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase"; // Import auth to get user ID

const Compras = () => {
  const [items, setItems] = useState([]); // Items in the cart
  const [total, setTotal] = useState(0); // Total cost of the cart
  const navigate = useNavigate();

  // Get logged-in user's ID (if any)
  const user = auth.currentUser;
  const userID = user ? user.uid : null; // Use the UID of the logged-in user

  // Function to save the purchase in Firestore
  const savePurchase = async (userID, items, total) => {
    if (!userID) {
      console.error("User is not logged in");
      return;
    }

    try {
      // Save the purchase in the 'Purchases' collection
      await addDoc(collection(db, "Purchases"), {
        userID,
        items,
        total,
        date: new Date().toISOString(),
      });
      console.log("Compra registrada exitosamente.");
    } catch (error) {
      console.error("Error al guardar la compra:", error);
    }
  };

  // Handle completing the purchase
  const handlePurchase = () => {
    if (!items.length || total <= 0) {
      alert("Debe reservar para mínimo una persona");
      return;
    }

    if (!userID) {
      alert("Por favor, inicie sesión para realizar la compra.");
      return;
    }

    savePurchase(userID, items, total);
  };

  return (
    <div className="purchase">
      <h3>Detalles de Compra</h3>
      <div>
        <p>Productos: {JSON.stringify(items)}</p>
        <p>Total: ${total}</p>
      </div>
      <button onClick={handlePurchase}>Finalizar compra</button>
    </div>
  );
};

export default Compras;
