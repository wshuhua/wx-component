Page({
    data: {
        animationData: 0,
        angle: "北",
        compass: 0

    },
    onShow: function () {
        var myThis = this;
        wx.onCompassChange(function (res) {
            myThis.animation = wx.createAnimation({
                timingFunction: "step-start"
            })
            myThis.animation.rotate(360 - res.direction.toFixed(0)).step()
            switch (true) {
                case res.direction < 22.5:
                    myThis.setData({
                        angle: "北"
                    });
                    break;
                case 22.5 < res.direction && res.direction < 67.5:
                    myThis.setData({
                        angle: "东北"
                    });
                    break;
                case 67.5 < res.direction && res.direction < 112.5:
                    myThis.setData({
                        angle: "东"
                    });
                    break;
                case 112.5 < res.direction && res.direction < 157.5:
                    myThis.setData({
                        angle: "东南"
                    });
                    break;
                case 157.5 < res.direction && res.direction < 202.5:
                    myThis.setData({
                        angle: "南"
                    });
                    break;
                case 202.5 < res.direction && res.direction < 247.5:
                    myThis.setData({
                        angle: "西南"
                    });
                    break;
                case 247.5 < res.direction && res.direction < 292.5:
                    myThis.setData({
                        angle: "西"
                    });
                    break;
                case 292.5 < res.direction && res.direction < 337.5:
                    myThis.setData({
                        angle: "西北"
                    });
                    break;
            }
            myThis.setData({
                compass: res.direction.toFixed(2),
                animation: myThis.animation.export()
            })
        })
    }
})