import React from 'react';
import {connect} from "react-redux";
import ProjectsList from './components/ProjectsList';
import EditProjectDetails from './components/EditProjectDetails';

import './App.css';

function App({editProjectDescription}) {
  return (
    <div className="App">
      {editProjectDescription ? <EditProjectDetails /> : <ProjectsList />}
    </div>
  );
}

const mapStateToProps = state => ({
    editProjectDescription: state.editProject.editProjectDescription
});

export default connect(mapStateToProps)(App);
