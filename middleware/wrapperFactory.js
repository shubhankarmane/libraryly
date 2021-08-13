function factory(handlerFunction) {
    return async(req, res, next) => {
        try {
            handlerFunction(req, res);
        }
        catch(err) {
            next(err);
        }
    }
}

module.exports = factory;