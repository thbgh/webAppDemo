import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// Route-based code splitting
// 方案一
// import Bundle from './bundle';
// 方案二
import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;


// 同步引入
// import Home from './Components/Home';
// import About from './Components/Home/About';
// import Info from './Components/Home/About/Info';

// 异步引入

const Home = Loadable({loader: () => import('./Components/Home'),loading: Loading});
const IndexPage = Loadable({loader: () => import('./Components/Home/IndexPage'),loading: Loading});
const Detail = Loadable({loader: () => import('./Components/Home/IndexPage/Detail'),loading: Loading});
const About = Loadable({loader: () => import('./Components/Home/About'),loading: Loading});
const Info = Loadable({loader: () => import('./Components/Home/About/Info'),loading: Loading});
const Theme = Loadable({loader: () => import('./Components/Home/Theme'),loading: Loading});
const List = Loadable({loader: () => import('./Components/Home/Theme/List'),loading: Loading});
const Order = Loadable({loader: () => import('./Components/Home/Theme/Order'),loading: Loading});


// code splitting方案一

// 首屏
// const Home = (props) => (
//     <Bundle load={() => import('./Components/Home')}>
//         {(Home) => <Home {...props}/>}
//     </Bundle>
// );
//
// // 首页
// const IndexPage = (props) => (
//     <Bundle load={() => import('./Components/Home/IndexPage')}>
//         {(IndexPage) => <IndexPage {...props}/>}
//     </Bundle>
// );
// const Detail = (props) => (
//     <Bundle load={() => import('./Components/Home/IndexPage/Detail')}>
//         {(Detail) => <Detail {...props}/>}
//     </Bundle>
// );
//
// // 关于页
// const About = (props) => (
//     <Bundle load={() => import('./Components/Home/About')}>
//         {(About) => <About {...props}/>}
//     </Bundle>
// );
// const Info = (props) => (
//     <Bundle load={() => import('./Components/Home/About/Info')}>
//         {(Info) => <Info {...props}/>}
//     </Bundle>
// );
//
// // 主题
// const Theme = (props) => (
//     <Bundle load={() => import('./Components/Home/Theme')}>
//         {(Theme) => <Theme {...props}/>}
//     </Bundle>
// );
// const List = (props) => (
//     <Bundle load={() => import('./Components/Home/Theme/List')}>
//         {(List) => <List {...props}/>}
//     </Bundle>
// );
// const Order = (props) => (
//     <Bundle load={() => import('./Components/Home/Theme/Order')}>
//         {(Order) => <Order {...props}/>}
//     </Bundle>
// );


const RRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/home/index" component={IndexPage}/>
            <Route exact path="/home/index/detail" component={Detail}/>
            <Route exact path="/home/about" component={About}/>
            <Route exact path="/home/about/info" component={Info}/>
            <Route exact path="/home/theme" component={Theme}/>
            <Route exact path="/home/theme/list" component={List}/>
            <Route exact path="/home/theme/order" component={Order}/>
            <Route render={ () => <h1 style={{color:'red'}}>NoMatch</h1> } />
        </Switch>
    </Router>
)

export default RRouter
