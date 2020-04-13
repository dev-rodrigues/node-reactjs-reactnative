import React from 'react';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markAsDone, markAsPending, remove } from '../todo/TodoActions';

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>

                <td className='tdButton'>
                    <IconButton
                        style='success'
                        icone='check'
                        hide={todo.done}
                        onClick={() => props.markAsDone(todo)} />
                    <IconButton
                        style='warning'
                        icone='undo'
                        hide={!todo.done}
                        onClick={() => props.markAsPending(todo)} />

                    <IconButton
                        style='danger'
                        icone='trash-o'
                        hide={!todo.done}
                        onClick={() => props.remove(todo)} />

                </td>
            </tr>
        ));
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

// metodo que mapeia o estado
// padrão decorator
const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)