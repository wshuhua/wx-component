const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: [{
      title: '工具',
      list: [{
          title: '硬件数据监听',
          url: '/demo/hardware/hardware',
        },
        {
          title: '资源-全国城市列表',
          url: '/demo/citylist/citylist',
        },
        {
          title: 'promise封装request工具',
          url: '/demo/request/request',
        },
        {
          title: '表单组件验证工具',
          url: '/demo/form/form',
        }
      ]
    }, {
      title: '入门学习',
      list: [{
          title: '下拉刷新',
          url: '/demo/scrollview/scrollview',
        },
        {
          title: '弹框',
          url: '/demo/dialog/dialog',
        },
        {
          title: 'actionsheet - 从下面冒出来的效果',
          url: '/demo/actionsheet/request',
        },
        {
          title: 'loading',
          url: '/demo/loading/loading',
        },
        {
          title: 'noticebar - 跑马灯效果的通知栏',
          url: '/demo/noticebar/noticebar',
        },
        {
          title: 'toast',
          url: '/demo/toast/toast',
        }
      ]
    }, {
      title: '常用效果',
      list: [{
          title: '列表性能优化（防止setData数据过大）',
          url: '/demo/setData/setData',
        },
        {
          title: '拖拽，缩放',
          url: '/demo/move/move',
        },
        {
          title: '瀑布流',
          url: '/demo/waterFlow/waterFlow',
        },
        {
          title: '自定义键盘',
          url: '/demo/keyboard/keyboard',
        },
        {
          title: '仿抖音视频播放',
          url: '/demo/video-swiper/video-swiper',
        },
        {
          title: 'tabs',
          url: '/demo/tabs/tabs',
        }
      ]
    }],
    activeIndex: null,
    bottomPadding: 0

  },
  changeActive: function(e) {
    const { index } = e.currentTarget.dataset;
    const { activeIndex } = this.data;
    if (activeIndex === index) {
      this.setData({
        activeIndex: null
      })
    } else {
      this.setData({
        activeIndex: index
      })
    }
  },
  contact: function() {
    wx.showModal({
      title: '联系',
      content: '请添加微信号【wsh1730129114】',
      showCancel: false
    })
  },
  linkUrl: function (e) {
    const { url } = e.currentTarget.dataset;
    wx.navigateTo({
      url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      bottomPadding: app.globalData.bottomPadding
    })
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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})