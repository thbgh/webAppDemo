/**
 * @Author: THB
 * @Date:   2018-01-03 13:58:13 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-02-03 11:44:20 AM Saturday
 */

import React from 'react';
import {
    Button,
    Icon,
    Card,
    Radio,
    WingBlank,
    WhiteSpace,
    NavBar,
    List,
    InputItem,
    Toast,
} from 'antd-mobile';
import {InfoStore} from '../../../Store/infoStore';
export default class Info extends React.Component {

    state= {
        userName:InfoStore.userName,
        age:InfoStore.age,
        changeUserName:InfoStore.changeUserName
    }

    componentDidMount() {
        // console.dir(InfoStore)
        // console.dir(this)
    }

    render() {
        // let {userName, age, changeUserName} = InfoStore;
        let {userName, age, changeUserName} = this.state;
        return (
            <div>
                <h2>Info</h2>
                <p>InfoStore.userName:{userName}</p>
                <p>InfoStore.age:{InfoStore.age}</p>
                <p>state.age:{age}</p>
                <WingBlank>
                    <Button onClick={() => changeUserName('THB', this)}>changeName</Button><br /><br />
                    <Button onClick={() => {this.setState({age:++age})}}>
                        {age}
                    </Button><br /><br />
                </WingBlank>
                <List>
                    <InputItem  placeholder="" labelNumber={20} onChange={ e => changeUserName(e, this)}>changeUserName:</InputItem>
                </List>
            </div>
        );
    }
}

// import React from 'react';
// import Websocket from 'react-websocket';
//
// class ProductDetail extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 90
//     };
//   }
//
//   handleData(data) {
//     let result = JSON.parse(data);
//     this.setState({count: this.state.count + result.movement});
//   }
//
//   render() {
//     return (
//       <div>
//         Count: <strong>{this.state.count}</strong>
//
//         <Websocket
//             url='ws://www.baidu.com'
//             onMessage={this.handleData.bind(this)}
//             onOpen={() => {console.log('open')}}
//         />
//       </div>
//     );
//   }
// }
//
// export default ProductDetail;
