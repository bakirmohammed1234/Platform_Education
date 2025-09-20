import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../utils/FireBase";
import { collection, addDoc } from "firebase/firestore";

function PostCourse() {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    courUrl: null,
    courPublicId: null,       // ajouté
    caractereUrl: null,
    caracterePublicId: null,  // ajouté
    typ: '',
    createdAt: new Date(),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const uploadToCloudinary = async (file) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "ours_preset");
    fd.append("resource_type", "raw");

    const res = await fetch("https://api.cloudinary.com/v1_1/dahm5xom1/raw/upload", {
      method: "POST",
      body: fd
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error?.message || "Upload échoué");

    // retourne url + public_id
    return { url: data.secure_url, publicId: data.public_id };
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    setUploading(true);
    try {
      const { url, publicId } = await uploadToCloudinary(file);

      // ajoute aussi le champ publicId correspondant
      setFormData(prev => ({
  ...prev,
  [name]: url,
  [name === "courUrl" ? "courPublicId" : "caracterePublicId"]: publicId
  }));

      setSuccessMessage(`${name === 'courUrl' ? "Cours" : "Caractère"} PDF uploadé avec succès !`);
    } catch (err) {
      console.error("Erreur lors de l'upload:", err);
    }
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "courses"), formData);
      console.log("Course created successfully");
      navigate(-1);
    } catch (error) {
      console.log("Erreur Firestore:", error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '500px' }}>
        <h1 className="text-center">Poster un cours</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Titre</label>
            <input name="title" type="text" className="form-control" value={formData.title} onChange={handleInputChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Cours (PDF)</label>
            <input name="courUrl" type="file" className="form-control" accept=".pdf" onChange={handleFileChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Caractère (PDF)</label>
            <input name="caractereUrl" type="file" className="form-control" accept=".pdf" onChange={handleFileChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Type</label>
            <select
              name="typ"
              className="form-select"
              value={formData.typ}
              onChange={handleInputChange}
              required
            >
              <option value="">-- Sélectionnez un type --</option>
              <option value="geographie">الجغرافيا</option>
              <option value="historique">التاريخ</option>
            </select>
          </div>

          {successMessage && (
            <div className="alert alert-success py-2 text-center">{successMessage}</div>
          )}

          <button type="submit" className="btn btn-primary w-100" disabled={uploading}>
            {uploading ? "Uploading..." : "Poster le cours"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostCourse;
