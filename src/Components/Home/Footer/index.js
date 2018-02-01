/**
 * @Author: THB
 * @Date:   2018-01-03 13:58:13 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-01-18 19:40:17 PM Thursday
 */

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.selectedTab,
        };
    }
    componentDidMount() {
        console.dir(this.props)
    }

    render() {
        return (
            <div id="footer" style={{marginTop:50}}>
                <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
                        <TabBar
                         unselectedTintColor="#949494"
                         tintColor="#33A3F4"
                         barTintColor="white"
                        //  hidden={this.state.hidden}
                        >
                        <TabBar.Item
                           title="IndexPage"
                           key="IndexPage"
                           icon={<div style={{
                             width: '22px',
                             height: '22px',
                             background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                           />
                           }
                           selectedIcon={<div style={{
                             width: '22px',
                             height: '22px',
                             background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                           />
                           }
                           selected={this.state.selectedTab === 'IndexPage'}
                        //    badge={1}
                           onPress={() => {
                             this.setState({
                               selectedTab: 'IndexPage'
                           },() => {
                               this.props.history.push('/home/index')
                           });
                           }}
                           data-seed="logId"
                         >
                        </TabBar.Item>
                        <TabBar.Item
                           icon={
                             <div style={{
                               width: '22px',
                               height: '22px',
                               background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                             />
                           }
                           selectedIcon={
                             <div style={{
                               width: '22px',
                               height: '22px',
                               background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                             />
                           }
                           title="About"
                           key="About"
                        //    dot
                           selected={this.state.selectedTab === 'About'}
                           onPress={() => {
                             this.setState({
                               selectedTab: 'About',
                           },() => {
                               this.props.history.push('/home/about')
                           });
                           }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                           icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                           selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                           title="Theme"
                           key="Theme"
                           selected={this.state.selectedTab === 'Theme'}
                           onPress={() => {
                             this.setState({
                               selectedTab: 'Theme',
                             },() => {
                                 this.props.history.push('/home/theme')
                             });
                           }}
                        >
                       </TabBar.Item>
                    </TabBar>
                </div>
            </div>
        );
    }
}

export default withRouter(Footer)
