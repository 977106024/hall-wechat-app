// pages/textExtraction/textExtraction.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upImage: '../../static/images/identity2.png',//图片
    isPhoto: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击选择图片
  previewImg() {
    let token = wx.getStorageSync('TOKEN')
    if(token){
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['camera'],
        success: res => {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths

          this.setData({
            upImage: tempFilePaths[0],
            isPhoto: false,
          })

          this.upImg(tempFilePaths[0])

        }
      })
    }else{
      //登陆
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },

  upImg(imgFile) {
    let token = wx.getStorageSync('TOKEN')
    const uploadTask = wx.uploadFile({
      url: 'http://192.168.1.113:2333/weChatApp/upImgFile',
      filePath: imgFile,
      name: 'imgfile',
      header: {
        "x-access-token": token
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})