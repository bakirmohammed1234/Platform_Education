import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/FireBase";
import CoursesTable from "./CoursesTable";

function Courses({ titre = "historique" }) {
  const [geoCourses, setGeoCourses] = useState([]);
  const [histCourses, setHistCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const geo = [];
        const hist = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const course = { id: doc.id, ...data };

          if (course.typ === "geographie") {
            geo.push(course);
          } else if (course.typ === "historique") {
            hist.push(course);
          }
        });

        setGeoCourses(geo);
        setHistCourses(hist);
      } catch (error) {
        console.error("Erreur lors du chargement des cours :", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      {titre === "historique" ? (
        <CoursesTable title="التاريخ" courseList={histCourses} />
      ) : (
        <CoursesTable title="الجغرافيا" courseList={geoCourses} />
      )}
    </>
  );
}

export default Courses;
