
import { legacy_createStore as createStore } from "redux";
import myReducer from "../Reducers/myReducer";

let myStore = createStore(myReducer);

myStore.subscribe(() => {
    console.log(myStore.getState());
})

export default myStore;