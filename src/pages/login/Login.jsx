import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/FireBase";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(""); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // réinitialiser l'erreur avant chaque tentative
    try {
      const response = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("تم تسجيل الدخول بنجاح", response);
      navigate("/courses");
    } catch (error) {
      setErrorMessage("البريد الإلكتروني أو كلمة المرور غير صحيحة"); // ✅ message en arabe
    }
  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light" dir="rtl">
      <div className="card p-4 shadow" style={{ width: '500px' }}>
        <h1 className="text-center mb-4">تسجيل الدخول</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">البريد الإلكتروني</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">كلمة المرور</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleInputChange}
              value={formData.password}
            />
          </div>

          {/* ✅ Affichage du message d'erreur */}
          {errorMessage && (
            <div className="alert alert-danger text-center" role="alert">
              {errorMessage}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">تسجيل الدخول</button>

        </form>
      </div>
    </div>
  );
}

export default Login;
