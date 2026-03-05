import { createContext, useContext, useReducer } from "react";


const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
};


function cartReducer(state, action) {
    switch (action.type) {

        case "ADD_ITEM": {
            const existingItem = state.items.find((i) => i.id === action.item.id);

            if (existingItem) {
             
                return {
                    ...state,
                    items: state.items.map((i) =>
                        i.id === action.item.id
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + action.item.price,
                };
            }

    
            return {
                ...state,
                items: [...state.items, { ...action.item, quantity: 1 }],
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + action.item.price,
            };
        }

        case "REMOVE_ITEM": {
            const itemToRemove = state.items.find((i) => i.id === action.id);
            if (!itemToRemove) return state;

            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.id),
                totalItems: state.totalItems - itemToRemove.quantity,
                totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
            };
        }

        case "CLEAR_CART":
            return initialState;

        default:
            return state;
    }
}


const CartContext = createContext(null);


export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used inside <CartProvider>");
    }
    return context;
}
