Page({
    data: {
        showActionsheet: false
    },
    openActionsheet: function () {
        this.setData({
            showActionsheet: true
        })
    },
    closeActionSheet: function () {
        this.setData({
            showActionsheet: false
        })
    },
})