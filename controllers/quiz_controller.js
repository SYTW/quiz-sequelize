exports.question = function(req, res) {
  console.log("inside question");
  res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

exports.answer = function(req, res) {
  var respuesta;

  if (req.query.respuesta === 'Roma') respuesta = 'Correcto'; else respuesta = 'Incorrecto';
  res.render('quizes/answer', {respuesta: respuesta});
};
