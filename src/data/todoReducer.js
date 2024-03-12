
export const todoReducer = (initialState = [], action) => {


    switch (action.type) {
        case "eliminar":
            
            initialState = JSON.parse(localStorage.getItem("clientes"));
            console.log(initialState, "initial");
            console.log(action.payload, "payoad")
            let filtrado = initialState.filter(ele => ele.numeroCliente != action.payload)
            console.log(filtrado)
            return [...filtrado];
        case "editar":
            console.log(initialState,"cambio");
            console.log(action.payload.posicion,)
            initialState[action.payload.posicion] = action.payload.cliente
            return [...initialState]

        default:
            return initialState;
    }


}
