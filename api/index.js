import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import serverless from "serverless-http";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Route pour supprimer un fichier
app.post("/delete-file", async (req, res) => {
  const { publicId } = req.body;

  if (!publicId) {
    return res.status(400).json({ error: "publicId manquant" });
  }

  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: "raw",
    });
    res.json({ success: true, result });
  } catch (err) {
    console.error("Erreur suppression Cloudinary:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


export default serverless(app);
