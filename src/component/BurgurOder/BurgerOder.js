import React, { Component } from 'react';
import Burger from './Burgers';
import MenuOrderBurger from './MenuOrderBurger';



export default class BurgerOder extends Component {

    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-lg-6 col-12'>
                        {<Burger />}
                    </div>
                    <div className='col-lg-6 col-12'>
                        {<MenuOrderBurger />}
                    </div>
                </div>
            </div>
        )
    }
}

