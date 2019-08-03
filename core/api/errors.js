import { ValidationError, EmptyResultError } from "sequelize/types/lib/errors";

function errorHandler(err, req, res, next) {
    // TODO: log error
    if (err instanceof ValidationError) {
        res.status(403).send(err);
    }
    else if (err instanceof EmptyResultError) {
        res.status(404).send(err);
    }
    else {
        res.status(500).send("oops");
    }
  }

  module.exports = errorHandler