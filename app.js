App({
  onLaunch: function () {
    const res = wx.getSystemInfoSync()
    const bottomPadding = res.screenHeight - res.safeArea.bottom;
    this.globalData.bottomPadding = bottomPadding;
  },
  globalData: {}
})
