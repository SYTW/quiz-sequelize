var models = require('../models/models.js');
var Quiz = models.Quiz;

exports.show = function(req, res) {
  Quiz.find(req.params.quizId).then(function(quiz) {
    res.render('quizes/show', { quiz: quiz });
  });
};

exports.answer = function(req, res) {
  Quiz.find(req.params.quizId).then(function(quiz) {
    var respuesta = 'Incorrecto';
    if (req.query.respuesta === quiz.respuesta) respuesta = 'Correcto'; 
    res.render('quizes/answer', { quiz: quiz, respuesta: respuesta })
  });
};

exports.index = function(req, res) {
  Quiz.findAll().then(function(quizes){
    res.render('quizes/index.ejs', { quizes: quizes});
  });
};

exports.author = function(req, res) {
  res.render('author', {});
};
