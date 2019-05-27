import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem() {
        const { del, index } = this.props;
        del(index);
    }
    render() {
        let { content } = this.props;
        return (
            <div onClick={this.deleteItem}>{content}</div >
        );
    }
}

export default TodoItem;