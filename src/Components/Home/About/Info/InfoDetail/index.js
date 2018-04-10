/**
 * @Author: THB
 * @Date:   2018-01-03 13:58:13 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-03-21 00:36:17 AM Wednesday
 */

import React from 'react';
import {BrowserRouter as Router, Route, withRouter, Link, NavLink} from 'react-router-dom'
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
    Toast
} from 'antd-mobile';
// import InfoStore from '../../../Store/infoStore';

export default class InfoDetail extends React.Component {
    componentDidMount() {
        // console.dir(InfoStore)
        // console.dir(this)

        console.dir(this.props.match.params.id)
    }
    render() {
        return (<div>
            <h2>InfoDetail</h2>
            <p>这是info{this.props.match.params.id}</p>
        </div>);
    }
}
