var initialData = {
    comp01: "",
    comp02: "",
}
const myReducer = (state = initialData, action) => {
    switch (action.type) {
        case "comp01":
            state = {
                ...state,
                comp01: action.info,
            };
            break;
        case "comp02":
            state = {
                ...state,
                comp02: action.info,
            };
            break;
    }
    return state;
}

export default myReducer;