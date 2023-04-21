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
        var qNames = qs.map((q) => {
          return {
            qid: q.dataValues.urltitle,
            title: q.dataValues.fulltitle
          }
        })

        var response_obj = {success: true, questions: qNames}
        qNames.push({qid: 'start', title: 'start'});
        /* retrieve questions from aqc */
        axios.get('http://aqc1:4040/api/aquestions/list')
          .then(function (response) {
            qNames.push({qid: 'then', title: 'then'});
            for (let i = 0; i < response.data.questions.length; i++) {
              qNames.push(response.data.questions[i]);
            }
            response_obj.response_data = response;
          })
          .catch(err => {
            /* silent the error */
            qNames.push({qid: 'error', title: 'error'});
          })
          .finally(function () {
            qNames.push({qid: 'finally', title: 'finally'});
            // always executed
          });
        qNames.push({qid: 'end', title: 'end'});

        return res.status(200).send(response_obj);
      } else {
        return res.status(404).send({success: false, questions: []});
      }
    })
    .catch(err => {
      return res.status(500).send({message: err.message});
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