const express = require("express");
const router = express.Router();
const Employee = require("./Employee");

router.get("/", (req, res) => {
  Employee.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    salary: req.body.salary,
    position: req.body.position,
  });
  employee
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.patch("/:id", (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    picture: req.body.picture,
    salary: req.body.salary,
    position: req.body.position,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
