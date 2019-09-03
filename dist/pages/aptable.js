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
            navigationBarTitleText: '表格页面'
        }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:tableThemes.sync": "themeArr", "v-bind:tableItems.sync": "eventTab" } }, _this.$events = {}, _this.components = {
            tab: _tableTpl2.default
        }, _this.mixins = [], _this.data = {
            themeArr: { eventId: '编号', eventName: '审批事件名' },
            eventTab: [],
            index: undefined,
            userId: undefined,
            objectArray: [{
                id: 'all',
                status: 'all',
                name: '全部'
            }, {
                id: 'done',
                status: 'done',
                name: '已执行'
            }, {
                id: 'todo',
                status: 'todo',
                name: '未执行'
            }],
            haveData: true
        }, _this.events = {
            'childFn': function childFn(number, $event) {
                console.log(number);
                _wepy2.default.navigateTo({
                    url: '/pages/approval?stepStaffId=' + number
                });
                console.log(_this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
            }
        }, _this.methods = {
            // 测试invoke
            parentFn: function parentFn(e) {
                // this.$invoke(Table, tapCilck());
                console.log('parent received emit event, number is: ' + e);
            },

            // 删减table内容
            cutTable: function cutTable(table) {
                this.eventTab = [];
                for (var index = 0; index < table.length; index++) {
                    this.eventTab.push({ stepStaffId: table[index].stepStaffId, eventName: table[index].eventName });
                }
                return this.eventTab;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // eventCreatorList: [{…}]
    // eventId: "58017"
    // eventName: "采购申请立项[PA000000014]的审批事件1"
    // stepId: "58018"
    // stepName: "阶段1"
    // stepStaffId: "58019"


    _createClass(Index, [{
        key: 'checkHaveData',

        //判断是否有数据
        value: function checkHaveData() {
            if (this.eventTab.length == 0) {
                this.haveData = true;
            } else {
                this.haveData = false;
            }
        }
    }, {
        key: 'bindPickerChange',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var status, searchinfo, table, index;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // console.log(e);
                                // console.log('picker发送选择改变，索引值为', e.detail.value)
                                // console.log("选中的id值:"+e.target.dataset.id)
                                this.setData({
                                    index: e.detail.value
                                });
                                status = '';

                                if (e.detail.value == 0) {
                                    status = "all";
                                } else if (e.detail.value == 1) {
                                    status = "done";
                                } else if (e.detail.value == 2) {
                                    status = "todo";
                                }
                                searchinfo = {
                                    userId: "101",
                                    status: status
                                    // this.eventTab =await getApTable(searchinfo)
                                };
                                _context.next = 6;
                                return (0, _api.getApTable)(searchinfo);

                            case 6:
                                table = _context.sent;

                                this.eventTab = [];
                                for (index = 0; index < table.length; index++) {
                                    this.eventTab.push({ stepStaffId: table[index].stepStaffId, eventName: table[index].eventName });
                                }

                                this.$apply();

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function bindPickerChange(_x) {
                return _ref2.apply(this, arguments);
            }

            return bindPickerChange;
        }()
    }, {
        key: 'loadTable',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
                var table, index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return (0, _api.getApTable)(data);

                            case 2:
                                table = _context2.sent;

                                this.eventTab = [];
                                for (index = 0; index < table.length; index++) {
                                    this.eventTab.push({ stepStaffId: table[index].stepStaffId, eventName: table[index].eventName });
                                }
                                _context2.next = 7;
                                return this.checkHaveData();

                            case 7:
                                this.$apply();

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function loadTable(_x2) {
                return _ref3.apply(this, arguments);
            }

            return loadTable;
        }()
    }, {
        key: 'onLoad',
        value: function onLoad() {
            //登录后使用
            //    if (wepy.$instance.globalData.userInfo) {
            //         let redata =  {
            //         "userId":wepy.$instance.globalData.userInfo,
            //         "status":"done"
            //         }
            //         this.loadTable(redata)
            //     }else{
            //         wepy.showToast({
            //         title: '请先登录',
            //         icon: 'none',
            //         duration: 2000
            //       })
            //       wepy.navigateTo({
            //           url: '/pages/login'
            //       })
            //     }

            // aptable单页面调试时使用
            var redata = {
                "userId": "101",
                "status": "all"
            };
            this.loadTable(redata);
            console.log('onload');
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/aptable'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwdGFibGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwiVGFibGUiLCJtaXhpbnMiLCJkYXRhIiwidGhlbWVBcnIiLCJldmVudElkIiwiZXZlbnROYW1lIiwiZXZlbnRUYWIiLCJpbmRleCIsInVuZGVmaW5lZCIsInVzZXJJZCIsIm9iamVjdEFycmF5IiwiaWQiLCJzdGF0dXMiLCJuYW1lIiwiaGF2ZURhdGEiLCJldmVudHMiLCJudW1iZXIiLCIkZXZlbnQiLCJjb25zb2xlIiwibG9nIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCIkbmFtZSIsInNvdXJjZSIsIm1ldGhvZHMiLCJwYXJlbnRGbiIsImUiLCJjdXRUYWJsZSIsInRhYmxlIiwibGVuZ3RoIiwicHVzaCIsInN0ZXBTdGFmZklkIiwic2V0RGF0YSIsImRldGFpbCIsInZhbHVlIiwic2VhcmNoaW5mbyIsIiRhcHBseSIsImNoZWNrSGF2ZURhdGEiLCJyZWRhdGEiLCJsb2FkVGFibGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsT0FBTSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDJCQUEwQixVQUE3QyxFQUF3RCwwQkFBeUIsVUFBakYsRUFBUCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOQyxpQkFBSUM7QUFERSxTLFFBSVZDLE0sR0FBUyxFLFFBT1RDLEksR0FBTztBQUNIQyxzQkFBVSxFQUFDQyxTQUFRLElBQVQsRUFBZUMsV0FBVyxPQUExQixFQURQO0FBRUhDLHNCQUFTLEVBRk47QUFHSEMsbUJBQU1D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LEM7OztBQUFkMkIscUM7O0FBQ0oscUNBQUt2QixRQUFMLEdBQWMsRUFBZDtBQUNBLHFDQUFTQyxLQUFULEdBQWlCLENBQWpCLEVBQW9CQSxRQUFRc0IsTUFBTUMsTUFBbEMsRUFBMEN2QixPQUExQyxFQUFtRDtBQUMvQyx5Q0FBS0QsUUFBTCxDQUFjeUIsSUFBZCxDQUFtQixFQUFDQyxhQUFZSCxNQUFNdEIsS0FBTixFQUFheUIsV0FBMUIsRUFBc0MzQixXQUFVd0IsTUFBTXRCLEtBQU4sRUFBYUYsU0FBN0QsRUFBbkI7QUFDSDs7dUNBQ0ssS0FBS2lDLGFBQUwsRTs7O0FBQ04scUNBQUtELE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHSztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUk7QUFDQSxnQkFBSUUsU0FBUTtBQUNmLDBCQUFTLEtBRE07QUFFZiwwQkFBUztBQUZNLGFBQVo7QUFJQSxpQkFBS0MsU0FBTCxDQUFlRCxNQUFmO0FBQ0RyQixvQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRjs7OztFQTVJZ0NDLGVBQUtxQixJOztrQkFBbkJqRCxLIiwiZmlsZSI6ImFwdGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgZ2V0VGFibGUsZ2V0QXBUYWJsZSB9IGZyb20gXCIuLi9hcGkvYXBpXCI7XG4gIGltcG9ydCBUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlVHBsJ1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ihqOagvOmhtemdoidcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGFibGVUaGVtZXMuc3luY1wiOlwidGhlbWVBcnJcIixcInYtYmluZDp0YWJsZUl0ZW1zLnN5bmNcIjpcImV2ZW50VGFiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgdGFiOlRhYmxlXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cbi8vIGV2ZW50Q3JlYXRvckxpc3Q6IFt74oCmfV1cbi8vIGV2ZW50SWQ6IFwiNTgwMTdcIlxuLy8gZXZlbnROYW1lOiBcIumHh+i0reeUs+ivt+eri+mhuVtQQTAwMDAwMDAxNF3nmoTlrqHmibnkuovku7YxXCJcbi8vIHN0ZXBJZDogXCI1ODAxOFwiXG4vLyBzdGVwTmFtZTogXCLpmLbmrrUxXCJcbi8vIHN0ZXBTdGFmZklkOiBcIjU4MDE5XCJcbiAgICBkYXRhID0ge1xuICAgICAgICB0aGVtZUFycjoge2V2ZW50SWQ6J+e8luWPtycsIGV2ZW50TmFtZTogJ+WuoeaJueS6i+S7tuWQjSd9LCAgIFxuICAgICAgICBldmVudFRhYjpbXSxcbiAgICAgICAgaW5kZXg6dW5kZWZpbmVkLFxuICAgICAgICB1c2VySWQ6dW5kZWZpbmVkLFxuICAgICAgICBvYmplY3RBcnJheTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdhbGwnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6J2FsbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICflhajpg6gnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAnZG9uZScsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czonZG9uZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICflt7LmiafooYwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAndG9kbycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czondG9kbycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmnKrmiafooYwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBdLCBcbiAgICAgICAgaGF2ZURhdGE6dHJ1ZSxcbiAgICB9XG4gICAgZXZlbnRzPXtcbiAgICAgICAgJ2NoaWxkRm4nOiAobnVtYmVyLCRldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobnVtYmVyKVxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvYXBwcm92YWw/c3RlcFN0YWZmSWQ9JHtudW1iZXJ9YCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1ldGhvZHMgPSB7ICBcbiAgICAgICAgLy8g5rWL6K+VaW52b2tlXG4gICAgICAgIHBhcmVudEZuIChlKSB7XG4gICAgICAgICAgICAvLyB0aGlzLiRpbnZva2UoVGFibGUsIHRhcENpbGNrKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcmVudCByZWNlaXZlZCBlbWl0IGV2ZW50LCBudW1iZXIgaXM6ICcgKyBlKVxuICAgICAgICB9LFxuICAgICAgICAvLyDliKDlh490YWJsZeWGheWuuVxuICAgICAgICBjdXRUYWJsZSAodGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYWI9W11cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YWJsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50VGFiLnB1c2goe3N0ZXBTdGFmZklkOnRhYmxlW2luZGV4XS5zdGVwU3RhZmZJZCxldmVudE5hbWU6dGFibGVbaW5kZXhdLmV2ZW50TmFtZSx9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRUYWJcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgfVxuICAgIC8v5Yik5pat5piv5ZCm5pyJ5pWw5o2uXG4gICAgY2hlY2tIYXZlRGF0YSgpIHsgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5ldmVudFRhYi5sZW5ndGg9PTApIHtcbiAgICAgICAgICAgIHRoaXMuaGF2ZURhdGE9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGF2ZURhdGE9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgYmluZFBpY2tlckNoYW5nZShlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM57Si5byV5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6YCJ5Lit55qEaWTlgLw6XCIrZS50YXJnZXQuZGF0YXNldC5pZClcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGluZGV4OiBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc3RhdHVzPScnXG4gICAgICAgIGlmIChlLmRldGFpbC52YWx1ZT09MCkge1xuICAgICAgICAgICAgc3RhdHVzPVwiYWxsXCJcbiAgICAgICAgfWVsc2UgaWYgKGUuZGV0YWlsLnZhbHVlPT0xKSB7XG4gICAgICAgICAgICBzdGF0dXM9XCJkb25lXCJcbiAgICAgICAgfWVsc2UgaWYgKGUuZGV0YWlsLnZhbHVlPT0yKSB7XG4gICAgICAgICAgICBzdGF0dXM9XCJ0b2RvXCJcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VhcmNoaW5mbyA9e1xuICAgICAgICB1c2VySWQ6XCIxMDFcIixcbiAgICAgICAgc3RhdHVzOnN0YXR1c1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZXZlbnRUYWIgPWF3YWl0IGdldEFwVGFibGUoc2VhcmNoaW5mbylcbiAgICAgICAgbGV0IHRhYmxlID0gYXdhaXQgZ2V0QXBUYWJsZShzZWFyY2hpbmZvKVxuICAgICAgICB0aGlzLmV2ZW50VGFiPVtdXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YWJsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYWIucHVzaCh7c3RlcFN0YWZmSWQ6dGFibGVbaW5kZXhdLnN0ZXBTdGFmZklkLGV2ZW50TmFtZTp0YWJsZVtpbmRleF0uZXZlbnROYW1lLH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG4gICAgYXN5bmMgbG9hZFRhYmxlIChkYXRhKXtcbiAgICAgICAgbGV0IHRhYmxlID0gYXdhaXQgZ2V0QXBUYWJsZShkYXRhKVxuICAgICAgICB0aGlzLmV2ZW50VGFiPVtdXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YWJsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUYWIucHVzaCh7c3RlcFN0YWZmSWQ6dGFibGVbaW5kZXhdLnN0ZXBTdGFmZklkLGV2ZW50TmFtZTp0YWJsZVtpbmRleF0uZXZlbnROYW1lLH0pXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5jaGVja0hhdmVEYXRhKClcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAvL+eZu+W9leWQjuS9v+eUqFxuICAgIC8vICAgIGlmICh3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgLy8gICAgICAgICBsZXQgcmVkYXRhID0gIHtcbiAgICAvLyAgICAgICAgIFwidXNlcklkXCI6d2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAvLyAgICAgICAgIFwic3RhdHVzXCI6XCJkb25lXCJcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRoaXMubG9hZFRhYmxlKHJlZGF0YSlcbiAgICAvLyAgICAgfWVsc2V7XG4gICAgLy8gICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgLy8gICAgICAgICB0aXRsZTogJ+ivt+WFiOeZu+W9lScsXG4gICAgLy8gICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgLy8gICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH1cblxuICAgICAgICAvLyBhcHRhYmxl5Y2V6aG16Z2i6LCD6K+V5pe25L2/55SoXG4gICAgICAgIHZhciByZWRhdGE9IHtcbiAgICBcdFwidXNlcklkXCI6XCIxMDFcIixcbiAgICBcdFwic3RhdHVzXCI6XCJhbGxcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZFRhYmxlKHJlZGF0YSlcbiAgICAgICBjb25zb2xlLmxvZygnb25sb2FkJyk7IFxuICAgIH1cbiAgfVxuIl19