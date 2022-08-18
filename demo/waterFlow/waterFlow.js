import {
    firstData,
    pushData
} from "../../utils/waterFlow"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        firstData, //初始数据
        pushData, // 加载数据
        pageIndex: 1, // 当前页数
        pageTotal: 100, // 最大页数
        reachBottom: false,
        listData: []
    },

    // 下拉刷新
    refresh() {
        this.setData({
            pageIndex: 1,
            pageTotal: 1
        })
        this.getAppList(false);
    },

    // 获取列表
    async getAppList(status) {
        // 上拉加载pageIndex += 1
        let pageIndex = this.data.pageIndex;
        if (status) {
            pageIndex += 1;
        }
        // 当前页数大于最大页数不执行后续
        if (pageIndex > this.data.pageTotal) {
            this.setData({
                reachBottom: true
            })
            return
        }
        wx.showLoading({
            mask: true,
            title: '加载中'
        })
        // const res = {
        //   method: 'post',
        //   data: {
        //     pageIndex,
        //   },
        //   url: indexApi.getAppList()
        // };
        // const returnValue = await request(res);
        // 下拉刷新直接赋值，上拉加载合并数组(调用接口使用)
        // let newArray = status ? this.data.listData.concat(returnValue.records) : returnValue.records;
        // 模拟添加数据(调用接口可注掉)
        let newArray = this.data.firstData;
        if (status) {
            newArray = this.data.listData.concat(this.data.pushData);
        }
        this.setData({
            pageIndex, //更新页数
            listData: newArray,
            pageTotal: this.data.pageTotal+1
            // pageTotal: returnValue.pages
        })
        // 模拟延迟2秒(调用接口可去掉settiemout)
        setTimeout(() => {
            // 取消loading等待
            wx.hideLoading();
            // 通知页面停止下拉刷新效果
            wx.stopPullDownRefresh();
        }, 500);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getAppList(false);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: async function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: async function () {
        this.refresh();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.getAppList(true);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})