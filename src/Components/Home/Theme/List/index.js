import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {
    Button,
    Icon,
    Tabs,
    WhiteSpace,
    Badge,
    Card,
    NavBar,
    List,
    InputItem,
    Steps,
    WingBlank
} from 'antd-mobile';
const Step = Steps.Step;
const {Item} = List;

class LList extends Component {
    render() {
        const steps = [
            {
                title: '【上海市】到达上海市处理中心',
                status: 'process',
                description: '2017-07-23 07:48'
            }, {
                title: '【上海市】到达上海市处理中心 正在打包封装',
                status: 'wait',
                description: '2017-07-23 07:48'
            }, {
                title: '【上海市】到达上海市处理中心 正在打包封装',
                status: 'wait',
                description: '2017-07-22 07:48'
            }, {
                title: '【深圳市】离开深圳市 发往上海市 处理人 王卫峰',
                status: 'wait',
                description: '2017-07-21 07:48'
            }
        ].map((s, i) => <Step key={i} title={s.title} status={s.status} description={s.description}/>);
        return (
            <div id="logistics">
                <NavBar
                    style={{ backgroundColor: '#000' }}
                    icon={<Icon key = "00" type = "left" />}
                    // onLeftClick={() => this.props.history.push('/home/theme')}
                    onLeftClick={() => this.props.history.goBack()}
                >
                    物流信息
                </NavBar>
                <div>
                    <List>
                        <Item>运单编号: <span>123</span></Item>
                        <Item>承运公司: <span>天天快递</span></Item>
                        <Item>官方电话: <span>548729</span></Item>
                    </List>
                    <WingBlank mode={20}>
                        <WhiteSpace />
                        <Steps current={1} direction="vertical">{steps}</Steps>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default withRouter(LList);
