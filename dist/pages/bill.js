'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var _tableTpl = require('./../components/tableTpl.js');

var _tableTpl2 = _interopRequireDefault(_tableTpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bill = function (_wepy$page) {
  _inherits(bill, _wepy$page);

  function bill() {
    var _ref, _billthemeArr;

    var _temp, _this, _ret;

    _classCallCheck(this, bill);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = bill.__proto__ || Object.getPrototypeOf(bill)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '单据'
    }, _this.components = {
      billTab: _tableTpl2.default
    }, _this.data = {
      billthemeArr: (_billthemeArr = {
        listType: "明细状态",
        item: "物料编码",
        itemName: "物料名称"
      }, _defineProperty(_billthemeArr, 'listType', '采购类型'), _defineProperty(_billthemeArr, 'quantity', "申请数量"), _defineProperty(_billthemeArr, 'unitName', "单位"), _defineProperty(_billthemeArr, 'unitType', "单位类型"), _defineProperty(_billthemeArr, 'warehouseName', "库房"), _defineProperty(_billthemeArr, 'projectName', '项目'), _defineProperty(_billthemeArr, 'planDate', "计划收货"), _defineProperty(_billthemeArr, 'itemCCGG', "物料规格"), _defineProperty(_billthemeArr, 'kltc', "工艺要求"), _defineProperty(_billthemeArr, 'comments', "备注"), _defineProperty(_billthemeArr, 'purchaseStaffName', "采购员"), _defineProperty(_billthemeArr, 'createDate', "创建日期"), _defineProperty(_billthemeArr, 'creatorName', "创建人"), _billthemeArr),
      billData: {},
      applyListList: []
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(bill, [{
    key: 'getApBill',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var obj, arr, x, _applyListList$push;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getBill)(data);

              case 2:
                obj = _context.sent;

                (0, _api.changNames)(obj, obj.applyListList);
                this.billData = obj;
                arr = obj.applyListList;

                this.applyListList = [];
                for (x = 0; x < arr.length; x++) {
                  this.applyListList.push((_applyListList$push = {
                    listType: arr[x].listType,
                    item: arr[x].item,
                    itemName: arr[x].itemName
                  }, _defineProperty(_applyListList$push, 'listType', arr[x].listType), _defineProperty(_applyListList$push, 'quantity', arr[x].quantity), _defineProperty(_applyListList$push, 'unitName', arr[x].unitName), _defineProperty(_applyListList$push, 'unitType', arr[x].unitType), _defineProperty(_applyListList$push, 'warehouseName', arr[x].warehouseName), _defineProperty(_applyListList$push, 'projectName', arr[x].projectName), _defineProperty(_applyListList$push, 'planDate', (0, _api.changeTime)(arr[x].planDate)), _defineProperty(_applyListList$push, 'itemCCGG', arr[x].itemCCGG), _defineProperty(_applyListList$push, 'kltc', arr[x].kltc), _defineProperty(_applyListList$push, 'comments', arr[x].comments), _defineProperty(_applyListList$push, 'purchaseStaffName', arr[x].purchaseStaffName), _defineProperty(_applyListList$push, 'createDate', (0, _api.changeTime)(arr[x].createDate)), _defineProperty(_applyListList$push, 'creatorName', arr[x].creatorName), _applyListList$push));
                }

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getApBill(_x) {
        return _ref2.apply(this, arguments);
      }

      return getApBill;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      // 登录测试使用
      // this.getApBill(option.billNo)
      // 单页面调试使用
      this.getApBill('PA000000014');
      console.log(option.billNo);
    }
  }]);

  return bill;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(bill , 'pages/bill'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwuanMiXSwibmFtZXMiOlsiYmlsbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiYmlsbFRhYiIsIlRhYmxlIiwiZGF0YSIsImJpbGx0aGVtZUFyciIsImxpc3RUeXBlIiwiaXRlbSIsIml0ZW1OYW1lIiwiYmlsbERhdGEiLCJhcHBseUxpc3RMaXN0IiwibWV0aG9kcyIsImV2ZW50cyIsIm9iaiIsImFyciIsIngiLCJsZW5ndGgiLCJwdXNoIiwicXVhbnRpdHkiLCJ1bml0TmFtZSIsInVuaXRUeXBlIiwid2FyZWhvdXNlTmFtZSIsInByb2plY3ROYW1lIiwicGxhbkRhdGUiLCJpdGVtQ0NHRyIsImtsdGMiLCJjb21tZW50cyIsInB1cmNoYXNlU3RhZmZOYW1lIiwiY3JlYXRlRGF0ZSIsImNyZWF0b3JOYW1lIiwib3B0aW9uIiwiZ2V0QXBCaWxsIiwiY29uc29sZSIsImxvZyIsImJpbGxObyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDakJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsZUFBUUM7QUFERyxLLFFBR2JDLEksR0FBTztBQUNMQztBQUNFQyxrQkFBVSxNQURaO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxrQkFBVTtBQUhaLG9EQUlXLE1BSlgsOENBS1ksTUFMWiw4Q0FNWSxJQU5aLDhDQU9ZLE1BUFosbURBUWlCLElBUmpCLGlEQVNjLElBVGQsOENBVVksTUFWWiw4Q0FXWSxNQVhaLDBDQVlPLE1BWlAsOENBYVcsSUFiWCx1REFjcUIsS0FkckIsZ0RBZWMsTUFmZCxpREFnQmUsS0FoQmYsaUJBREs7QUFtQkxDLGdCQUFTLEVBbkJKO0FBb0JMQyxxQkFBYztBQXBCVCxLLFFBc0JQQyxPLEdBQVMsRSxRQStCVEMsTSxHQUFTLEU7Ozs7OzsyRkE1QlFSLEk7Ozs7Ozs7O3VCQUNHLGtCQUFRQSxJQUFSLEM7OztBQUFaUyxtQjs7QUFDSixxQ0FBV0EsR0FBWCxFQUFlQSxJQUFJSCxhQUFuQjtBQUNBLHFCQUFLRCxRQUFMLEdBQWNJLEdBQWQ7QUFDSUMsbUIsR0FBS0QsSUFBSUgsYTs7QUFDYixxQkFBS0EsYUFBTCxHQUFtQixFQUFuQjtBQUNBLHFCQUFTSyxDQUFULEdBQWEsQ0FBYixFQUFnQkEsSUFBSUQsSUFBSUUsTUFBeEIsRUFBZ0NELEdBQWhDLEVBQXFDO0FBQ25DLHVCQUFLTCxhQUFMLENBQW1CTyxJQUFuQjtBQUNFWCw4QkFBU1EsSUFBSUMsQ0FBSixFQUFPVCxRQURsQjtBQUVFQywwQkFBS08sSUFBSUMsQ0FBSixFQUFPUixJQUZkO0FBR0VDLDhCQUFTTSxJQUFJQyxDQUFKLEVBQU9QO0FBSGxCLHNFQUlXTSxJQUFJQyxDQUFKLEVBQU9ULFFBSmxCLG9EQUtXUSxJQUFJQyxDQUFKLEVBQU9HLFFBTGxCLG9EQU1XSixJQUFJQyxDQUFKLEVBQU9JLFFBTmxCLG9EQU9XTCxJQUFJQyxDQUFKLEVBQU9LLFFBUGxCLHlEQVFnQk4sSUFBSUMsQ0FBSixFQUFPTSxhQVJ2Qix1REFTY1AsSUFBSUMsQ0FBSixFQUFPTyxXQVRyQixvREFVVyxxQkFBV1IsSUFBSUMsQ0FBSixFQUFPUSxRQUFsQixDQVZYLG9EQVdXVCxJQUFJQyxDQUFKLEVBQU9TLFFBWGxCLGdEQVlPVixJQUFJQyxDQUFKLEVBQU9VLElBWmQsb0RBYVdYLElBQUlDLENBQUosRUFBT1csUUFibEIsNkRBY29CWixJQUFJQyxDQUFKLEVBQU9ZLGlCQWQzQixzREFlYSxxQkFBV2IsSUFBSUMsQ0FBSixFQUFPYSxVQUFsQixDQWZiLHVEQWdCY2QsSUFBSUMsQ0FBSixFQUFPYyxXQWhCckI7QUFtQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFLR0MsTSxFQUFPO0FBQ2I7QUFDRTtBQUNGO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLGFBQWY7QUFDRUMsY0FBUUMsR0FBUixDQUFZSCxPQUFPSSxNQUFuQjtBQUNIOzs7O0VBckU2QkMsZUFBS0MsSTs7a0JBQWxCdEMsSSIsImZpbGUiOiJiaWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgZ2V0QmlsbCxjaGFuZ2VUaW1lLGNoYW5nTmFtZXMgfSBmcm9tIFwiLi4vYXBpL2FwaVwiO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGVUcGwnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiaWxsIGV4dGVuZHMgd2VweS5wYWdle1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljZXmja4nXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBiaWxsVGFiOlRhYmxlXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBiaWxsdGhlbWVBcnI6e1xuICAgICAgICBsaXN0VHlwZTogXCLmmI7nu4bnirbmgIFcIixcbiAgICAgICAgaXRlbTogXCLnianmlpnnvJbnoIFcIixcbiAgICAgICAgaXRlbU5hbWU6IFwi54mp5paZ5ZCN56ewXCIsXG4gICAgICAgIGxpc3RUeXBlOifph4fotK3nsbvlnosnLFxuICAgICAgICBxdWFudGl0eTogXCLnlLPor7fmlbDph49cIixcbiAgICAgICAgdW5pdE5hbWU6IFwi5Y2V5L2NXCIsXG4gICAgICAgIHVuaXRUeXBlOiBcIuWNleS9jeexu+Wei1wiLFxuICAgICAgICB3YXJlaG91c2VOYW1lOiBcIuW6k+aIv1wiLFxuICAgICAgICBwcm9qZWN0TmFtZTon6aG555uuJyxcbiAgICAgICAgcGxhbkRhdGU6IFwi6K6h5YiS5pS26LSnXCIsXG4gICAgICAgIGl0ZW1DQ0dHOiBcIueJqeaWmeinhOagvFwiLFxuICAgICAgICBrbHRjOlwi5bel6Im66KaB5rGCXCIsXG4gICAgICAgIGNvbW1lbnRzOlwi5aSH5rOoXCIsXG4gICAgICAgIHB1cmNoYXNlU3RhZmZOYW1lOiBcIumHh+i0reWRmFwiLFxuICAgICAgICBjcmVhdGVEYXRlOiBcIuWIm+W7uuaXpeacn1wiLFxuICAgICAgICBjcmVhdG9yTmFtZTogXCLliJvlu7rkurpcIlxuICAgICAgfSwgXG4gICAgICBiaWxsRGF0YTp7fSxcbiAgICAgIGFwcGx5TGlzdExpc3Q6W11cbiAgICB9XG4gICAgbWV0aG9kcyA9e1xuXG4gICAgfVxuICAgIGFzeW5jIGdldEFwQmlsbCAoZGF0YSl7XG4gICAgICAgIGxldCBvYmogPSBhd2FpdCBnZXRCaWxsKGRhdGEpXG4gICAgICAgIGNoYW5nTmFtZXMob2JqLG9iai5hcHBseUxpc3RMaXN0KVxuICAgICAgICB0aGlzLmJpbGxEYXRhPW9ialxuICAgICAgICB2YXIgYXJyID1vYmouYXBwbHlMaXN0TGlzdFxuICAgICAgICB0aGlzLmFwcGx5TGlzdExpc3Q9W11cbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBhcnIubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICB0aGlzLmFwcGx5TGlzdExpc3QucHVzaCh7XG4gICAgICAgICAgICBsaXN0VHlwZTphcnJbeF0ubGlzdFR5cGUsXG4gICAgICAgICAgICBpdGVtOmFyclt4XS5pdGVtLFxuICAgICAgICAgICAgaXRlbU5hbWU6YXJyW3hdLml0ZW1OYW1lLFxuICAgICAgICAgICAgbGlzdFR5cGU6YXJyW3hdLmxpc3RUeXBlLFxuICAgICAgICAgICAgcXVhbnRpdHk6YXJyW3hdLnF1YW50aXR5LFxuICAgICAgICAgICAgdW5pdE5hbWU6YXJyW3hdLnVuaXROYW1lLFxuICAgICAgICAgICAgdW5pdFR5cGU6YXJyW3hdLnVuaXRUeXBlLFxuICAgICAgICAgICAgd2FyZWhvdXNlTmFtZTphcnJbeF0ud2FyZWhvdXNlTmFtZSxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOmFyclt4XS5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHBsYW5EYXRlOmNoYW5nZVRpbWUoYXJyW3hdLnBsYW5EYXRlKSxcbiAgICAgICAgICAgIGl0ZW1DQ0dHOmFyclt4XS5pdGVtQ0NHRyxcbiAgICAgICAgICAgIGtsdGM6YXJyW3hdLmtsdGMsXG4gICAgICAgICAgICBjb21tZW50czphcnJbeF0uY29tbWVudHMsXG4gICAgICAgICAgICBwdXJjaGFzZVN0YWZmTmFtZTphcnJbeF0ucHVyY2hhc2VTdGFmZk5hbWUsXG4gICAgICAgICAgICBjcmVhdGVEYXRlOmNoYW5nZVRpbWUoYXJyW3hdLmNyZWF0ZURhdGUpLFxuICAgICAgICAgICAgY3JlYXRvck5hbWU6YXJyW3hdLmNyZWF0b3JOYW1lXG4gICAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cbiAgICBvbkxvYWQgKG9wdGlvbil7XG4gICAgICAvLyDnmbvlvZXmtYvor5Xkvb/nlKhcbiAgICAgICAgLy8gdGhpcy5nZXRBcEJpbGwob3B0aW9uLmJpbGxObylcbiAgICAgIC8vIOWNlemhtemdouiwg+ivleS9v+eUqFxuICAgICAgdGhpcy5nZXRBcEJpbGwoJ1BBMDAwMDAwMDE0JylcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW9uLmJpbGxObylcbiAgICB9XG59XG4iXX0=