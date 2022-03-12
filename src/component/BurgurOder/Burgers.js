import React, { Component } from 'react'
import { connect } from 'react-redux'

class Burgers extends Component {
    renderBurger = () => {
        let {burger} = this.props;
        let content = [];
        for(let propBurger in burger){
            let burgerLayer = [];
            for(let i = 0; i < burger[propBurger]; i++){
                burgerLayer.push(<div key={i} className={propBurger}></div>)
            }
            content.push(burgerLayer);
        }
        return content;
    }
    render() {
        return (
            <div>
                <h5 className='text-danger text-center'>Bánh burger của bạn</h5>
                <div className='breadTop'>
                </div>
                {this.renderBurger()}
                <div className='breadBottom'>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger
    }
}

export default connect(mapStateToProps, null)(Burgers)

