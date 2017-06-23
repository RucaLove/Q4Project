'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');
const jwt = require('jsonwebtoken');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const boom = require('boom')

router.get('/', (req, res, next) => {
    knex('store')
        .orderBy('id')
        .then((item) => {
            res.send(humps.camelizeKeys(item));
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/', (req, res, next) => {
    // if (!req.cookies.token) {
    //     return next(boom.create(401, 'Unauthorized'))
    // } else {
    //     knex('store')
    //         .join('store', 'store.id', 'store_id')
    //         .then((item) => {
    //             res.send(humps.camelizeKeys(item));
    //         });
    // }
});

// router.get('/store/check', (req, res, next) => {
    // if (!req.cookies.token) {
    //     return next(boom.create(401, 'Unauthorized'));
    // } else {
    //     let id = +req.query.storeId;
    //     knex('store')
    //         .where('id', id)
    //         .then((item) => {
    //             if (!item.length) {
    //                 res.send(false);
    //             } else {
    //                 res.send(true);
    //             }
    //         })
    // }
// });

router.post('/', (req, res, next) => {
    // if (!req.cookies.token) {
    //     return next(boom.create(401, 'Unauthorized'))
    // }
    // knex.raw("select setval('store_id_seq', (select max(id) from store))")
    //     .then(
    //         knex('store')
    //         .insert({
    //             id: req.body.id,
    //             store_id: req.body.storeId,
    //             user_id: 1
    //         })
    //         .returning('*')
    //         .then((item1) => {
    //             res.send(humps.camelizeKeys(item1[0]));
    //         })
    //     );
});

router.delete('/', (req, res, next) => {
  //   if (!req.cookies.token) {
  //       return next(boom.create(401, 'Unauthorized'))
  //   }
  // knex('store')
  //       .returning(['store_id', 'user_id'])
  //       .where('store_id', req.body.storeId)
  //       .del()
  //       .then((item) => {
  //           delete item[0].id;
  //           res.send(humps.camelizeKeys(item[0]));
  //       })
});

module.exports = router;
