import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/footer.css'
import PcIndex from './js/components/pc_index'
import MobileIndex from './js/components/mobile_index'
import MediaQuery from 'react-responsive';
import PcDetails from './js/components/pc_details';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Index extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MediaQuery query='(min-device-width: 1224px)'>
                        <Route exact path="/" component={PcIndex}/>
                        <Route path="/details/:uniquekey" component={PcDetails}/>
                    </MediaQuery>
                    <MediaQuery query='(max-device-width: 1224px)'>
                        <MobileIndex />
                    </MediaQuery>
                </div>
            </Router>

        );
    };
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);
