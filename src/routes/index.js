const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/persons/show", (req, res) => {
  try {
    pool.query("SELECT * FROM persons;", (err, result) => {
      if (err) throw err;
      if (result) {
        // console.log(typeof result[0].verified);
        return res.json(result);
      }
    });
  } catch (error) {
    return res.json(error);
  }
});

router.post("/persons/create", (req, res) => {
  const { first_name, last_name, phone, address, city, price, cantidad, fecha, verified } =
    req.body;
  const newActor = {
    first_name,
    last_name,
    phone,
    address,
    city,
    price,
    cantidad,
    fecha,
    verified,
  };
  try {
    pool.query("INSERT INTO persons SET ?", [newActor], (err, result) => {
      if (err) throw err;
      if (result) {
        return res.json({
          message: "Se ha creado el dato exitosamente",
          result,
        });
      }
    });
  } catch (error) {
    return res.json(error);
  }
});

router.delete("/persons/delete/:id", (req, res) => {
  const { id } = req.params;
  try {
    pool.query("DELETE FROM persons WHERE id = ?", [id], (err, result) => {
      if (err) throw err;
      if (result) {
        return res.json({
          message: "Se ha eliminado el dato exitosamente",
          result,
        });
      }
    });
  } catch (error) {
    return res.json(error);
  }
});

router.post("/persons/update/:id", (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, phone, address, city, price, cantidad, fecha, verified } =
    req.body;
  const newActor = {
    first_name,
    last_name,
    phone,
    address,
    city,
    price,
    cantidad,
    fecha,
    verified,
  };
  try {
    pool.query("UPDATE persons SET ? WHERE id = ?", [newActor, id], (err, result) => {
      if (err) throw err;
      if (result) {
        return res.json({
          message: "Se ha actualizado el dato exitosamente",
          result,
        });
      }
    });
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
