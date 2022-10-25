// import connection
import db from "../config/database.js";

// Get All Mahasiswa
export const getMhs = (result) => {
  db.query("SELECT * FROM data_mhs", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Get Single Mahasiswa
export const getMhsById = (id, result) => {
  db.query("SELECT * FROM data_mhs WHERE mhs_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// Insert Mahasiswa to Database
export const insertMhs = (data, result) => {
  db.query("INSERT INTO data_mhs SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update Mahasiswa to Database
export const updateMhsById = (data, id, result) => {
  db.query("UPDATE data_mhs SET mhs_name = ?, mhs_nim = ? WHERE mhs_id = ?", [data.mhs_name, data.mhs_nim, id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Delete Mahasiswa to Database
export const deleteMhsById = (id, result) => {
  db.query("DELETE FROM data_mhs WHERE mhs_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
