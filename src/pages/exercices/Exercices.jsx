import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/FireBase";
import ExercicesTable from "./ExercicesTable";
function  Exercices() {
  const [exercices, setExercices] = useState([]);
  useEffect(() => {
    const fetchExercices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "exercices"));
        
        const geo = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const exercice = { id: doc.id, ...data };

         
            geo.push(exercice);
          
        });

        setExercices(geo);
      } catch (error) {
        console.error("Erreur lors du chargement des cours :", error);
      }
    };

    fetchExercices();
  }, []);

  return (
    <>
      
        <ExercicesTable title ="التمارين" exercicesList={exercices} />
      
    </>
  );
}

export default Exercices;
