Component({
    /**
     * 组件的属性列表
     */
    properties: {
      title: {
        type: String
      },
      show: {
        type: Boolean,
        value: false
      },
      showCloseBtn:{
        type:Boolean,
        value: true
      }
    },
  
    /**
     * 组件的初始数据
     */
    data: {
      show: false,
      showCloseBtn:false
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      colose(){
        this.setData({
            show: false
        });
        this.triggerEvent('closeRule')
      }
    }
  })
  