const db = require("../models");
const Questions = db.activity;
const axios = require('axios');

exports.questions = (req, res) => {
  Questions.findAll({
    where: {
      qtype: "q"
    }
  })
    .then(qs => {
      if (qs && qs.length > 0) {
        const qNames = qs.map((q) => {
          return {
            qid: q.dataValues.urltitle,
            title: q.dataValues.fulltitle
          }
        })

        return res.status(200).send({success: true, questions: qNames});
      } else {
        res.status(404).send({success: false, questions: []});
      }
    })
    .catch(err => {
      res.status(500).send({message: err.message});
    });
};

exports.question = (req, res) => {
  var url = 'http://awp_mongo1:5000/questions/' + req.body.urltitle;
  axios.get(url)
    .then(function (response) {
      return res.status(200).send({
        success: true,
        question: {
          urltitle: response.data.data.urltitle,
          fulltitle: response.data.data.fulltitle,
          qtext: response.data.data.qtext,
          answers: response.data.data.metadata
        }
      });
    })
    .catch(err => {
      res.status(404).send({
        success: false,
        message: "mongodb server error",
        response: err
      });
    });
};