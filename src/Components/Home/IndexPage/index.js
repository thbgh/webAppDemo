/**
 * @Author: THB
 * @Date:   2018-01-03 13:58:13 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-02-06 10:24:33 AM Tuesday
 */

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Icon, Card, Radio, WingBlank, WhiteSpace,NavBar, List,InputItem, Toast } from 'antd-mobile';
import Footer from '../Footer';
import {InfoStore} from '../../Store/infoStore';

export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // console.dir(this.props)
    }

    render() {
        return (
            <div>
                <h2>IndexPage</h2>
                <p>InfoStore.userName:{InfoStore.userName}</p>
                <Button onClick={() => {InfoStore.changeUserName('123',this)}}>changeName</Button>
                <li>
                    <Link to="/home/index/detail">Detail</Link>
                </li>
                    <div>
                        <h2>Detail</h2>
                        <h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2>
                        <h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail</h2><h2>Detail11112</h2>
                    </div>
                <Footer selectedTab="IndexPage"/>
            </div>
        );
    }
}
