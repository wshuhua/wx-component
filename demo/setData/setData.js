const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    currentData: [],
    pageIndex: 1,
    pageSize: 10,
    total: 0,
    loading: false,
    loadingComplete: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const { data, pageIndex, pageSize } = this.data;
    for (let i = 0; i < 50; i++) {
        data.push(i+1);
    }
    const len = Math.ceil(data.length/pageSize)
    this.setData({ data, currentData: data.slice(0, pageIndex * pageSize), total: len });
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
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    const { data, pageIndex, pageSize, total } = this.data;
    if (pageIndex >= total) {
        this.setData({
            loadingComplete: true
        })
        return;
    }
    this.setData({
        pageIndex: pageIndex + 1,
        loading: true
    }, () => {
        setTimeout(() => {
            this.setData({ loading: false, currentData: data.slice(0, (pageIndex + 1) * pageSize) });
        }, 1000)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})