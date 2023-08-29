import PageTitle from "../../../layouts/PageTitle";
import CreatePopup from "./CreatePopup";

export const CreateTable = () =>{
    return(
        <>            
            <PageTitle activeMenu="Addition" motherMenu="Table" />
            <div className="card">
				<div className="card-header">
					<h4 className="card-title">Add Table</h4>
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
            <CreatePopup />
        </>
    )
}
export default CreateTable;

