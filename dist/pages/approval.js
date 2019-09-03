'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '表单页'
    }, _this.components = {}, _this.mixins = [], _this.data = {
      apForm: {},
      pass: false,
      notPass: false,
      todo: false

    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        var data = {
          auditorId: _wepy2.default.$instance.globalData.userInfo,
          eventId: e.detail.value.eventId,
          result: e.detail.value.apResult,
          remarks: e.detail.value.apCommentv
        };
        (0, _api.performApproval)(data);
        console.log('form发生了submit事件，携带数据为：', e.detail.value, data);
      },
      radiochange: function radiochange(e) {
        console.log('form发生了radio事件，携带数据为：', e.detail.value);
      },
      click: function click(value) {
        console.log(111, value);
        _wepy2.default.navigateTo({
          url: '/pages/bill?billNo=' + value
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getBill',
    value: function getBill(e) {
      console.log(111, e);
    }
  }, {
    key: 'getForm',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var obj;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getApForm)(data);

              case 2:
                obj = _context.sent;


                console.log(obj);
                // this.stepForm.percent=this.stepForm.sortNo+'/'+this.stepForm.stepCount
                obj.event.createDate = (0, _api.changeTime)(obj.event.createDate);
                obj.currentStep.percent = obj.currentStep.sortNo + '/' + obj.currentStep.stepCount;
                this.apForm = obj;
                _context.t0 = obj.stepStaff.apResult;
                _context.next = _context.t0 === "3" ? 10 : _context.t0 === "1" ? 13 : _context.t0 === "4" ? 16 : 19;
                break;

              case 10:
                this.pass = true;
                obj.stepStaff.apResult = "pass";
                return _context.abrupt('break', 19);

              case 13:
                this.todo = true;
                obj.stepStaff.apResult = "todo";
                return _context.abrupt('break', 19);

              case 16:
                this.notPass = true;
                obj.stepStaff.apResult = "notPass";
                return _context.abrupt('break', 19);

              case 19:
                this.$apply();

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getForm(_x) {
        return _ref2.apply(this, arguments);
      }

      return getForm;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      // 登录时调试使用
      var req = {
        "queryId": option.stepStaffId,
        "queryMethod": "stepStaff"
        // 单页面调试使用
        // let req = {
        //   "queryId":58033,
        //   "queryMethod":"stepStaff"
        // }
      };console.log(_wepy2.default.$instance.globalData.userInfo);
      console.log(option);

      this.getForm(req);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/approval'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmFsLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwiYXBGb3JtIiwicGFzcyIsIm5vdFBhc3MiLCJ0b2RvIiwibWV0aG9kcyIsImZvcm1TdWJtaXQiLCJlIiwiYXVkaXRvcklkIiwid2VweSIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsImV2ZW50SWQiLCJkZXRhaWwiLCJ2YWx1ZSIsInJlc3VsdCIsImFwUmVzdWx0IiwicmVtYXJrcyIsImFwQ29tbWVudHYiLCJjb25zb2xlIiwibG9nIiwicmFkaW9jaGFuZ2UiLCJjbGljayIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJvYmoiLCJldmVudCIsImNyZWF0ZURhdGUiLCJjdXJyZW50U3RlcCIsInBlcmNlbnQiLCJzb3J0Tm8iLCJzdGVwQ291bnQiLCJzdGVwU3RhZmYiLCIkYXBwbHkiLCJvcHRpb24iLCJyZXEiLCJzdGVwU3RhZmZJZCIsImdldEZvcm0iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBSWJDLE0sR0FBUyxFLFFBRVRDLEksR0FBTztBQUNMQyxjQUFPLEVBREY7QUFFTEMsWUFBSyxLQUZBO0FBR0xDLGVBQVEsS0FISDtBQUlMQyxZQUFLOztBQUpBLEssUUFRUEMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFTQyxDQUFULEVBQVk7QUFDdEIsWUFBSVAsT0FBTTtBQUNSUSxxQkFBVUMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCQyxRQUQ1QjtBQUVSQyxtQkFBUU4sRUFBRU8sTUFBRixDQUFTQyxLQUFULENBQWVGLE9BRmY7QUFHUkcsa0JBQVFULEVBQUVPLE1BQUYsQ0FBU0MsS0FBVCxDQUFlRSxRQUhmO0FBSVJDLG1CQUFRWCxFQUFFTyxNQUFGLENBQVNDLEtBQVQsQ0FBZUk7QUFKZixTQUFWO0FBTUEsa0NBQWdCbkIsSUFBaEI7QUFDQW9CLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NkLEVBQUVPLE1BQUYsQ0FBU0MsS0FBL0MsRUFBcURmLElBQXJEO0FBQ0QsT0FWTztBQVdSc0IsbUJBQWEscUJBQVVmLENBQVYsRUFBYTtBQUN4QmEsZ0JBQVFDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ2QsRUFBRU8sTUFBRixDQUFTQyxLQUE5QztBQUNELE9BYk87QUFjUlEsV0FkUSxpQkFjRlIsS0FkRSxFQWNJO0FBQ1ZLLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQk4sS0FBaEI7QUFDQU4sdUJBQUtlLFVBQUwsQ0FBZ0I7QUFDZEMsdUNBQTJCVjtBQURiLFNBQWhCO0FBSUQ7QUFwQk8sSyxRQW1EVlcsTSxHQUFTLEU7Ozs7OzRCQTdCRG5CLEMsRUFBRTtBQUNSYSxjQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQmQsQ0FBaEI7QUFFRDs7OzsyRkFDY1AsSTs7Ozs7Ozt1QkFDRyxvQkFBVUEsSUFBVixDOzs7QUFBWjJCLG1COzs7QUFFSlAsd0JBQVFDLEdBQVIsQ0FBWU0sR0FBWjtBQUNBO0FBQ0FBLG9CQUFJQyxLQUFKLENBQVVDLFVBQVYsR0FBcUIscUJBQVdGLElBQUlDLEtBQUosQ0FBVUMsVUFBckIsQ0FBckI7QUFDQUYsb0JBQUlHLFdBQUosQ0FBZ0JDLE9BQWhCLEdBQXdCSixJQUFJRyxXQUFKLENBQWdCRSxNQUFoQixHQUF1QixHQUF2QixHQUEyQkwsSUFBSUcsV0FBSixDQUFnQkcsU0FBbkU7QUFDQSxxQkFBS2hDLE1BQUwsR0FBYTBCLEdBQWI7OEJBQ1FBLElBQUlPLFNBQUosQ0FBY2pCLFE7Z0RBQ2YsRyx3QkFJQSxHLHdCQUlBLEc7Ozs7QUFQRCxxQkFBS2YsSUFBTCxHQUFVLElBQVY7QUFDQXlCLG9CQUFJTyxTQUFKLENBQWNqQixRQUFkLEdBQXVCLE1BQXZCOzs7O0FBR0EscUJBQUtiLElBQUwsR0FBVSxJQUFWO0FBQ0F1QixvQkFBSU8sU0FBSixDQUFjakIsUUFBZCxHQUF1QixNQUF2Qjs7OztBQUdBLHFCQUFLZCxPQUFMLEdBQWEsSUFBYjtBQUNBd0Isb0JBQUlPLFNBQUosQ0FBY2pCLFFBQWQsR0FBdUIsU0FBdkI7Ozs7QUFHTixxQkFBS2tCLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFPS0MsTSxFQUFRO0FBQ2I7QUFDQSxVQUFJQyxNQUFNO0FBQ1IsbUJBQVVELE9BQU9FLFdBRFQ7QUFFUix1QkFBYztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUlUsT0FBVixDQVNBbEIsUUFBUUMsR0FBUixDQUFZWixlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJDLFFBQXRDO0FBQ0FRLGNBQVFDLEdBQVIsQ0FBWWUsTUFBWjs7QUFFQSxXQUFLRyxPQUFMLENBQWFGLEdBQWI7QUFDRDs7OztFQXhGZ0M1QixlQUFLK0IsSTs7a0JBQW5CN0MsSyIsImZpbGUiOiJhcHByb3ZhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQge2dldEFwRm9ybSxjaGFuZ2VUaW1lLHBlcmZvcm1BcHByb3ZhbH0gZnJvbSAnLi4vYXBpL2FwaSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfooajljZXpobUnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGFwRm9ybTp7fSxcbiAgICAgIHBhc3M6ZmFsc2UsXG4gICAgICBub3RQYXNzOmZhbHNlLFxuICAgICAgdG9kbzpmYWxzZVxuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGZvcm1TdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IGRhdGEgPXtcbiAgICAgICAgICBhdWRpdG9ySWQ6d2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgICBldmVudElkOmUuZGV0YWlsLnZhbHVlLmV2ZW50SWQsXG4gICAgICAgICAgcmVzdWx0OiBlLmRldGFpbC52YWx1ZS5hcFJlc3VsdCxcbiAgICAgICAgICByZW1hcmtzOmUuZGV0YWlsLnZhbHVlLmFwQ29tbWVudHZcbiAgICAgICAgfVxuICAgICAgICBwZXJmb3JtQXBwcm92YWwoZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSxkYXRhKVxuICAgICAgfSxcbiAgICAgIHJhZGlvY2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJhZGlv5LqL5Lu277yM5pC65bim5pWw5o2u5Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICB9LFxuICAgICAgY2xpY2sodmFsdWUpe1xuICAgICAgICBjb25zb2xlLmxvZygxMTEsdmFsdWUpO1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogYC9wYWdlcy9iaWxsP2JpbGxObz0ke3ZhbHVlfWBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIGdldEJpbGwoZSl7XG4gICAgICBjb25zb2xlLmxvZygxMTEsZSk7XG4gICAgICBcbiAgICB9XG4gICAgYXN5bmMgZ2V0Rm9ybSAoZGF0YSl7XG4gICAgICBsZXQgb2JqID0gYXdhaXQgZ2V0QXBGb3JtKGRhdGEpXG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgICAvLyB0aGlzLnN0ZXBGb3JtLnBlcmNlbnQ9dGhpcy5zdGVwRm9ybS5zb3J0Tm8rJy8nK3RoaXMuc3RlcEZvcm0uc3RlcENvdW50XG4gICAgICBvYmouZXZlbnQuY3JlYXRlRGF0ZT1jaGFuZ2VUaW1lKG9iai5ldmVudC5jcmVhdGVEYXRlKVxuICAgICAgb2JqLmN1cnJlbnRTdGVwLnBlcmNlbnQ9b2JqLmN1cnJlbnRTdGVwLnNvcnRObysnLycrb2JqLmN1cnJlbnRTdGVwLnN0ZXBDb3VudFxuICAgICAgdGhpcy5hcEZvcm0gPW9ialxuICAgICAgc3dpdGNoIChvYmouc3RlcFN0YWZmLmFwUmVzdWx0KSB7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICB0aGlzLnBhc3M9dHJ1ZVxuICAgICAgICAgICAgb2JqLnN0ZXBTdGFmZi5hcFJlc3VsdD1cInBhc3NcIlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgdGhpcy50b2RvPXRydWVcbiAgICAgICAgICAgIG9iai5zdGVwU3RhZmYuYXBSZXN1bHQ9XCJ0b2RvXCJcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHRoaXMubm90UGFzcz10cnVlXG4gICAgICAgICAgICBvYmouc3RlcFN0YWZmLmFwUmVzdWx0PVwibm90UGFzc1wiXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICBcbiAgICB9XG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKG9wdGlvbikge1xuICAgICAgLy8g55m75b2V5pe26LCD6K+V5L2/55SoXG4gICAgICBsZXQgcmVxID0ge1xuICAgICAgICBcInF1ZXJ5SWRcIjpvcHRpb24uc3RlcFN0YWZmSWQsXG4gICAgICAgIFwicXVlcnlNZXRob2RcIjpcInN0ZXBTdGFmZlwiXG4gICAgICB9XG4gICAgICAvLyDljZXpobXpnaLosIPor5Xkvb/nlKhcbiAgICAgIC8vIGxldCByZXEgPSB7XG4gICAgICAvLyAgIFwicXVlcnlJZFwiOjU4MDMzLFxuICAgICAgLy8gICBcInF1ZXJ5TWV0aG9kXCI6XCJzdGVwU3RhZmZcIlxuICAgICAgLy8gfVxuICAgICAgY29uc29sZS5sb2cod2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS51c2VySW5mbyk7XG4gICAgICBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgXG4gICAgICB0aGlzLmdldEZvcm0ocmVxKVxuICAgIH1cbiAgfVxuIl19