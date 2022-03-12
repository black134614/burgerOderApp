const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: { salad: 10, cheese: 20, beef: 55 },
    total: 85
}

export const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'ADD_LAYER_TO_BURGER': {
            let { propBurger, isAdd } = action;
            let burgerUdate = { ...state.burger };
            if (isAdd) {
                burgerUdate[propBurger]++;
                state.total += state.menu[propBurger];
            }
            else {
                if (burgerUdate[propBurger] === 1) {
                    return { ...state };
                }
                burgerUdate[propBurger]--;
                state.total -= state.menu[propBurger];
            }

            state.burger = burgerUdate;
            return { ...state };
        }
        default:
    }

    return { ...state };
}