import React from 'react'
import {
    Navigator
} from 'react-native';
import { Provider } from 'react-redux'
import App from './containers/app.js'

class Root extends React.Component {
    render() {
        return (
            <Provider>
                <App />
            </Provider>
        );
    }
}
export default Root;
