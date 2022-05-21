// import { Add } from "../reducer/Constant"
export const add = (timer,data) => {
    return {
        type: "Add",
        payload: {
            id: new Date().getTime(),
            data: data,
            timer:timer
        }
    }
}

export const edit = (id,timer,data) => {
    return {
        type: "UPDATE_TODO",
        payload: {
            id: id,
            data: data,
            timer:timer
        }
    }
}
export const delect = (id) => {
    return {
        type: "Delete",
        payload: {
            id:id
        }
    }
}

