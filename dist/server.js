"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

const app = (0, _express.default)(); // const router = Router();

const port = process.env.PORT || 5000; // Middlewares

app.use(_express.default.json());
app.use(_express.default.static(path.join(__dirname, '../public')));
app.use(_express.default.urlencoded({
  extended: true
})); // app.use('/api', router);
// start server

app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
}).on('error', e => {
  console.error(e);
});
//# sourceMappingURL=server.js.map