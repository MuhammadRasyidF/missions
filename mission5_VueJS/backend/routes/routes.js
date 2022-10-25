// import express
import express from "express";

// import function from controller
import { showMhs, showMhsById, createMhs, updateMhs, deleteMhs } from "../controllers/mhs.js";

// init express router
const router = express.Router();

// Get All Mahasiswa
router.get("/mhs", showMhs);

// Get Single Mahasiswa
router.get("/mhs/:id", showMhsById);

// Create New Mahasiswa
router.post("/mhs", createMhs);

// Update Mahasiswa
router.put("/mhs/:id", updateMhs);

// Delete Mahasiswa
router.delete("/mhs/:id", deleteMhs);

// export default router
export default router;
