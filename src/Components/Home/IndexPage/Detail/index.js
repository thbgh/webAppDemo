/**
 * @Author: THB
 * @Date:   2018-01-03 13:58:13 PM Wednesday
 * @Email:  thbwork2016@gmail.com
 * @Project: Mart
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-01-30 17:04:32 PM Tuesday
 */

// import React, {Component} from 'react';
// import {observer} from 'mobx-react';
//
// console.log(observer)
//
// export default class Detail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // selectedTab: this.props.selectedTab,
//         };
//     }
//     componentDidMount() {
//         console.dir(this.props)
//     }
//
//     render() {
//         return (
//             <div>
//                 <h2>Detail</h2>
//             </div>
//         );
//     }
// }



import React, {Component} from 'react';
import {observer} from 'mobx-react';

const App  = observer(class App extends React.Component {
    render() {
        return  (
            <div>
                {this.props.person.name}<br />
                <button onClick={() => {this.props.person.name = "Mike"}}>change</button>
            </div>
        )
    }
})

const person = observer({ name: "John" })

// person.name = "Mike" // will cause the Observer region to re-render

export default class Detail extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // selectedTab: this.props.selectedTab,
    //     };
    // }
    // componentDidMount() {
    //     console.dir(this.props)
    // }

    render() {
        return (
            <div>
                <App person={person} />
            </div>
        );
    }
}
