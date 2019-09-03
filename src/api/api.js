// import { resolve } from "dns";
import wepy from 'wepy'

/**
 * 用户获取审批的事件表
 */
export function getApTable(data) {
    return new Promise((resolve,reject)=>{
        wepy.request({
            url: 'http://139.199.126.58:9000/template/event/byStatus',
            data: data,
            method: 'POST', 
        }).then((res)=>{
            if (res.data.status==1) {
                resolve(res.data.data)
            }else if (res.data.status==0) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'fail',
                    duration: 2000
                })
                resolve(res.data.msg)
            }
        }).catch(err=>{
            wx.showToast({
                title: '请求出错',
                icon: 'none'
            })
        })
    })
    
}

/**
 * 
 * 根据stepStaffId获取审批表
 */
//@param {"queryId":"57703","queryMethod":"message"} data 
export function getApForm(data) {
    return new Promise((resolve,reject)=>{
        wepy.request({
            url: 'http://139.199.126.58:9000/user/event/detail',
            data: data,
            method: 'POST', 
        }).then((res)=>{
            if (res.data.status==1) {
                resolve(res.data.data)
            }else if (res.data.status==0) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 2000
                })
                resolve(res.data.msg)
            }
        }).catch(err=>{
            wx.showToast({
                title: '请求出错',
                icon: 'none'
            })
        })
    })
}

/**
 * 执行审批
 */

 export function performApproval(data) {
     return new Promise((resolve,reject)=>{
         wepy.request({
             url:'http://139.199.126.58:9000/user/doApproval',
             method:'POST',
             data:data
         }).then((res)=>{
            if (res.data.status==1) {
                resolve(res.data.data)
            }else if (res.data.status==0) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 2000
                })
                resolve(res.data.msg)
            }
        }).catch(err=>{
            wx.showToast({
                title: '请求出错',
                icon: 'none'
            })
        })
     })
 }
/**
 * 
 * 获取目标单据
 */
export function getBill(data) {
    return new Promise((resolve,reject)=>{
        wepy.request({
            url: 'http://139.199.126.58:9000/user/getTargetBill/'+data,
            method: 'GET', 
        }).then((res)=>{
            if (res.data.status==1) {
                resolve(res.data.data)
            }else if (res.data.status==0) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none',
                    duration: 2000
                })
                resolve(res.data.msg)
            }
        }).catch(err=>{
            wx.showToast({
                title: '请求出错',
                icon: 'none'
            })
        })
    })    
}

/**
 * 改变时间格式
 */
export function changeTime(time) {
    var d = new Date(time);
    var times=d.getFullYear() + '-' 
    + (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + '-' 
    +( d.getDate() <10 ? "0" +d.getDate():d.getDate()) + ' ' 
    + (d.getHours() <10 ? "0" +d.getHours():d.getHours()) + ':' 
    + (d.getMinutes()<10 ? "0" +d.getMinutes():d.getMinutes()) + ':' 
    + (d.getSeconds()<10 ? "0" +d.getSeconds():d.getSeconds());
    return times
}
/**
 * 改变接收数据
 */
export function changNames(value1,arr) {
    value1.createDate=changeTime(value1.createDate)
    value1.expirationDate=changeTime(value1.expirationDate)
    value1.planDate=changeTime(value1.planDate)
    switch (value1.status) {
      case "1":
          value1.status='新建'
        break;
      case "2":
        value1.status='提交预审核'
      break;
      case "3":
        value1.status='预审核未通过'
      break;
      case "4":
        value1.status='预审核通过'
      break;
      case "5":
        value1.status='预立项'
      break;
      case "6":
        value1.status='立项'
      break;
      case "7":
        value1.status='提交审核'
      break;
      case "8":
        value1.status='审核未通过'
      break;
      case "9":
        value1.status=' 审核通过'
      break;
      case "10":
        value1.status='已转出'
      break;
      case "11":
        value1.status=' 中止'
      break;
    }
    switch (value1.applyType) {
      case "1":
        value1.applyType='手动'
      break;
      case "2":
      value1.applyType='自动'
      break;
    }
    for (let index = 0; index < arr.length; index++) {
      //1=采购，2=外协助，3=库存 unit_type
      switch (arr[index].listType) {
        case "1":
          arr[index].listType='采购'
        break;
        case "2":
          arr[index].listType='外协助'
        break;
        case "3":
          arr[index].listType='库存'
        break;
      }
      switch (arr[index].unitType) {
        case "1":
          arr[index].unitType='采购'
        break;
        case "2":
          arr[index].unitType='库存'
        break;
      }
      switch (arr[index].listStatus) {
        case "1":
            arr[index].listStatus='新建'
          break;
        case "2":
          arr[index].listStatus='提交预审核'
        break;
        case "3":
          arr[index].listStatus='预审核未通过'
        break;
        case "4":
          arr[index].listStatus='预审核通过'
        break;
        case "5":
          arr[index].listStatus='预立项'
        break;
        case "6":
          arr[index].listStatus='立项'
        break;
        case "7":
          arr[index].listStatus='提交审核'
        break;
        case "8":
          arr[index].listStatus='审核未通过'
        break;
        case "9":
          arr[index].listStatus=' 审核通过'
        break;
        case "10":
          arr[index].listStatus='已转出'
        break;
        case "11":
          arr[index].listStatus=' 中止'
        break;
      }
    }
    // console.log(value1.applyType)
    // this.billsTable=res.data.data.applyListList
  }