Page({
    data: {
        visible: false
    },
    open: function () {
        this.setData({
            visible: true
        })
    },
    close: function () {
        this.setData({
            visible: false
        })
    },
})