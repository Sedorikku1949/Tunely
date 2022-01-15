module.exports.exec = function(path, req, res, next) {
  res.status(200).sendFile(absolutePath+'/App/page.html');
}

module.exports.path = "/app";
module.exports.method = "GET";