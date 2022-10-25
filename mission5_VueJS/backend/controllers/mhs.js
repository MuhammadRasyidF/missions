// Import function from Product Model
import { getMhs, getMhsById, insertMhs, updateMhsById, deleteMhsById } from "../models/mhsModel.js";

// Get All Products
export const showMhs = (req, res) => {
  getMhs((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Get Single Product
export const showMhsById = (req, res) => {
  getMhsById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Create New Product
export const createMhs = (req, res) => {
  const data = req.body;
  insertMhs(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Update Product
export const updateMhs = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateMhsById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// Delete Product
export const deleteMhs = (req, res) => {
  const id = req.params.id;
  deleteMhsById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
