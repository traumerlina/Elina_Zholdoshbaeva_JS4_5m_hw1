export function reducer (state = {count: 0}, action) {
    if (action.type === "CHANGE_TITLE") {
        return {...state, title: "react - redux"}
    }
    else if (action.type === "INCREMENT") {
        return {...state, count: state.count + 1}
    }
    else if (action.type === "TITLE_WITH_PARAMS") {
        return {...state, title: action.payload}
    }

    // else if (action.type === "ADD_USER") {
    //     return {...state, title: action.payload}
    // }

    else if (action.type === "ADD_COUNT") {
        return {...state, count: state.count + action.payload}
    }

    else {
        return state
    }
}