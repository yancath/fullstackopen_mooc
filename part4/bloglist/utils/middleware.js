const requestLogger = (req, res, next) => {
    console.log('Method:', req.method);
    console.log('Path:  ', req.path);
    console.log('Body:  ', req.body);
    console.log('---');
    next();
};

const unknownEndpoint = (req, res) => {
    res.status(404).send({ err: 'unknown endpoint' });
};

const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        return res.status(400).send({ err: 'malformatted id' });
    }
    else if (err.name === 'ValidationError') {
        return res.status(400).json({ err: err.message });
    }

    next(err);
};

module.exports = { requestLogger, unknownEndpoint, errorHandler }; 