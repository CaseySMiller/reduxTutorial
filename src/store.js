import { createStore, compose } from "redux";
import rootReducer from "./recucer";
import { includeMeaningOfLife, sayHiOnDispatch } from "./exampleAddons/enhancers"

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const store = createStore(rootReducer, composedEnhancer)

export default store
