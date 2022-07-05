import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

//创建类式组件
class UserStore {
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
  }
  getUserInfo = async () => {
    // 调用接口获取数据
    const res = await http.get('/user/profile')
    this.userInfo = res.data
  }
}

export default UserStore