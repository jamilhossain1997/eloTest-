// import {Add} from './Constant'
const initialData = {
    list: []
}

const todoReducers = (state = initialData, action) => {
    let newTodos;
    switch (action.type) {

        case "Add":
            const { id, data,timer} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        list: data,
                        timer:timer
                    }
                ]

            }

            case "UPDATE_TODO":
                newTodos = [...state];
                let index = -1;
                for (let i = 0; i < newTodos.length; i++) {
                    index++;
                    if (newTodos[i].id == action.payload.id) {
                        break;
                    }
    
                }
                if (index != -1) {
                    newTodos[index] = action.payload;
                    return newTodos;
                }

        case "Delete":
            const newList = state.list.filter((item) => item.id !== action.payload.id);
            return {
                ...state.list,
                list: newList
            }

        

        default: return state;
    }
}

export default todoReducers