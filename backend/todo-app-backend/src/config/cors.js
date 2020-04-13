module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'DELETE, GET, POST, PUT, PATCH, OPTIONS')
    res.header('Access-Control-Allow-HEADERS', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
}