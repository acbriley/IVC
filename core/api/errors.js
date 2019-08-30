import { ValidationError, EmptyResultError} from "sequelize/lib/errors";

function errorHandler(err, req, res, next) {
    // TODO: log error
    if (err instanceof ValidationError) {
        return res.status(403).send(err.message);
    }
    else if (err instanceof EmptyResultError) {
        return res.status(404).send(err.message);
    }
    else {
        return res.status(500).send(err.message);
    }
  }

  module.exports = errorHandler