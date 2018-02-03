/**
 * @Author: THB
 * @Date:   2018-01-03 13:58:13 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-02-03 11:33:42 AM Saturday
 */

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Footer from '../Footer';
import {InfoStore} from '../../Store/infoStore';

export default class About extends Component {
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
                <h2>About</h2>
                <li>
                    <Link to="/home/about/info">Info</Link>
                </li>
                <p>InfoStore.userName:{InfoStore.userName}</p>
                <Footer selectedTab="About"/>
            </div>
        );
    }
}
