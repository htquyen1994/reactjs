const initialState = {
    cart: [{
        id: 1,
        name: "Iphone 12 Pro",
        image: "https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-191020-021004-400x400.png",
        price: 44000000,
        quantity: 3
    }

    ]
}

// Reducer: nhan vao action va xu ly
// export default (state = initialState, action) => {
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // const product = { ...payload, quantity: 1 }
            const cartUpdate = [...state.cart];
            const productFind = cartUpdate.find(item => {
                return item.id === action.payload.id;
            });

            if (productFind) {
                productFind.quantity += 1;
            } else {
                cartUpdate.push(action.payload);
            }
            
            state.cart = cartUpdate;
            return {...state};
        case 'DELETE_ITEM':
            const cartKeep = [...state.cart].filter((item) => {
                return item.id !== action.payload
            });
            state.cart = cartKeep;
            return { ...state };
        
        case 'INCREASE_ENTITY':
            const product = [...state.cart].find((item) => {
                return item.id === action.maSP;
            });
            if (product) {
                if (action.soLuong === -1) {
                    if (product.quantity > 0) {
                        product.quantity -= 1;
                    }
                } else {
                    product.quantity += 1;
                }
            }

            const cartUpdate3 = [...state.cart];
            state.cart = cartUpdate3;
            return {...state};
        default:
            
            return { ...state }
    }
}