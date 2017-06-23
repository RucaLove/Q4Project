'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const humps = require('humps')

router.get('/', (req, res, next) => {
    knex('poses')
        .orderBy('id')
        .then((poses) => {
            res.send(humps.camelizeKeys(poses));
        })
        .catch((err) => {
            next(err);
        });
});

// router.get('/:id', (req, res, next) => {
//     knex('yogapp')
//         .orderBy('id', req.params.id)
//         .then((poses) => {
//             if (!poses) {
//                 return next();
//             }
//             res.send(humps.camelizeKeys(poses[0]));
//         })
//         .catch((err) => {
//             next(err);
//         });
// });
//
// router.post('/', (req, res, next) => {
//     knex('yogapp')
//         .then((poses) => {
//             if (!poses) {
//                 const err = new Error('pose does not exist');
//                 err.status = 400;
//                 throw err;
//             }
//             knex('yogapp')
//                 .insert({
//                   id: req.body.id,
//                   pose_name_english: req.body.pose_name_english,
//                   pose_name_sanskrit: req.body.pose_name_sanskrit,
//                   pose_name_sanskrit_characters: req.body.pose_name_sanskrit_characters,
//                   pose_img: req.body.pose_img,
//                   difficulty_level: req.body.difficulty_level,
//                   category: req.body.category
//                 })
//                 .returning('*')
//                 .then((poses1) => {
//                     res.json(humps.camelizeKeys(poses1[0]));
//                 })
//         })
//         .catch((err) => {
//             next(err);
//         });
// });
//
// router.patch('/:id', (req, res, next) => {
//     knex('yogapp')
//         .where('id', req.params.id)
//         .update({
//             id: req.body.id,
//             pose_name_english: req.body.pose_name_english,
//             pose_name_sanskrit: req.body.pose_name_sanskrit,
//             pose_name_sanskrit_characters: req.body.pose_name_sanskrit_characters,
//             pose_img: req.body.pose_img,
//             difficulty_level: req.body.difficulty_level,
//             category: req.body.category
//         })
//         .returning('*')
//         .then((pose) => {
//           res.json(humps.camelizeKeys(pose[0]));
//         })
// });

// router.delete('/:id', (req, res, next) => {
//     let pose;
//
//     knex('yogapp')
//         .where('id', req.params.id)
//         .first()
//         .then((row) => {
//             if (!row) {
//                 return next();
//             }
//
//             pose = row;
//
//             return knex('yogapp')
//                 .del()
//                 .where('id', req.params.id);
//         })
//         .then(() => {
//             delete pose.id;
//             res.send(humps.camelizeKeys(pose));
//         })
//         .catch((err) => {
//             next(err);
//         });
// });

module.exports = router;
