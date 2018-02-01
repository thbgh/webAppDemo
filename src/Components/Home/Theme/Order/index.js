import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Button, Icon, Tabs, WhiteSpace, Badge, Card, NavBar} from 'antd-mobile';
import './index.less';


class Order extends Component {
  render() {
    const tabs = [
        { title: '全部订单', sub: '1' },
        { title: '待付款', sub: '2' },
        { title: '待收货', sub: '3' },
        { title: '已完成', sub: '4' },
    ];

    return (
        <div id="order" style={{ backgroundColor: '#f5f5f5' }}>
            <NavBar style={{backgroundColor: '#000'}}
                icon={<Icon type="left" />}
                // onLeftClick={() => this.props.history.push('/home/theme')}
                onLeftClick={() => this.props.history.goBack()}
            >
                我的订单
            </NavBar>
            <div>
                <Tabs
                    tabs={tabs}
                    initialPage={2}
                    tabBarPosition="top"
                    swipeable={false}
                    renderTab={tab => <span>{tab.title}</span>}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '12rem', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '12rem', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ alignItems: 'center', height: '100%'}}>
                        <Card full style={{marginBottom: '0.5rem',paddingBottom:'0px'}}>
                            <span style={{lineHeight: '2rem',paddingLeft: '1rem'}}>订单号：32749847916491</span>
                            <Card.Header
                                title={
                                    <div>
                                        <p style={{marginBottom: '1rem'}}>大疆无人机新品 无人机飞机对方哈萨克合的战斗机 限时抢购</p>
                                        <div>
                                            <p style={{fontSize: '1rem',float:'left'}}>标准版</p>
                                            <p style={{fontSize: '1rem',float:'right'}}>x1</p>
                                        </div>
                                    </div>
                                }
                                thumb={<img width="100rem" src="https://pro.modao.cc/uploads2/images/778/7785563/raw_1488014170.jpeg"/>}
                                style={{backgroundColor:"#f5f5f5"}}
                                onClick={() => this.props.history.push('/home/theme/order/orderDetail')}
                            />
                            <Card.Body style={{padding:'1rem', borderBottom: '0.1rem solid #f5f5f5'}}>
                                <div style={{textAlign: 'right'}}><span>共1件商品 付款金额：￥ 1999</span></div>
                            </Card.Body>
                            <Card.Footer content="" extra={
                                <div style={{marginTop: '3px'}}>
                                    <Button inline size="small" style={{ marginRight: '0.5rem' }} onClick={() => this.props.history.push('/home/theme/list')}>查看物流</Button>
                                    <Button type="ghost" inline size="small">确认收货</Button>
                                </div>
                            }
                        />
                        </Card>
                        <Card full style={{marginBottom: '0.5rem',paddingBottom:'0px'}}>
                            <span style={{lineHeight: '2rem',paddingLeft: '1rem'}}>订单号：32749847916491</span>
                            <Card.Header
                                title={
                                    <div>
                                        <p style={{marginBottom: '1rem'}}>大疆无人机新品 无人机飞机对方哈萨克合的战斗机 限时抢购</p>
                                        <div>
                                            <p style={{fontSize: '1rem',float:'left'}}>标准版</p>
                                            <p style={{fontSize: '1rem',float:'right'}}>x1</p>
                                        </div>
                                    </div>
                                }
                                thumb={<img width="100rem" src="https://pro.modao.cc/uploads2/images/778/7785563/raw_1488014170.jpeg"/>}
                                style={{backgroundColor:"#f5f5f5"}}
                                onClick={() => this.props.history.push('/home/theme/order/orderDetail')}
                            />
                            <Card.Body style={{padding:'1rem', borderBottom: '0.1rem solid #f5f5f5'}}>
                                <div style={{textAlign: 'right'}}><span>共1件商品 付款金额：￥ 1999</span></div>
                            </Card.Body>
                            <Card.Footer content="" extra={
                                <div style={{marginTop: '3px'}}>
                                    <Button inline size="small" style={{ marginRight: '0.5rem' }} onClick={() => this.props.history.push('/home/theme/list')}>查看物流</Button>
                                    <Button type="ghost" inline size="small">确认收货</Button>
                                </div>
                            }
                        />
                        </Card>
                        <Card full style={{marginBottom: '0.5rem',paddingBottom:'0px'}}>
                            <span style={{lineHeight: '2rem',paddingLeft: '1rem'}}>订单号：32749847916491</span>
                            <Card.Header
                                title={
                                    <div>
                                        <p style={{marginBottom: '1rem'}}>大疆无人机新品 无人机飞机对方哈萨克合的战斗机 限时抢购</p>
                                        <div>
                                            <p style={{fontSize: '1rem',float:'left'}}>标准版</p>
                                            <p style={{fontSize: '1rem',float:'right'}}>x1</p>
                                        </div>
                                    </div>
                                }
                                thumb={<img width="100rem" src="https://pro.modao.cc/uploads2/images/778/7785563/raw_1488014170.jpeg"/>}
                                style={{backgroundColor:"#f5f5f5"}}
                                onClick={() => this.props.history.push('/home/theme/order/orderDetail')}
                            />
                            <Card.Body style={{padding:'1rem', borderBottom: '0.1rem solid #f5f5f5'}}>
                                <div style={{textAlign: 'right'}}><span>共1件商品 付款金额：￥ 1999</span></div>
                            </Card.Body>
                            <Card.Footer content="" extra={
                                <div style={{marginTop: '3px'}}>
                                    <Button inline size="small" style={{ marginRight: '0.5rem' }} onClick={() => this.props.history.push('/home/theme/list')}>查看物流</Button>
                                    <Button type="ghost" inline size="small">确认收货</Button>
                                </div>
                            }
                        />
                        </Card>
                        <Card full style={{marginBottom: '0.5rem',paddingBottom:'0px'}}>
                            <span style={{lineHeight: '2rem',paddingLeft: '1rem'}}>订单号：32749847916491</span>
                            <Card.Header
                                title={
                                    <div>
                                        <p style={{marginBottom: '1rem'}}>大疆无人机新品 无人机飞机对方哈萨克合的战斗机 限时抢购</p>
                                        <div>
                                            <p style={{fontSize: '1rem',float:'left'}}>至尊版</p>
                                            <p style={{fontSize: '1rem',float:'right'}}>x3</p>
                                        </div>
                                    </div>
                                }
                                thumb={<img width="100rem" src="https://pro.modao.cc/uploads2/images/778/7785563/raw_1488014170.jpeg"/>}
                                style={{backgroundColor:"#f5f5f5"}}
                                onClick={() => this.props.history.push('/home/theme/order/orderDetail')}
                            />
                            <Card.Body style={{padding:'1rem', borderBottom: '0.1rem solid #f5f5f5'}}>
                                <div style={{textAlign: 'right'}}><span>共3件商品 付款金额：￥ 9999</span></div>
                            </Card.Body>
                            <Card.Footer content="" extra={
                                <div style={{marginTop: '3px'}}>
                                    <Button inline size="small" style={{ marginRight: '0.5rem' }} onClick={() => this.props.history.push('/home/theme/list')}>查看物流</Button>
                                    <Button type="ghost" inline size="small">确认收货</Button>
                                </div>
                            }
                        />
                        </Card>
                    </div>
                    <div style={{ alignItems: 'center', height: '100%'}}>
                        <Card full style={{marginBottom: '0.5rem',paddingBottom:'0px'}}>
                            <span style={{lineHeight: '2rem',paddingLeft: '1rem'}}>订单号：32749847916491</span>
                            <Card.Header
                                title={
                                    <div>
                                        <p style={{marginBottom: '1rem'}}>大疆无人机新品 无人机飞机对方哈萨克合的战斗机 限时抢购</p>
                                        <div>
                                            <p style={{fontSize: '1rem',float:'left'}}>标准版</p>
                                            <p style={{fontSize: '1rem',float:'right'}}>x1</p>
                                        </div>
                                    </div>
                                }
                                thumb={<img width="100rem" src="https://pro.modao.cc/uploads2/images/778/7785563/raw_1488014170.jpeg"/>}
                                style={{backgroundColor:"#f5f5f5"}}
                                onClick={() => this.props.history.push('/home/theme/order/orderDetail')}
                            />
                            <Card.Body style={{padding:'1rem', borderBottom: '0.1rem solid #f5f5f5'}}>
                                <div style={{textAlign: 'right'}}><span>共1件商品 付款金额：￥ 1999</span></div>
                            </Card.Body>
                            <Card.Footer content="" extra={
                                <div style={{marginTop: '3px'}}>
                                    <Button inline size="small" style={{ marginRight: '0.5rem' }} onClick={() => this.props.history.push('/home/theme/list')}>查看物流</Button>
                                    <Button inline size="small">申请售后</Button>
                                </div>
                            }
                            />
                        </Card>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}
}

export default withRouter(Order);
