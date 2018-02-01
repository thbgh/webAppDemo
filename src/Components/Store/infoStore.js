/**
 * @Author: THB
 * @Date:   2018-01-31 17:44:08 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: common.js
 * @Last modified by:   THB
 * @Last modified time: 2018-02-01 16:10:20 PM Thursday
 */

let InfoStore = {
    userName:'初始名字',
    age:'18',
    changeUserName: (name,_this) => {
        let path = _this.props.location.pathname,
            prev_Name = InfoStore.userName,
            now_Name = name == prev_Name ? "初始名字": name
        InfoStore.userName = now_Name
        // re-rendering
        // _this.setState({})
        // _this.forceUpdate()
        _this.setState({userName:now_Name})
        // 打印操作详情
        console.info(`操作详情：
            path：${_this.props.location.pathname},
            operationType：changeUserName,
            prev_Name：'${prev_Name}',
            now_Name：'${now_Name}'`)
    }
}

export default InfoStore
