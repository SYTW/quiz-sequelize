var Quiz = require('../models/models.js').Quiz;

exports.question = function(req, res) {
  Quiz.findAll().success(function(quiz){
    res.render('quizes/question', {pregunta: quiz[1].pregunta})
  });
};

exports.answer = function(req, res) {
  var respuesta;

  Quiz.findAll().success(function(quiz) {
        if (req.query.respuesta === quiz[1].respuesta) respuesta = 'Correcto'; 
        else respuesta = 'Incorrecto';
        res.render('quizes/answer', {respuesta: respuesta});
    });
};

exports.author = function(req, res) {
  res.render('author', {});
};
