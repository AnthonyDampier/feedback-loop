const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    const answers = req.body;
    
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, [Number(answers.answerOne),  Number(answers.answerTwo), Number(answers.answerThree), answers.answerFour]

    ).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error POST /answer', error);
        res.sendStatus(500);
    });
})

router.get('/', (req, res) => {
    console.log('GET /answers');
    // TODO: fetch by most recent row
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error GET /answer', error);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    pool.query(`DELETE FROM "feedback" WHERE id=$1`, [req.params.id])
    .then((result)=> {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /feedback', error);
        res.sendStatus(500);
    })
})

module.exports = router;