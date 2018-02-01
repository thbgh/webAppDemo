/**
 * @Author: THB
 * @Date:   2018-01-03 13:58:13 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-01-19 17:34:12 PM Friday
 */

import React, {Component} from 'react';
import {
    Button,
    Icon,
    List,
    TabBar,
    Grid,
    NavBar
} from 'antd-mobile';
import {Switch, Route, withRouter, Link, BrowserRouter as Router} from 'react-router-dom';
import Footer from '../Footer';
const Item = List.Item;
const Brief = Item.Brief;

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // console.dir(this.props)
    }

    // render() {
    //     return (
    //         <div>
    //             <h2>Theme</h2>
    //             <li>
    //                 <Link to="/home/theme/list">List</Link>
    //             </li>
    //             <div>
    //
    //             </div>
    //
    //
    //
    //             <Footer selectedTab="Theme"/>
    //         </div>
    //     );
    // }

    render() {
        const list = [
            {
                type: 'check-circle',
                text: '待收款'
            }, {
                type: 'cross-circle',
                text: '待发货'
            }, {
                type: 'cross-circle',
                text: '待收货'
            }, {
                type: 'cross-circle',
                text: '退款/售后'
            }
        ];

        const Tabbars = () => {
            const data = list.map(item => ({icon: (<Icon type={item.type} color="green"/>), text: item.text}));
            return (<Grid data={data} columnNum={4} hasLine={false} activeStyle={false}/>);
        };
        return (
            <div id="personal">
                <NavBar
                    style={{backgroundColor: '#000'}}
                    rightContent={[ <span key = "00" style = {{color:'#fff', fontSize: '1rem'}} onClick={() => this.props.history.push('/home')}>退出</span>]}
                    // onLeftClick={() => this.props.history.push('/home')}
                >
                    <span style={{color: '#fff',fontSize: '2rem'}}>个人中心</span>
                </NavBar>
                <div>
                    <img width='100%' src="https://pro.modao.cc/uploads2/images/740/7408542/raw_1485255281.jpeg"/>
                    <List>
                        <Item arrow="horizontal" onClick={() => this.props.history.push('/home/theme/order')}>
                            我的订单
                        </Item>
                        <Item>
                            <Tabbars/>
                        </Item>
                        <Item arrow="horizontal" onClick={() => this.props.history.push('/address')}>
                            收货地址管理
                        </Item>
                        <Item arrow="horizontal" onClick={() => this.props.history.push('/home/theme/list')}>
                            物流信息
                        </Item>
                    </List>
                </div>
                <Footer selectedTab="Theme"/>
            </div>
        );
    }

}
