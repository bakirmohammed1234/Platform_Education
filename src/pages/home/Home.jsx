
import { Mail, Phone, MapPin, Clock,Book, Monitor, ChevronLeft } from "lucide-react";

import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-vh-100 bg-light" dir="rtl">
      {/* Hero Section */}
      <section className="py-5 mt-5">
        <div className="container px-4">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <h2 className="fs-1 fw-bold text-dark mb-4">دروس التاريخ والجغرافيا للأولى بكالوريا</h2>
              <p className="fs-5 text-muted mb-2"></p>
              <p className="fs-5 text-muted mb-4">( الشعب العلمية والتقنية)</p>
              <button className="btn btn-success btn-lg">بدء الدراسة</button>
            </div>

            {/* Right Illustration */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img
                src="../src/assets/homeB.png"
                alt="Globe with book illustration"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section className="py-5 bg-white">
        <div className="container px-4">
          <h3 className="fs-1 fw-bold text-center text-dark mb-5">الدروس</h3>
         
          <div className="row g-4 mx-auto" style={{ maxWidth: "900px" }}>
            {/* History Lesson */}
            <div className="col-12 col-md-6">
                <Link  to="/courses" className="text-decoration-none" >
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="bg-success p-3 rounded">
                    <Monitor className="text-white" />
                  </div>
                  <div>
                    <h4 className="fs-3 fw-bold text-dark mb-2">دروس التاريخ</h4>
                    <p className="text-muted"></p>
                  </div>
                </div>
                <p className="text-dark mb-0"></p>
              </div>
              </Link>
            </div>

            {/* Geography Lesson */}
            <div className="col-12 col-md-6">
                <Link  to="/geographique" className="text-decoration-none" >
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="bg-warning p-3 rounded">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h4 className="fs-3 fw-bold text-dark mb-2">دروس الجغرافيا</h4>
                    <p className="text-muted"></p>
                  </div>
                </div>
                <p className="text-dark mb-0"></p>
              </div>
              </Link>
            </div>
            {/* Geography Lesson */}
            <div className="col-12 col-md-6">
                <Link  to="/examens" className="text-decoration-none" >
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="bg-warning p-3 rounded">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h4 className="fs-3 fw-bold text-dark mb-2">الامتحانات</h4>
                    <p className="text-muted">نمادج امتحانات جهوية</p>
                  </div>
                </div>
                <p className="text-dark mb-0"></p>
              </div>
              </Link>
            </div>
            {/* Geography Lesson */}
            <div className="col-12 col-md-6">
                <Link  to="/exercices" className="text-decoration-none" >
              <div className="bg-light rounded p-4 h-100">
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="bg-warning p-3 rounded">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h4 className="fs-3 fw-bold text-dark mb-2">التمارين</h4>
                    <p className="text-muted">تمارين تطبيقية</p>
                  </div>
                </div>
                <p className="text-dark mb-0"></p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      

      {/* Latest Lessons Section */}
<section className="py-5 bg-light d-flex justify-content-center align-items-center">
  {/* Call to Action */}
  <div
    className="p-5 rounded-4 text-center text-white shadow w-100"
    style={{
      background: "linear-gradient(90deg, #2563eb, #7c3aed)",
      maxWidth: "950px", // largeur max du bloc
    }}
  >
    <div className="mx-auto" style={{ maxWidth: "700px" }}>
      <h3 className="h2 fw-bold mb-3">هل تحتاج مساعدة فورية؟</h3>
      <p className="lead mb-4">
        اتصل بنا مباشرة للحصول على إجابات سريعة لأسئلتك
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
        <a
          href="tel:+212629048213"
          className="btn btn-success btn-lg d-flex align-items-center justify-content-center gap-2"
        >
          <Phone size={22} />
          <span>اتصل الآن</span>
        </a>
        <a
          href="mailto:ou11ama.taib@gmail.com"
          className="btn btn-light btn-lg text-primary d-flex align-items-center justify-content-center gap-2"
        >
          <Mail size={22} />
          <span>أرسل إيميل</span>
        </a>
      </div>
    </div>
  </div>
</section>

      
    </div>
  );
};

export default Home;
