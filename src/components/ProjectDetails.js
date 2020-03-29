import React from 'react';

const ProjectDetails = ({itemDetail, handleEditDetail}) => <div>
    { itemDetail.description }
    <button onClick={() => {handleEditDetail(itemDetail)}}>Edit Details</button>
</div>;

export default ProjectDetails;
