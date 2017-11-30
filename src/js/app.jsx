import React, { Component } from 'react';
import { render } from 'react-dom';

import 'material-components-web';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },

    cards: {
        display: 'flex',
        flexWrap: 'wrap'
    }
};


export default class Hello extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    }

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    }

    render() {
        return (
            <div>
                <h1>Choose your element</h1>
                <div className="cards" style={styles.cards}>
                    <div className="mdc-card element-card earth">
                        <section className="mdc-card__media">
                            <h1 className="mdc-card__title mdc-card__title--large">Earth</h1>
                            <h2 className="mdc-card__subtitle">A solid decision.</h2>
                        </section>
                        <section className="mdc-card__supporting-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </section>
                    </div>

                    <div className="mdc-card element-card wind">
                        <section className="mdc-card__media">
                            <h1 className="mdc-card__title mdc-card__title--large">Wind</h1>
                            <h2 className="mdc-card__subtitle">Stormy weather ahead.</h2>
                        </section>
                        <section className="mdc-card__supporting-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </section>
                    </div>

                    <div className="mdc-card element-card fire">
                        <section className="mdc-card__media">
                            <h1 className="mdc-card__title mdc-card__title--large">Fire</h1>
                            <h2 className="mdc-card__subtitle">Hot-headed much?</h2>
                        </section>
                        <section className="mdc-card__supporting-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </section>
                    </div>

                    <div className="mdc-card element-card water">
                        <section className="mdc-card__media">
                            <h1 className="mdc-card__title mdc-card__title--large">Water</h1>
                            <h2 className="mdc-card__subtitle">Go with the flow.</h2>
                        </section>
                        <section className="mdc-card__supporting-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </section>
                    </div>
                </div>
                <button className="mdc-fab material-icons" id="demo-absolute-fab" aria-label="Favorite">
                    <span className="mdc-fab__icon">
                        favorite
                  </span>
                </button>
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));