"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageService = MessageService;
exports.PostMessageService = PostMessageService;

var _axios = _interopRequireDefault(require("axios"));

var _axiosInstance = require("../Config/axios-instance");

var _Urls = require("../Urls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MessageService(id) {
  var response;
  return regeneratorRuntime.async(function MessageService$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axiosInstance.isAuthInstance.get((0, _Urls.getMessageUrl)(id)));

        case 3:
          response = _context.sent;
          console.log("**********", response);
          return _context.abrupt("return", response);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log('resp errro====>', _context.t0);
          return _context.abrupt("return", _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
} ////////////////


function PostMessageService() {
  var response;
  return regeneratorRuntime.async(function PostMessageService$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axiosInstance.isAuthInstance.post((0, _Urls.PostMessageUrl)()));

        case 3:
          response = _context2.sent;
          console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", response);
          return _context2.abrupt("return", response);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log('resp errro====>', _context2.t0);
          return _context2.abrupt("return", _context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}