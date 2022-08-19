Page({
    data: {
        tabs: [],
        activeTab: 0,
    },

    onLoad() {
        const titles = ['首页', '外卖', '美食', '酒店/民宿', '休闲娱乐', '电影/演出', '出行', '美发']
        const tabs = titles.map(item => ({
            title: item
        }))
        this.setData({
            tabs
        })
    },

    onTabCLick(e) {
        const index = e.detail.index
        this.setData({
            activeTab: index
        })
    },

    onChange(e) {
        const index = e.detail.index
        this.setData({
            activeTab: index
        })
    }

})