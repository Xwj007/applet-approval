'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getApTable = getApTable;
exports.getApForm = getApForm;
exports.performApproval = performApproval;
exports.getBill = getBill;
exports.changeTime = changeTime;
exports.changNames = changNames;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 用户获取审批的事件表
 */
function getApTable(data) {
    return new Promise(function (resolve, reject) {
        _wepy2.default.request({
            url: 'http://139.199.126.58:9000/template/event/byStatus',
            data: data,
            method: 'POST'
        }).then(function (res) {
            if (res.data.status == 1) {
                resolve(res.data.data);
            } else if (res.data.status == 0) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'fail',
                    duration: 2000
                });
                resolve(res.data.msg);
            }
        }).catch(function (err) {
            wx.showToast({
                title: '请求出错',
                icon: 'none'
            });
        });
    });
}

/**
 * 
 * 根据stepStaffId获取审批表
 */
//@param {"queryId":"57703","queryMethod":"message"} data 
// import { resolve } from "dns";
function getApForm(data) {
    return new Promise(function (resolve, reject) {
        _wepy2.default.request({
            url: 'http://139.199.126.58:9000/user/event/detail',
            data: data,
            method: 'POST'
        }).then(function (res) {
            if (res.data.status == 1) {
                resolve(res.data.data);
            } else if (res.data.status == 0) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 2000
                });
                resolve(res.data.msg);
            }
        }).catch(function (err) {
            wx.showToast({
                title: '请求出错',
                icon: 'none'
            });
        });
    });
}

/**
 * 执行审批
 */

function performApproval(data) {
    return new Promise(function (resolve, reject) {
        _wepy2.default.request({
            url: 'http://139.199.126.58:9000/user/doApproval',
            method: 'POST',
            data: data
        }).then(function (res) {
            if (res.data.status == 1) {
                resolve(res.data.data);
            } else if (res.data.status == 0) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 2000
                });
                resolve(res.data.msg);
            }
        }).catch(function (err) {
            wx.showToast({
                title: '请求出错',
                icon: 'none'
            });
        });
    });
}
/**
 * 
 * 获取目标单据
 */
function getBill(data) {
    return new Promise(function (resolve, reject) {
        _wepy2.default.request({
            url: 'http://139.199.126.58:9000/user/getTargetBill/' + data,
            method: 'GET'
        }).then(function (res) {
            if (res.data.status == 1) {
                resolve(res.data.data);
            } else if (res.data.status == 0) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 2000
                });
                resolve(res.data.msg);
            }
        }).catch(function (err) {
            wx.showToast({
                title: '请求出错',
                icon: 'none'
            });
        });
    });
}

/**
 * 改变时间格式
 */
function changeTime(time) {
    var d = new Date(time);
    var times = d.getFullYear() + '-' + (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + '-' + (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) + ' ' + (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ':' + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + ':' + (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds());
    return times;
}
/**
 * 改变接收数据
 */
function changNames(value1, arr) {
    value1.createDate = changeTime(value1.createDate);
    value1.expirationDate = changeTime(value1.expirationDate);
    value1.planDate = changeTime(value1.planDate);
    switch (value1.status) {
        case "1":
            value1.status = '新建';
            break;
        case "2":
            value1.status = '提交预审核';
            break;
        case "3":
            value1.status = '预审核未通过';
            break;
        case "4":
            value1.status = '预审核通过';
            break;
        case "5":
            value1.status = '预立项';
            break;
        case "6":
            value1.status = '立项';
            break;
        case "7":
            value1.status = '提交审核';
            break;
        case "8":
            value1.status = '审核未通过';
            break;
        case "9":
            value1.status = ' 审核通过';
            break;
        case "10":
            value1.status = '已转出';
            break;
        case "11":
            value1.status = ' 中止';
            break;
    }
    switch (value1.applyType) {
        case "1":
            value1.applyType = '手动';
            break;
        case "2":
            value1.applyType = '自动';
            break;
    }
    for (var index = 0; index < arr.length; index++) {
        //1=采购，2=外协助，3=库存 unit_type
        switch (arr[index].listType) {
            case "1":
                arr[index].listType = '采购';
                break;
            case "2":
                arr[index].listType = '外协助';
                break;
            case "3":
                arr[index].listType = '库存';
                break;
        }
        switch (arr[index].unitType) {
            case "1":
                arr[index].unitType = '采购';
                break;
            case "2":
                arr[index].unitType = '库存';
                break;
        }
        switch (arr[index].listStatus) {
            case "1":
                arr[index].listStatus = '新建';
                break;
            case "2":
                arr[index].listStatus = '提交预审核';
                break;
            case "3":
                arr[index].listStatus = '预审核未通过';
                break;
            case "4":
                arr[index].listStatus = '预审核通过';
                break;
            case "5":
                arr[index].listStatus = '预立项';
                break;
            case "6":
                arr[index].listStatus = '立项';
                break;
            case "7":
                arr[index].listStatus = '提交审核';
                break;
            case "8":
                arr[index].listStatus = '审核未通过';
                break;
            case "9":
                arr[index].listStatus = ' 审核通过';
                break;
            case "10":
                arr[index].listStatus = '已转出';
                break;
            case "11":
                arr[index].listStatus = ' 中止';
                break;
        }
    }
    // console.log(value1.applyType)
    // this.billsTable=res.data.data.applyListList
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJnZXRBcFRhYmxlIiwiZ2V0QXBGb3JtIiwicGVyZm9ybUFwcHJvdmFsIiwiZ2V0QmlsbCIsImNoYW5nZVRpbWUiLCJjaGFuZ05hbWVzIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2VweSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm1zZyIsImljb24iLCJkdXJhdGlvbiIsImNhdGNoIiwidGltZSIsImQiLCJEYXRlIiwidGltZXMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJ2YWx1ZTEiLCJhcnIiLCJjcmVhdGVEYXRlIiwiZXhwaXJhdGlvbkRhdGUiLCJwbGFuRGF0ZSIsImFwcGx5VHlwZSIsImluZGV4IiwibGVuZ3RoIiwibGlzdFR5cGUiLCJ1bml0VHlwZSIsImxpc3RTdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBTWdCQSxVLEdBQUFBLFU7UUFnQ0FDLFMsR0FBQUEsUztRQThCQ0MsZSxHQUFBQSxlO1FBNkJEQyxPLEdBQUFBLE87UUE0QkFDLFUsR0FBQUEsVTtRQWFBQyxVLEdBQUFBLFU7O0FBekloQjs7Ozs7O0FBRUE7OztBQUdPLFNBQVNMLFVBQVQsQ0FBb0JNLElBQXBCLEVBQTBCO0FBQzdCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUNqQ0MsdUJBQUtDLE9BQUwsQ0FBYTtBQUNUQyxpQkFBSyxvREFESTtBQUVUTixrQkFBTUEsSUFGRztBQUdUTyxvQkFBUTtBQUhDLFNBQWIsRUFJR0MsSUFKSCxDQUlRLFVBQUNDLEdBQUQsRUFBTztBQUNYLGdCQUFJQSxJQUFJVCxJQUFKLENBQVNVLE1BQVQsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEJSLHdCQUFRTyxJQUFJ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LEtBQUosRUFBV0ksVUFBWCxHQUFzQixPQUF0QjtBQUNGO0FBQ0EsaUJBQUssR0FBTDtBQUNFVCxvQkFBSUssS0FBSixFQUFXSSxVQUFYLEdBQXNCLEtBQXRCO0FBQ0Y7QUFDQSxpQkFBSyxHQUFMO0FBQ0VULG9CQUFJSyxLQUFKLEVBQVdJLFVBQVgsR0FBc0IsSUFBdEI7QUFDRjtBQUNBLGlCQUFLLEdBQUw7QUFDRVQsb0JBQUlLLEtBQUosRUFBV0ksVUFBWCxHQUFzQixNQUF0QjtBQUNGO0FBQ0EsaUJBQUssR0FBTDtBQUNFVCxvQkFBSUssS0FBSixFQUFXSSxVQUFYLEdBQXNCLE9BQXRCO0FBQ0Y7QUFDQSxpQkFBSyxHQUFMO0FBQ0VULG9CQUFJSyxLQUFKLEVBQVdJLFVBQVgsR0FBc0IsT0FBdEI7QUFDRjtBQUNBLGlCQUFLLElBQUw7QUFDRVQsb0JBQUlLLEtBQUosRUFBV0ksVUFBWCxHQUFzQixLQUF0QjtBQUNGO0FBQ0EsaUJBQUssSUFBTDtBQUNFVCxvQkFBSUssS0FBSixFQUFXSSxVQUFYLEdBQXNCLEtBQXRCO0FBQ0Y7QUFqQ0Y7QUFtQ0Q7QUFDRDtBQUNBO0FBQ0QiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJkbnNcIjtcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbi8qKlxuICog55So5oi36I635Y+W5a6h5om555qE5LqL5Lu26KGoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcFRhYmxlKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cDovLzEzOS4xOTkuMTI2LjU4OjkwMDAvdGVtcGxhdGUvZXZlbnQvYnlTdGF0dXMnLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLCBcbiAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cz09MSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEuZGF0YSlcbiAgICAgICAgICAgIH1lbHNlIGlmIChyZXMuZGF0YS5zdGF0dXM9PTApIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmFpbCcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhLm1zZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35rGC5Ye66ZSZJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBcbn1cblxuLyoqXG4gKiBcbiAqIOagueaNrnN0ZXBTdGFmZklk6I635Y+W5a6h5om56KGoXG4gKi9cbi8vQHBhcmFtIHtcInF1ZXJ5SWRcIjpcIjU3NzAzXCIsXCJxdWVyeU1ldGhvZFwiOlwibWVzc2FnZVwifSBkYXRhIFxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwRm9ybShkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMzkuMTk5LjEyNi41ODo5MDAwL3VzZXIvZXZlbnQvZGV0YWlsJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywgXG4gICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXM9PTEpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICB9ZWxzZSBpZiAocmVzLmRhdGEuc3RhdHVzPT0wKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YS5tc2cpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+axguWHuumUmScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbi8qKlxuICog5omn6KGM5a6h5om5XG4gKi9cblxuIGV4cG9ydCBmdW5jdGlvbiBwZXJmb3JtQXBwcm92YWwoZGF0YSkge1xuICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICB1cmw6J2h0dHA6Ly8xMzkuMTk5LjEyNi41ODo5MDAwL3VzZXIvZG9BcHByb3ZhbCcsXG4gICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgICAgICAgICBkYXRhOmRhdGFcbiAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXM9PTEpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICB9ZWxzZSBpZiAocmVzLmRhdGEuc3RhdHVzPT0wKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YS5tc2cpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+axguWHuumUmScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICB9KVxuIH1cbi8qKlxuICogXG4gKiDojrflj5bnm67moIfljZXmja5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJpbGwoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTM5LjE5OS4xMjYuNTg6OTAwMC91c2VyL2dldFRhcmdldEJpbGwvJytkYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgXG4gICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXM9PTEpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICB9ZWxzZSBpZiAocmVzLmRhdGEuc3RhdHVzPT0wKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YS5tc2cpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+axguWHuumUmScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pICAgIFxufVxuXG4vKipcbiAqIOaUueWPmOaXtumXtOagvOW8j1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGltZSh0aW1lKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZSh0aW1lKTtcbiAgICB2YXIgdGltZXM9ZC5nZXRGdWxsWWVhcigpICsgJy0nIFxuICAgICsgKGQuZ2V0TW9udGgoKSArIDEgPCAxMCA/IFwiMFwiICsgKGQuZ2V0TW9udGgoKSArIDEpIDogZC5nZXRNb250aCgpICsgMSkgKyAnLScgXG4gICAgKyggZC5nZXREYXRlKCkgPDEwID8gXCIwXCIgK2QuZ2V0RGF0ZSgpOmQuZ2V0RGF0ZSgpKSArICcgJyBcbiAgICArIChkLmdldEhvdXJzKCkgPDEwID8gXCIwXCIgK2QuZ2V0SG91cnMoKTpkLmdldEhvdXJzKCkpICsgJzonIFxuICAgICsgKGQuZ2V0TWludXRlcygpPDEwID8gXCIwXCIgK2QuZ2V0TWludXRlcygpOmQuZ2V0TWludXRlcygpKSArICc6JyBcbiAgICArIChkLmdldFNlY29uZHMoKTwxMCA/IFwiMFwiICtkLmdldFNlY29uZHMoKTpkLmdldFNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHRpbWVzXG59XG4vKipcbiAqIOaUueWPmOaOpeaUtuaVsOaNrlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdOYW1lcyh2YWx1ZTEsYXJyKSB7XG4gICAgdmFsdWUxLmNyZWF0ZURhdGU9Y2hhbmdlVGltZSh2YWx1ZTEuY3JlYXRlRGF0ZSlcbiAgICB2YWx1ZTEuZXhwaXJhdGlvbkRhdGU9Y2hhbmdlVGltZSh2YWx1ZTEuZXhwaXJhdGlvbkRhdGUpXG4gICAgdmFsdWUxLnBsYW5EYXRlPWNoYW5nZVRpbWUodmFsdWUxLnBsYW5EYXRlKVxuICAgIHN3aXRjaCAodmFsdWUxLnN0YXR1cykge1xuICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICB2YWx1ZTEuc3RhdHVzPSfmlrDlu7onXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgdmFsdWUxLnN0YXR1cz0n5o+Q5Lqk6aKE5a6h5qC4J1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiM1wiOlxuICAgICAgICB2YWx1ZTEuc3RhdHVzPSfpooTlrqHmoLjmnKrpgJrov4cnXG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgIHZhbHVlMS5zdGF0dXM9J+mihOWuoeaguOmAmui/hydcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgdmFsdWUxLnN0YXR1cz0n6aKE56uL6aG5J1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiNlwiOlxuICAgICAgICB2YWx1ZTEuc3RhdHVzPSfnq4vpobknXG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgIHZhbHVlMS5zdGF0dXM9J+aPkOS6pOWuoeaguCdcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgdmFsdWUxLnN0YXR1cz0n5a6h5qC45pyq6YCa6L+HJ1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiOVwiOlxuICAgICAgICB2YWx1ZTEuc3RhdHVzPScg5a6h5qC46YCa6L+HJ1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiMTBcIjpcbiAgICAgICAgdmFsdWUxLnN0YXR1cz0n5bey6L2s5Ye6J1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiMTFcIjpcbiAgICAgICAgdmFsdWUxLnN0YXR1cz0nIOS4reatoidcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKHZhbHVlMS5hcHBseVR5cGUpIHtcbiAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgIHZhbHVlMS5hcHBseVR5cGU9J+aJi+WKqCdcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIjJcIjpcbiAgICAgIHZhbHVlMS5hcHBseVR5cGU9J+iHquWKqCdcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgLy8xPemHh+i0re+8jDI95aSW5Y2P5Yqp77yMMz3lupPlrZggdW5pdF90eXBlXG4gICAgICBzd2l0Y2ggKGFycltpbmRleF0ubGlzdFR5cGUpIHtcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICBhcnJbaW5kZXhdLmxpc3RUeXBlPSfph4fotK0nXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgIGFycltpbmRleF0ubGlzdFR5cGU9J+WkluWNj+WKqSdcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgYXJyW2luZGV4XS5saXN0VHlwZT0n5bqT5a2YJ1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoYXJyW2luZGV4XS51bml0VHlwZSkge1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgIGFycltpbmRleF0udW5pdFR5cGU9J+mHh+i0rSdcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgYXJyW2luZGV4XS51bml0VHlwZT0n5bqT5a2YJ1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoYXJyW2luZGV4XS5saXN0U3RhdHVzKSB7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBhcnJbaW5kZXhdLmxpc3RTdGF0dXM9J+aWsOW7uidcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICBhcnJbaW5kZXhdLmxpc3RTdGF0dXM9J+aPkOS6pOmihOWuoeaguCdcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgYXJyW2luZGV4XS5saXN0U3RhdHVzPSfpooTlrqHmoLjmnKrpgJrov4cnXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgIGFycltpbmRleF0ubGlzdFN0YXR1cz0n6aKE5a6h5qC46YCa6L+HJ1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICBhcnJbaW5kZXhdLmxpc3RTdGF0dXM9J+mihOeri+mhuSdcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgYXJyW2luZGV4XS5saXN0U3RhdHVzPSfnq4vpobknXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgIGFycltpbmRleF0ubGlzdFN0YXR1cz0n5o+Q5Lqk5a6h5qC4J1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICBhcnJbaW5kZXhdLmxpc3RTdGF0dXM9J+WuoeaguOacqumAmui/hydcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI5XCI6XG4gICAgICAgICAgYXJyW2luZGV4XS5saXN0U3RhdHVzPScg5a6h5qC46YCa6L+HJ1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjEwXCI6XG4gICAgICAgICAgYXJyW2luZGV4XS5saXN0U3RhdHVzPSflt7Lovazlh7onXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMTFcIjpcbiAgICAgICAgICBhcnJbaW5kZXhdLmxpc3RTdGF0dXM9JyDkuK3mraInXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZTEuYXBwbHlUeXBlKVxuICAgIC8vIHRoaXMuYmlsbHNUYWJsZT1yZXMuZGF0YS5kYXRhLmFwcGx5TGlzdExpc3RcbiAgfSJdfQ==