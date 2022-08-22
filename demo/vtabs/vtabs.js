Page({
  data: {
    vtabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = ['热搜推荐', '手机数码', '家用电器',
      '生鲜果蔬', '酒水饮料', '生活美食', 
      '美妆护肤', '个护清洁', '女装内衣', 
      '男装内衣', '鞋靴箱包', '运动户外', 
      '生活充值', '母婴童装', '玩具乐器', 
      '家居建材', '医药保健']
    const vtabs = titles.map(item => ({title: item}))
    this.setData({vtabs})
  },

  onTabCLick(e) {
    const index = e.detail.index
    console.log('tabClick', index)
  },

  onChange(e) {
    const index = e.detail.index
    console.log('change', index)
  }

})
