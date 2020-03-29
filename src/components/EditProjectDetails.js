import React from 'react';
import {connect} from "react-redux";
import {fakeFetchListItems} from '../slices/projectsList';
import {updateState, submitEditResult, fakeUpdateListItems} from '../slices/editProject';

import './ProjectList.css';

class EditProjectDetails extends React.Component {
    handleEditField = (e) => {
        e.persist();
        this.props.dispatch(updateState({fieldName: e.target.name, fieldValue: e.target.value}));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        fakeUpdateListItems(this.props.fields);
        this.props.dispatch(fakeFetchListItems());
        this.props.dispatch(submitEditResult());
    };

    render() {
        const {fields} = this.props;

        return <form onSubmit={this.handleSubmit}>
            <input type="text" name="text" value={fields.text} onChange={this.handleEditField} />
            <br/>
            <input type="text" name="description" value={fields.description} onChange={this.handleEditField}/>
            <input type="submit" value="Send"/>
        </form>;
    }
}

const mapStateToProps = state => {
    return ({
        listItems: state.projectsList.listItems,
        itemDetailId: state.projectsList.detailItemId,
        fields: state.editProject.fields
    });
};

export default connect(mapStateToProps)(EditProjectDetails);
