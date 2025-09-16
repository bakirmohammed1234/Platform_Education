import React from 'react';
import { BookOpen, MapPin, Clock, Award, Users, FileText } from 'lucide-react';

const About = () => {
  return (
    <div className="min-vh-100 bg-light py-5 px-3" dir="rtl">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 shadow-lg" 
               style={{ width: '6rem', height: '6rem', background: 'linear-gradient(to right, #2563eb, #4f46e5)' }}>
            <BookOpen size={48} className="text-white" />
          </div>
          <h1 className="fw-bold text-dark mb-3 display-5">الأستاذ أسامة طيب</h1>
          <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '40rem' }}>
            مرحباً بكم في موقعي التعليمي المتخصص في التاريخ والجغرافيا
          </p>
        </div>

        {/* Main Content */}
        <div className="row g-4 align-items-start">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="bg-white rounded-4 shadow p-4 h-100">
              <h2 className="h3 fw-bold text-dark mb-4 d-flex align-items-center">
                <Users size={28} className="text-primary ms-2" />
                من أنا
              </h2>
              <div className="text-muted lh-lg">
                <p className="fs-5">
                  أهلاً وسهلاً بكم،  الأستاذ أسامة طيب، أستاذ مادة التاريخ والجغرافيا. 
                  أقدم من خلال هذا الموقع محتوى تعليمي شامل ومتميز لتلاميذ الأولى بكالوريا.
                </p>
                <p>
                  يسعدني أن أشارككم خبرتي التعليمية من خلال مجموعة متنوعة من الموارد التعليمية المصممة 
                  بعناية لتلبية احتياجات التلاميذ في مختلف المستويات التعليمية.
                </p>
                <p>
                  هدفي الأساسي هو جعل دراسة التاريخ والجغرافيا أكثر متعة وفهماً، وتوفير بيئة تعليمية 
                  تفاعلية تساعد التلاميذ على تحقيق أفضل النتائج الأكاديمية.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 d-flex flex-column gap-3">
            <div className="bg-white rounded-4 shadow p-4">
              <h3 className="h4 fw-bold text-dark mb-3 d-flex align-items-center">
                <BookOpen size={24} className="text-success ms-2" />
                الدروس التعليمية
              </h3>
              <p className="text-muted">
                دروس مفصلة ومبسطة في التاريخ والجغرافيا مع شرح واضح ومفهوم لجميع المواضيع المنهجية.
              </p>
            </div>

            <div className="bg-white rounded-4 shadow p-4">
              <h3 className="h4 fw-bold text-dark mb-3 d-flex align-items-center">
                <FileText size={24} className="text-primary ms-2" />
                التمارين والأنشطة
              </h3>
              <p className="text-muted">
                مجموعة شاملة من التمارين المتنوعة والأنشطة التفاعلية لترسيخ المفاهيم وتطوير المهارات.
              </p>
            </div>

            <div className="bg-white rounded-4 shadow p-4">
              <h3 className="h4 fw-bold text-dark mb-3 d-flex align-items-center">
                <Award size={24} className="text-purple ms-2" />
                نماذج الامتحانات
              </h3>
              <p className="text-muted">
                امتحانات تجريبية وحلول نموذجية لمساعدة التلاميذ في التحضير الأمثل للامتحانات الرسمية.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-5">
          <h2 className="h3 fw-bold text-center text-dark mb-4">مميزات الموقع</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white rounded-4 shadow text-center p-4 h-100">
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                     style={{ width: '4rem', height: '4rem', backgroundColor: '#dbeafe' }}>
                  <MapPin size={28} className="text-primary" />
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">محتوى جغرافي متخصص</h3>
                <p className="text-muted">دراسة شاملة للظواهر الجغرافية والخرائط والمناخ والسكان</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-white rounded-4 shadow text-center p-4 h-100">
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                     style={{ width: '4rem', height: '4rem', backgroundColor: '#dcfce7' }}>
                  <Clock size={28} className="text-success" />
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">دراسات تاريخية معمقة</h3>
                <p className="text-muted">رحلة عبر التاريخ لفهم الحضارات والأحداث التاريخية المهمة</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="bg-white rounded-4 shadow text-center p-4 h-100">
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                     style={{ width: '4rem', height: '4rem', backgroundColor: '#f3e8ff' }}>
                  <Award size={28} className="text-purple" />
                </div>
                <h3 className="h5 fw-bold text-dark mb-2">تحضير للامتحانات</h3>
                <p className="text-muted">استراتيجيات فعالة ونماذج امتحانات لضمان النجاح والتفوق</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-5 rounded-4 p-5 text-center text-white" 
             style={{ background: 'linear-gradient(to right, #2563eb, #4f46e5)' }}>
          <h2 className="h3 fw-bold mb-3">ابدأ رحلتك التعليمية معنا</h2>
          <p className="fs-5 mb-4 opacity-75">
            استكشف المحتوى التعليمي واستفد من الدروس والتمارين المتوفرة
          </p>
          <button className="btn btn-light text-primary fw-bold px-5 py-2 rounded-pill fs-5">
            تصفح الدروس
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
