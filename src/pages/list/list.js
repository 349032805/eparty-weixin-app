// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    loading: true,
    hasMore: true,
    type: 'topics',
    page: 1,
    tab: '',
    size: 20,
    mdrender: true,
    topicList: []
  },

  handleLoadMore () {
    if (!this.data.hasMore) return

    return app.cncode.find(this.data.type, this.data.page++, this.data.tab, this.data.size, this.data.mdrender)
      .then(d => {
        if (d.data.length > 0) {
          this.setData({ topicList: this.data.topicList.concat(d.data), loading: false })
        } else {
          this.setData({ hasMore: false, loading: false })
        }
      })
      .catch(e => {
        console.error(e)
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    let list = [
      {
        'name': '张三',
        'sex': 0,
        'score': 80
      },
      {
        'name': '尼古拉斯赵四',
        'sex': 0,
        'score': 99
      },
      {
        'name': '王五',
        'score': 76,
        'sex': 1
      },
      {
        'name': '田七',
        'score': 77,
        'sex': 1
      }]

    this.setData({list: list})

    this.handleLoadMore()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
