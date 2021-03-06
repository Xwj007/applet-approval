'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_wepy$component) {
    _inherits(List, _wepy$component);

    function List() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, List);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            tableThemes: {
                type: Object,
                default: {}
            },
            tableItems: {
                type: Array,
                default: [],
                twoWay: true
            }
        }, _this.data = {
            test: '123tablecompponent'
        }, _this.methods = {
            tapCilck: function tapCilck(value) {
                this.$emit('childFn', value.stepStaffId);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(List, [{
        key: 'click',
        value: function click(data) {
            console.log(data);
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return List;
}(_wepy2.default.component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlVHBsLmpzIl0sIm5hbWVzIjpbIkxpc3QiLCJwcm9wcyIsInRhYmxlVGhlbWVzIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJ0YWJsZUl0ZW1zIiwiQXJyYXkiLCJ0d29XYXkiLCJkYXRhIiwidGVzdCIsIm1ldGhvZHMiLCJ0YXBDaWxjayIsInZhbHVlIiwiJGVtaXQiLCJzdGVwU3RhZmZJZCIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBTTtBQUNGQyx5QkFBWTtBQUNSQyxzQkFBS0MsTUFERztBQUVSQyx5QkFBUztBQUZELGFBRFY7QUFLRkMsd0JBQVc7QUFDUEgsc0JBQUtJLEtBREU7QUFFUEYseUJBQVMsRUFGRjtBQUdQRyx3QkFBUTtBQUhEO0FBTFQsUyxRQVdOQyxJLEdBQU87QUFDTEMsa0JBQUs7QUFEQSxTLFFBSVBDLE8sR0FBVTtBQUNSQyxvQkFEUSxvQkFDRUMsS0FERixFQUNTO0FBQ2IscUJBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCRCxNQUFNRSxXQUE1QjtBQUNEO0FBSEssUzs7Ozs7OEJBS0pOLEksRUFBSztBQUNQTyxvQkFBUUMsR0FBUixDQUFZUixJQUFaO0FBQ0g7OztpQ0FDUyxDQUNUOzs7O0VBekIrQlMsZUFBS0MsUzs7a0JBQWxCbkIsSSIsImZpbGUiOiJ0YWJsZVRwbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzPXtcbiAgICAgICAgdGFibGVUaGVtZXM6e1xuICAgICAgICAgICAgdHlwZTpPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiB7fSBcbiAgICAgICAgfSxcbiAgICAgICAgdGFibGVJdGVtczp7XG4gICAgICAgICAgICB0eXBlOkFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgdGVzdDonMTIzdGFibGVjb21wcG9uZW50JyxcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwQ2lsY2sgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsIHZhbHVlLnN0ZXBTdGFmZklkKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsaWNrKGRhdGEpe1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG4gICAgb25Mb2FkICgpIHtcbiAgICB9XG4gIH1cbiJdfQ==