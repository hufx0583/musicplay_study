App({
  globalData: {
    isMusicPlay: false, // 是否有音乐在播放
    musicId: '' // 音乐id
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
  
  },
  // 跳转至music页面
  toMusic(){
    wx.navigateTo({
      url: '/pages/music/music'
    })
  },
  //排行榜
  toTopList(){
    wx.navigateTo({
      url: '/pages/toplist/toplist'
    })
  },
  // 跳转至recommendSong页面的回调
  toRecommendSong(param){
    wx.navigateTo({
      url: '/songPackage/pages/recommendSong/recommendSong?param='+param
    })
  },

  //跳转歌曲详情
  goToSongDetail(songid){
    wx.navigateTo({
      url: '/songPackage/pages/songDetail/songDetail?musicId=' + songid
    })
  },
  checkUserLogin(){
    let userInfo = wx.getStorageSync('userInfo');
    if(!userInfo){
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        success: () => {
          // 跳转至登录界面
          wx.reLaunch({
            url: '/pages/login/login?rescueId=index'
          })
        }
      })
      return false;
    }
    return true;
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
  
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
  
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
  
  }
})
