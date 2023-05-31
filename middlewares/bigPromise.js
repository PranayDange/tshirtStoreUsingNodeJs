//try catch async await use promise

module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next)).catch(next)



/*

module.exports = function(func) {
    return function(req, res, next) {
        try {
            return Promise.resolve(func(req, res, next));
        } catch (error) {
            next(error);
        }
    };
};
*/
