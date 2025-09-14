import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-vh-100 bg-light" dir="rtl">
      <div className="container py-5">

        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark mb-3">
            تواصل معنا
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            نحن هنا لمساعدتك في رحلتك التعليمية. لا تتردد في التواصل معنا
          </p>
          <div className="mx-auto mt-3 bg-primary rounded-pill" style={{ width: "100px", height: "5px" }}></div>
        </div>

        {/* Contact Information */}
        <div className="mb-5">
          <h2 className="h3 fw-bold text-dark mb-4 text-center">معلومات الاتصال</h2>
          
          <div className="row g-4 justify-content-center">

            {/* Email Card */}
            <div className="col-12 col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex align-items-center">
                  <div className="bg-primary text-white p-3 rounded ms-3">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">البريد الإلكتروني</h5>
                    <a 
                      href="mailto:ou11ama.taib@gmail.com" 
                      className="text-primary fw-medium text-decoration-none"
                    >
                      ou11ama.taib@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="col-12 col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex align-items-center">
                  <div className="bg-success text-white p-3 rounded ms-3">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">رقم الهاتف</h5>
                    <a dir="ltr"
                      href="tel:+212629048213" 
                      className="text-success fw-medium text-decoration-none"
                    >
                      +212 629048213
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="col-12 col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex align-items-center">
                  <div className="bg-info text-white p-3 rounded ms-3">
                    <Linkedin size={28} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">لينكد إن</h5>
                    <a
                      href="https://linkedin.com/company/baccourse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-info fw-medium text-decoration-none"
                    >
                      @oussmataib
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="col-12 col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-secondary text-white p-2 rounded ms-2">
                      <MapPin size={20} />
                    </div>
                    <span className="fw-medium text-dark">المغرب، الرباط</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-warning text-white p-2 rounded ms-2">
                      <Clock size={20} />
                    </div>
                    <span className="fw-medium text-dark">الإثنين - الجمعة: 9:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="p-5 rounded-4 text-center text-white shadow" style={{ background: "linear-gradient(90deg, #2563eb, #7c3aed)" }}>
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

      </div>
    </div>
  );
};

export default Contact;
