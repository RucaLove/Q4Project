'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');

router.get('/users', (req, res, next) => {
    knex('users')
        .orderBy('id')
        .then((users) => {
            // res.send(humps.camelizeKeys(users));
                res.send(users);
        })
        .catch((err) => {
            next(err);
        });
});

// router.post('/users', (req, res, next) => {
//   knex('users')
//   .then((users) => {
//     knex('users')
//     .returning(["id", "first_name", "last_name", "email"])
//       .insert({
//         'first_name': req.body.firstName,
//         'last_name': req.body.lastName,
//         'email': req.body.email,
//         'hashed_password': bcrypt.hashSync(req.body.password, 8)
//                 })
//                 .then((users1) => {
//                   res.json(humps.camelizeKeys(users1[0]));
//                 })
//   })
// });

module.exports = router;
