import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/FireBase";
import ExamensTable from "./ExamensTable";

function  Examens() {
  const [examens, setExamens] = useState([]);
  useEffect(() => {
    const fetchExamens = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "examens"));
        
        const geo = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const examen = { id: doc.id, ...data };

         
            geo.push(examen);
          
        });

        setExamens(geo);
      } catch (error) {
        console.error("Erreur lors du chargement des cours :", error);
      }
    };

    fetchExamens();
  }, []);

  return (
    <>
      
        <ExamensTable title="الامتحانات" examenList={examens} />
      
    </>
  );
}

export default Examens;
