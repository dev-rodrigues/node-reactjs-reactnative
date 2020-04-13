import React, { Component } from 'react';
import Grid from '../template/grid';
import IconeButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, changeDescription, search, clear } from './TodoActions';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e) {
        const { addTodo, search, clear, description } = this.props;

        if (e.key == 'Enter') {
            e.shiftKey ? search() : addTodo(description);
        } else if (e.key == 'Escape') {
           clear();
        }
    }

    componentWillMount() {
        this.props.search();
    }

    render() {
        const { addTodo, search, description, clear } = this.props;

        return (
            <div role='form' className='todoForm'>

                <Grid cols='12 9 10'>
                    <input
                        id='description'
                        className='form-control'
                        placeholder='Adicionar uma tarefa'
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler} />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconeButton
                        style='primary'
                        icone='plus'
                        onClick={() => addTodo(description)} />
                    <IconeButton
                        style='info'
                        icone='search'
                        onClick={search} />

                    <IconeButton
                        style='deafult'
                        icone='close'
                        onClick={() => clear()} />
                </Grid>

            </div>
        );
    }
}

// metodo que mapeia o estado
// padrão decorator
const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ addTodo, changeDescription, search, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)