/**
 * @Author: THB
 * @Date:   2018-01-03 13:58:13 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-01-26 11:47:23 AM Friday
 */

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, withRouter, Link, NavLink} from 'react-router-dom'
import { Button, Icon, Card, Radio, WingBlank, WhiteSpace,NavBar, List,InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import './index.less'

class Home extends Component {
    state = {
        count: 30,
        showTimeBtn: false,
    };
    componentDidMount() {}
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    handleGetBtnClick = () => {
        const form = this.props.form;
        let phone = form.getFieldValue('phone')
        console.log(phone)
        if(!phone || phone.length != 13){
             Toast.fail("请填写正确的手机号！")
             return
        }
        // YBCommon.YBPHPFetch({
        //     bodyData: {
        //         api_name: 'common.captcha.getsmscaptcha',
        //         mobile: phone,
        //     },
        //     logMessage: '获取短信验证码',
        //     cb_0: (json) => {
        //         console.log(json.response)
        //         message.success('短信验证码发送成功,请注意查收！')
        //     }
        // })


        this.setState({showTimeBtn: true});
        let count = this.state.count;
        this.timer = setInterval(() => {
            this.setState({count: count--});
            if (count < 1) {
                clearInterval(this.timer);
                this.setState({showTimeBtn: false,count:30});
            }
        }, 1000);
    }
    submit = () => {
        this.props.form.validateFields((error, value) => {
          console.log(error);
          console.log(value);
          if(value.verificationCode === "1234" && value.phone === "188 1111 1111") {
            //   console.log('登陆成功')
            //    Toast.success(content, duration, onClose, mask)
               Toast.success('登陆成功', 1, () => {this.props.history.push('/home/index')},true);
          } else {
              Toast.fail('登陆失败', 2);
          }
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <h2>Home</h2>
                {/* <span style={{fontSize:"2rem"}}>home</span> */}
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                        <ul>
                            <li>
                                <Link to="/home/index">IndexPage</Link>
                                <ul>
                                    <li>
                                        <Link to="/home/index/detail">Detail</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/home/about">About</Link>
                                <ul>
                                    <li>
                                        <Link to="/home/about/info">Info</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/home/theme">Theme</Link>
                                <ul>
                                    <li>
                                        <Link to="/home/theme/list">List</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div>
                    <div style={{margin: '4rem auto'}}>
                        <List>
                            {/* <InputItem  {...getFieldProps('phone', {initialValue: '188 1111 1111'})} type="phone" placeholder="手机号码" >
                                手机号码
                            </InputItem> */}
                            <InputItem  {...getFieldProps('phone', {initialValue: '188 1111 1111'})} type="phone" placeholder="请输入手机号码" >
                                手机号码:
                            </InputItem>
                            <InputItem {...getFieldProps('verificationCode', {initialValue: '1234'})} placeholder="验证码" >
                                验证码:
                            </InputItem>
                            {/* <Button size="small" style={{position: 'absolute',right: '10px',top: '51px'}}>获取验证码</Button> */}
                            <Button
                                size="small"
                                style={{position: 'absolute',right: '10px',top: '51px'}}
                                onClick={this.handleGetBtnClick}
                                disabled={this.state.showTimeBtn}
                            >
                                {this.state.showTimeBtn ? this.state.count + '秒后重发' : '获取验证码'}
                            </Button>
                        </List>
                    </div>
                    <div className="addBtn">
                        <Button type="primary" onClick={this.submit}>登录</Button>
                    </div>
                </div>
            </div>
        );
    }
}
const HHome = createForm()(Home);
export default withRouter(HHome);
