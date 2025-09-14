import React, { useState, useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth,db } from "../../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { deleteDoc,doc } from 'firebase/firestore';

const ExercicesTable= ({title, exercicesList=[]}) => {
  const [ exercices , setExercices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
   const {currentUser} = useAuth();
   const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();


  const handlePostExercice=()=>{
        navigate("/exercice");
      setSuccessMessage("✅ تم اضافة الدورة بنجاح");
      clearMessage();

    }

    // const handleUpdateExamen=(id) =>{
    //     navigate(`/examens/${id}/edit`);
    // }

   


     const handleDeleteExercice = async (id, exercicePublicId, caracterePublicId) => {
  try {
    // Supprimer le document Firestore
    await deleteDoc(doc(db, "exercices", id));

    // Supprimer les fichiers Cloudinary si publicId existe
    if (exercicePublicId) {
      await fetch("/api/index/delete-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: exercicePublicId }),
      });
    }

    if (caracterePublicId) {
      await fetch("/api/index/delete-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: caracterePublicId }),
      });
    }

    // Mettre à jour la liste en local
    setExercices((prev) => prev.filter((exercice) => exercice.id !== id));

    setSuccessMessage("✅ تم حذف الدورة بنجاح");
    clearMessage();
  } catch (error) {
    console.log(error.message);
  }
};


    const clearMessage = () => {
    setTimeout(() => setSuccessMessage(''), 3000);
  };

   const handleLogOut= async()=>{
        
        try {
            await signOut(auth);
              navigate("/login");
        } catch (error) {
            console.log(error.message);
            
        }

    }

    // Copier la liste dans le state une seule fois au montage
  useEffect(() => {
     console.log("courseList updated:",  exercicesList);
    setExercices([... exercicesList]); // Copie par valeur
  }, [exercicesList]); // met à jour si les props changent

  

  // تصفية الدورات بناءً على البحث
  const filteredExercices = exercices.filter(course => 
    course.title.includes(searchTerm)
  );

  // تنسيق التاريخ
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-MA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container-fluid py-4" style={{ margin:"100px 5px 5px 5px" ,direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>

       {successMessage && (
        <div className="alert alert-success text-center fw-bold" role="alert">
          {successMessage}
        </div>
      )}
      {/* العنوان وشريط البحث */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-lg border-0" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '15px'
          }}>
            <div className="card-body mt-4 text-white" >
              <h2 className="text-center mb-4 fw-bold" style={{ fontSize: '2.5rem' }}>
                📚 قائمة {title}
              </h2>
              
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ابحث عن دورة..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{ 
                        borderRadius: '25px 0 0 25px',
                        border: 'none',
                        fontSize: '1.1rem'
                      }}
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الجدول */}

      <div className="row">
        {currentUser?(<div className="mb-3 d-flex justify-content-start">
            <button onClick={handleLogOut} type="button" className="btn btn-outline-secondary"><i className="bi bi-box-arrow-in-right"></i>LogOut</button>
        </div>):<></>

        }
        {
          currentUser?( <div className="mb-3 d-flex justify-content-end">
      <button onClick={handlePostExercice} type="button" className="btn btn-success"><i className="bi bi-plus"></i>Add Exercice</button>
        </div>): <></>

        }
       
    
        <div className="col-12">
          <div className="card shadow-lg border-0" style={{ borderRadius: '15px' }}>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ fontSize: '1.1rem' }}>
                  <thead style={{ 
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    color: 'white'
                  }}>
                    <tr>
                      <th className="py-4 px-4 fw-bold text-center" style={{ borderRadius: '15px 0 0 0', width: '80px' }}>
                        #
                      </th>
                      <th className="py-4 px-4 fw-bold" style={{ width: '50%' }}>
                        📖 عنوان الدورة
                      </th>
                     <th className="py-4 px-4 fw-bold text-center" style={{ borderRadius: '0 15px 0 0', width: '25%' }}>
                        📄 ملف PDF
                      </th>
                      <th className="py-4 px-4 fw-bold text-center" style={{ borderRadius: '0 15px 0 0', width: '25%' }}>
                        📄 المصتلحات                      </th>

                        {
                          currentUser?(<th className="py-4 px-4 fw-bold text-center" style={{ borderRadius: '0 15px 0 0', width: '25%' }}>
                        📄 التحكم                  </th>):<></>
                        }
                         
                    </tr>
                  </thead>
                  <tbody>
                    {filteredExercices.map((course, index) => (
                      <tr key={course.id} className="align-middle" style={{
                        transition: 'all 0.3s ease',
                        borderBottom: '1px solid #e9ecef'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9ff';
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}>
                        
                        {/* رقم الدورة */}
                        <td className="text-center py-4">
                          <span className="badge bg-primary rounded-pill" style={{ 
                            fontSize: '1.1rem', 
                            padding: '10px 15px',
                            minWidth: '40px'
                          }}>
                            {index + 1}
                          </span>
                        </td>
                        
                        {/* عنوان الدورة */}
                        <td className="py-4 px-4">
                          <h5 className="mb-0 fw-bold text-dark" style={{ 
                            fontSize: '1.3rem',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                          }}>
                            {course.title}
                          </h5>
                        </td>
                        
                        {/* تاريخ الإنشاء */}
                        <td className="text-center py-4">
                          <button
                            className="btn btn-danger btn-lg px-4 py-2"
                            style={{
                              borderRadius: '25px',
                              background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                              border: 'none',
                              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                              transition: 'all 0.3s ease',
                              fontSize: '1rem',
                              fontWeight: 'bold'
                            }}
                            onClick={() => window.open(course.exerciceUrl, '_blank')}
                            onMouseOver={(e) => {
                              e.target.style.transform = 'scale(1.1) translateY(-2px)';
                              e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.transform = 'scale(1) translateY(0)';
                              e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
                            }}
                          >
                            📄 تحميل PDF
                          </button>
                        </td>
                        
                        {/* رابط PDF */}
                        <td className="text-center py-4">
                          <button
                            className="btn btn-danger btn-lg px-4 py-2"
                            style={{
                              borderRadius: '25px',
                              background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                              border: 'none',
                              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                              transition: 'all 0.3s ease',
                              fontSize: '1rem',
                              fontWeight: 'bold'
                            }}
                            onClick={() => window.open(course.caractereUrl, '_blank')}
                            onMouseOver={(e) => {
                              e.target.style.transform = 'scale(1.1) translateY(-2px)';
                              e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.transform = 'scale(1) translateY(0)';
                              e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
                            }}
                          >
                            📄 تحميل PDF
                          </button>
                        </td>
                      {
                        currentUser? (<td className="text-center py-4">
                           {/* <button type="button" className="btn btn-primary btn-sm m-2" onClick={()=>handleUpdateExamen(course.id)}><i className="bi bi-pen"></i></button> */}
                        <button type="button" className="btn btn-danger btn-sm" onClick={()=>handleDeleteExercice(course.id,course.exercicePublicId, course.caracterePublicId)}><i className="bi bi-archive-fill"></i></button>
                          
                        </td>):<></>
                      }
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* رسالة عند عدم وجود نتائج */}
              {filteredExercices.length === 0 && (
                <div className="text-center p-5">
                  <div className="mb-3" style={{ fontSize: '4rem' }}>😔</div>
                  <h4 className="text-muted">لا توجد دورات مطابقة لبحثك</h4>
                  <p className="text-muted">جرب كلمة بحث أخرى</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* إحصائيات بسيطة */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm" style={{ 
            borderRadius: '15px', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
          }}>
            <div className="card-body text-white text-center py-3">
              <h4 className="fw-bold mb-0">
                📊 إجمالي الدورات: {exercices.length} دورة
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercicesTable;