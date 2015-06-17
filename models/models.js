var path = require('path');

// Cargar modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQlite
var sequelize = new Sequelize(null, null, null, 
        { dialect: "sqlite", storage: "quiz.sqlite"}
    );

// Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

// Exportar definición de la tabla Quiz
exports.Quiz = Quiz;

// sequelize.sync() crea e inicializa la tabla de preguntas en la DB
sequelize.sync().success(function(){
  Quiz.count().success(function(count) {
    if (count === 0) { // La tabla sólo se incializa si está vacía
      Quiz.create({
        pregunta: "Capital de Italia",
        respuesta: "Roma"
      }).success(function() { console.log("Base de datos creada")});
    }
  });
});
