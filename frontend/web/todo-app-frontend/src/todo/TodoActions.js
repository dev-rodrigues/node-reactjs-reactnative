import axios from 'axios';
import { Todo } from '../todo/todo';

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/` : '';
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCH', payload: resp.data }));
    }
}

export const addTodo__ = (description) => {
    const request = axios.post(URL, { description });
    return [
        { type: 'TODO_ADDED', payload: request },
        search()
    ];
}

export const addTodo = (description) => {
    return dispatch => {

        if (description) {
            axios.post(URL, { description })
                .then(resp => dispatch(clear()))
                .then(rep => dispatch(search()));
        }
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch({
                type: 'TODO_MARKED_AS_DONE',
                payload: resp.data
            }))
            .then(resp => dispatch(search()));
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch({
                type: 'TODO_MARKED_AS_PENDING',
                payload: resp.data
            }))
            .then(resp => dispatch(search()));
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()));
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()];
}