import React, { Component } from 'react';
import * as actions from '../actions/ItemAction'
import Items from '../components/Items'
import {connect} from 'react-redux'

class ItemContainer extends Component {
    componentDidMount() {
        this.props.getItems()
    }
    render() {
        return (
            <div>
                <Items {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items.listItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getItems: (data) => {
            dispatch(actions.getRequest(data))
        },
        addItems : (data) => {
            dispatch(actions.addRequest(data))
        },
        deleteItems : (data) => {
            dispatch(actions.deleteRequest(data))
        },
        updateItems : (data) => {
            dispatch(actions.updateRequest(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)