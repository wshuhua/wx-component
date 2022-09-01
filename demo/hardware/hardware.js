Page({

    /**
     * 页面的初始数据
     */
    data: {
      rotateXY:0,
      rotateYZ:0,
      rotateZX:0,
      backgroundColor:'#000000',
      degreesXY: 0,
      degreesYZ: 0,
      degreesZX: 0,
      isOnAccelerometerChange: true,
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that = this
      // https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html
      wx.onAccelerometerChange(function (res) {
        if(!that.data.isOnAccelerometerChange){
          return
        }
        var rotateXY = Math.atan2(res.x, res.y) * 180 / Math.PI
        var rotateYZ = Math.atan2(res.y, res.z) * 180 / Math.PI
        var rotateZX = Math.atan2(res.z, res.x) * 180 / Math.PI
        if (rotateXY<0){
          that.setData({
            rotateXY: rotateXY,
            degreesXY: (rotateXY + 180).toFixed(2),
            rotateYZ:rotateYZ,
            rotateZX:rotateZX
          })
        }else{
          that.setData({
            rotateXY: rotateXY,
            degreesXY: -(180 - rotateXY).toFixed(2),
            rotateYZ: rotateYZ,
            rotateZX: rotateZX
          })
        }
      })
    },
    onUnload: function () {
      this.setData({
        isOnAccelerometerChange:false
      })
      wx.stopAccelerometer({})
    }
  })
  