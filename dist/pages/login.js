'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var login = function (_wepy$page) {
  _inherits(login, _wepy$page);

  function login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = login.__proto__ || Object.getPrototypeOf(login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      loginfo: {
        id: '',
        password: ''
      }
    }, _this.methods = {
      login: function login() {
        wx.request({
          url: 'http://139.199.126.58:9000/user/login',
          data: this.loginfo,
          // header: {
          //   "Content-Type": "application/x-www-form-urlencoded"
          // },
          method: 'POST',
          dataType: 'json',
          success: function success(res) {
            if (res.data.status == 1) {
              _wepy2.default.showToast({
                title: '登陆成功',
                icon: 'success',
                duration: 2000
              });
              var thist = this;
              _wepy2.default.$instance.globalData.userInfo = res.data.data.USERID;
              console.log(_wepy2.default.$instance.globalData);

              _wepy2.default.navigateTo({
                url: '/pages/aptable'
              });
            } else if (res.data.status == 0) {
              _wepy2.default.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 2000
              });
            }
          },
          fail: function fail(response) {
            console.log(response.errMsg);
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(login, [{
    key: 'accountId',
    value: function accountId(e) {
      // 原生方法
      // this.setData({
      //   account: e.detail.value
      // })
      //wepy方法
      this.loginfo.id = e.detail.value;
    }
  }, {
    key: 'pwd',
    value: function pwd(e) {
      this.loginfo.password = e.detail.value;
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwibG9naW5mbyIsImlkIiwicGFzc3dvcmQiLCJtZXRob2RzIiwid3giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzIiwid2VweSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwidGhpc3QiLCIkaW5zdGFuY2UiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJVU0VSSUQiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGVUbyIsIm1zZyIsImZhaWwiLCJyZXNwb25zZSIsImVyck1zZyIsImV2ZW50cyIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ0xDLDhCQUF3QjtBQURuQixLLFFBR1BDLFUsR0FBYSxFLFFBSWJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxlQUFRO0FBQ05DLFlBQUcsRUFERztBQUVOQyxrQkFBUztBQUZIO0FBREgsSyxRQU9QQyxPLEdBQVU7QUFDUFQsV0FETyxtQkFDQTtBQUNSVSxXQUFHQyxPQUFILENBQVc7QUFDWEMsZUFBSyx1Q0FETTtBQUVYUCxnQkFBTSxLQUFLQyxPQUZBO0FBR1g7QUFDQTtBQUNBO0FBQ0FPLGtCQUFRLE1BTkc7QUFPWEMsb0JBQVUsTUFQQztBQVFYQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFHQSxJQUFJWCxJQUFKLENBQVNZLE1BQVQsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDcEJDLDZCQUFLQyxTQUFMLENBQWU7QUFDYkMsdUJBQU8sTUFETTtBQUViQyxzQkFBTSxTQUZPO0FBR2JDLDBCQUFVO0FBSEcsZUFBZjtBQUtBLGtCQUFJQyxRQUFNLElBQVY7QUFDQUwsNkJBQUtNLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkMsUUFBMUIsR0FBcUNWLElBQUlYLElBQUosQ0FBU0EsSUFBVCxDQUFjc0IsTUFBbkQ7QUFDQUMsc0JBQVFDLEdBQVIsQ0FBWVgsZUFBS00sU0FBTCxDQUFlQyxVQUEzQjs7QUFFQVAsNkJBQUtZLFVBQUwsQ0FBZ0I7QUFDZGxCLHFCQUFLO0FBRFMsZUFBaEI7QUFHRCxhQWJELE1BYU8sSUFBSUksSUFBSVgsSUFBSixDQUFTWSxNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQy9CQyw2QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLHVCQUFPSixJQUFJWCxJQUFKLENBQVMwQixHQURIO0FBRWJWLHNCQUFNLE1BRk87QUFHYkMsMEJBQVU7QUFIRyxlQUFmO0FBS0Q7QUFDRixXQTdCVTtBQThCWFUsZ0JBQU0sY0FBVUMsUUFBVixFQUFvQjtBQUN4Qkwsb0JBQVFDLEdBQVIsQ0FBWUksU0FBU0MsTUFBckI7QUFDRDtBQWhDVSxTQUFYO0FBa0NEO0FBcENTLEssUUFrRFhDLE0sR0FBUyxFOzs7Ozs4QkFaRUMsQyxFQUFHO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQUs5QixPQUFMLENBQWFDLEVBQWIsR0FBZ0I2QixFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0Q7Ozt3QkFDR0YsQyxFQUFHO0FBQ0wsV0FBSzlCLE9BQUwsQ0FBYUUsUUFBYixHQUF1QjRCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBaEM7QUFDRDs7OzZCQUtRLENBQ1I7Ozs7RUF2RThCcEIsZUFBS3FCLEk7O2tCQUFuQnZDLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGxvZ2luZm86e1xuICAgICAgICBpZDonJyxcbiAgICAgICAgcGFzc3dvcmQ6JycsXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICBsb2dpbigpe1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTM5LjE5OS4xMjYuNTg6OTAwMC91c2VyL2xvZ2luJyxcbiAgICAgIGRhdGE6IHRoaXMubG9naW5mbyAsXG4gICAgICAvLyBoZWFkZXI6IHtcbiAgICAgIC8vICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgLy8gfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZihyZXMuZGF0YS5zdGF0dXM9PTEpe1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiAn55m76ZmG5oiQ5YqfJyxcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICB2YXIgdGhpc3Q9dGhpc1xuICAgICAgICAgIHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMuZGF0YS5kYXRhLlVTRVJJRFxuICAgICAgICAgIGNvbnNvbGUubG9nKHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEpO1xuICAgICAgICAgIFxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvYXB0YWJsZScsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5zdGF0dXMgPT0gMCkge1xuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiByZXMuZGF0YS5tc2csXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZXJyTXNnKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIH0gXG4gICAgfVxuICAgIGFjY291bnRJZChlKSB7XG4gICAgICAvLyDljp/nlJ/mlrnms5VcbiAgICAgIC8vIHRoaXMuc2V0RGF0YSh7XG4gICAgICAvLyAgIGFjY291bnQ6IGUuZGV0YWlsLnZhbHVlXG4gICAgICAvLyB9KVxuICAgICAgLy93ZXB55pa55rOVXG4gICAgICB0aGlzLmxvZ2luZm8uaWQ9ZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gICAgcHdkKGUpIHtcbiAgICAgIHRoaXMubG9naW5mby5wYXNzd29yZD0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gICBcbiAgIGV2ZW50cyA9IHtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxufVxuIl19