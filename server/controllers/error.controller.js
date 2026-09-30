const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'dev') {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    } else {
        res.status(err.statusCode).json({
            status: err.status,
            message: 'Server error',
        })
    }
};

module.exports = globalErrorHandler;