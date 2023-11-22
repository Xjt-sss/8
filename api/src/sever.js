require("express-asyc-errors");
const database = require("./database/sqlite");
const AppError = require("./utils/AppError");
const express = require('express');
const routes = require("./routes");
const app = express();
app.use(express.json());
app.use(routes);
database()

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      massege: error.massage
    });
  } 

  console.error(error);

  return response.status(500).json({
    status: "error",
    massage: 'Imternal server error',
  });
});

const PORT = 3443;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));