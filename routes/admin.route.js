const { Router } = require('express');
const adminRouter = Router();
const {adminModel} = require('../db/db.js')
const {JWT_ADMIN_PASSWORD} = require("../config/config.js") 
const jwt = require('jsonwebtoken')

adminRouter.get("/signup", async(req, res) => {
     const { email, firstname, lastname, password } = req.body;
    try {

        const userData = await adminModel.create({
            firstname, lastname, email, password
        });

    } catch (err) {
        console.error(err)
    }

    res.json({
        message: "signUp endpoint"
    })
})

adminRouter.get("/signin", async(req, res) => {
   try {
          const { email, password } = req.body;
          const admin = await adminModel.findOne({
              email, password
          });
  
          if (admin) {
              const token = jwt.sign({
                  id: admin._id
              }, JWT_ADMIN_PASSWORD);
              res.json({
                  token: token
              });
          } else {
              res.status(403).json({
                  message: "Incorrect Credentioasl"
              })
          }
      } catch (error) {
          console.error(error);
      }
      res.json({
          message: "signin endpoint"
      })
})
adminRouter.get("/course", (req, res) => {
    res.json({
        message: "courese endpoint"
    })
})
adminRouter.get("/course", (req, res) => {
    res.json({
        message: "courese endpoint"
    })
})

module.exports = {
    adminRouter
        : adminRouter
}