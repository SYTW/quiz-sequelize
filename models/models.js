var path = require('path');

// postgress: postgres://databaseuser:password@host:port/database
// sqlite3:   sqlite://@:/
var url = process.env.DATABASE_URL.match(/(.*):\/\/(.*):(.*)@(.*):(.*)\/(.*)/);
var DB_name  = (url[6] || null); console.log(DB_name);
var user     = (url[2] || null); console.log(user);
var pwd      = (url[3] || null); console.log(pwd);
var protocol = (url[1] || null); console.log(protocol);
var dialect  = protocol;         console.log(dialect);
var port     = (url[5] || null); console.log(port);
var host     = (url[4] || null); console.log(host);
var storage  = process.env.DATABASE_STORAGE; console.log(storage);

// Cargar modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQlite
/*
var sequelize = new Sequelize(DB_name, user, pwd, 
        { 
          dialect: dialect, 
          protocol: protocol, 
          port: port,
          host: host,
          storage: storage,
          omitNull: true
        }
    );
*/

var sequelize = new Sequelize('sqlite://@:/', { storage: storage });

// Importar la definición de la tabla Quiz en quiz.js
var quiz_path = path.join(__dirname, 'quiz');
var Quiz = sequelize.import(quiz_path);

// Exportar definición de la tabla Quiz
exports.Quiz = Quiz;

// sequelize.sync() crea e inicializa la tabla de preguntas en la DB
sequelize.sync().success(function(){
  Quiz.count().success(function(count) {
    if (count === 0) { // La tabla sólo se incializa si está vacía
      Quiz.create({
        pregunta: "Capital de Italia",
        respuesta: "Roma"
      }).success(function(){ 
          Quiz.create({
            pregunta: "Capital de Portugal",
            respuesta: "Lisboa"
          }).success(function(){
            console.log("Database created");
          });
      })
    }
  });
});
