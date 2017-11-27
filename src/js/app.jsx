import React, { Component } from 'react';
import { render } from 'react-dom';

import { DatePicker } from 'antd';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import keenImage from '../assets/keen.png'; // Importing image

export default class Hello extends Component {
    render() {
        return (
            <LocaleProvider locale={enUS}>
                <div>
                    Hello from react
                {/* ADDED IN THIS STEP */}
                    {/* <img src={ keenImage } alt='Commander Keen' /> */}
                    <DatePicker />
                </div>
            </LocaleProvider>
        );
    }
}

render(<Hello />, document.getElementById('app'));