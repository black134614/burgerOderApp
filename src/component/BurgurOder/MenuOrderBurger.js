import React, { Component } from 'react'
import { connect } from 'react-redux'

class MenuOrderBurger extends Component {

    renderMenu = () => {
        let { burger, menu } = this.props;
        let content = [];
        let i = 0;
        for (let propBurger in menu) {
            i++
            content.push(<tr key={i}>
                <th scope="row">{propBurger}</th>
                <th>
                    <button className='btn btn-success btn-sm' style={{ width: 40 }}
                        onClick={() => { this.props.addLayerToBurger(propBurger, true) }}
                    >+</button>
                    <span className='mx-1'>{burger[propBurger]}</span>
                    <button className='btn btn-danger btn-sm' style={{ width: 40 }}
                        onClick={() => { this.props.addLayerToBurger(propBurger, false) }}
                    >-</button>
                </th>
                <td>{menu[propBurger]}</td>
                <td>{menu[propBurger] * burger[propBurger]}</td>
            </tr>);
        }
        return content;
    }

    render() {
        return (
            <div>
                <h5 className='text-center'>Chọn thức ăn</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Thức ăn</th>
                            <th scope="col"></th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu()}
                        <tr>
                            <th colSpan={4} className='text-right'>Tổng cộng: {this.props.total}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLayerToBurger: (propBurger, isAdd) => {
            const action = {
                type: 'ADD_LAYER_TO_BURGER',
                propBurger,
                isAdd
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuOrderBurger)