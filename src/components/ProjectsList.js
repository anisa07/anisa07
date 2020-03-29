import React from 'react';
import {connect} from "react-redux";
import ProjectDetails from './ProjectDetails';
import {fakeFetchListItems, hideItem, getItem} from '../slices/projectsList';
import {editDescription} from '../slices/editProject';

import './ProjectList.css';

class ProjectsList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fakeFetchListItems());
    }

    showDescription = (id) => {
        const {dispatch} = this.props;
        dispatch(hideItem());
        dispatch(getItem(id));
    };

    editDetail = (item) => {
        const {dispatch} = this.props;

        dispatch(editDescription(item));
    };

    render() {
        const {listItems, listItemsNums} = this.props;

        return <ul>
            {listItemsNums.map((itemId => this.renderListItem(listItems[itemId])))}
        </ul>;
    }

    renderListItem = (item) => {
        const {itemDetailId, showDetail, listItems} = this.props;

        return (<li key={item.id} className="project">
            <a onClick={() => {this.showDescription(item.id)}}><h3>{item.text}</h3></a>
            { showDetail && item.id === itemDetailId
            && <ProjectDetails itemDetail={listItems[itemDetailId]} handleEditDetail={this.editDetail} />}
        </li>)
    };
}

const mapStateToProps = state => {
    return ({
        listItems: state.projectsList.listItems,
        listItemsNums: state.projectsList.listItemsNums,
        showDetail: state.projectsList.showDetail,
        itemDetailId: state.projectsList.detailItemId
    });
};

export default connect(mapStateToProps)(ProjectsList);
