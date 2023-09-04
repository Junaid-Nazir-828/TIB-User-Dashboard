import PageTitle from "../../../layouts/PageTitle";
import CreatePopup from "../../../layouts/Popups/tablePopups/CreatePopup";
import React, { useState } from "react";
import './create.css'
import TableComponent from "./TableComponent";
import { tableData } from "./tableData";
// import AddRowPopup from "./AddRowPopup";

export const CreateTable = () => {
    // handle popup
    const [isAddTablePopupOpen, setIsAddTablePopupOpen] = useState(false);
    // const [isAddRowPopupOpen , setisAddRowPopupOpen] = useState(false);

    // handle add table popup
    const handleTablePopupOpen = () => {
        setIsAddTablePopupOpen(true);
    };

    const handleTablePopupClose = () => {
        setIsAddTablePopupOpen(false);
    };

    // handle useState for adding row in table
    // const handleRowPopupOpen = () => {
    //     setisAddRowPopupOpen(true);
    // }

    // const handleRowPopupClose = () => {
    //     setisAddRowPopupOpen(false);
    // }

    // handle add row popup
    // const handleOpenPopup = () => {
    //     setIsPopupOpen(true);
    // };

    // const handleClosePopup = () => {
    //     setIsPopupOpen(false);
    // };

    // getting form data
    

    // handle table addition
    const [tableList , setTableList] = useState([]);

    const onCreateBtnClick = (event) => {
        event.preventDefault();
        console.log("request to backend")
        // setTableList(tableList.concat(<TableComponent key={tableList.length} />))
        handleTablePopupClose();
    }

    return (
        <>
            <PageTitle activeMenu="Addition" motherMenu="Table" />
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Add Table</h4>
                    <button
                        onClick={handleTablePopupOpen}
                        className="btn btn-primary">
                        Add
                    </button>
                </div>
            </div>
            
            {/* Render the popup conditionally */}
            {isAddTablePopupOpen && (
                <div className="popup-container">
                    <div className="popup">                        
                        <CreatePopup handleCloseButton={handleTablePopupClose} handleCreateButton={onCreateBtnClick} />                        
                    </div>
                </div>
            )}
                        

            {tableData.map((data, i) => (
                <div key={i}>
                <TableComponent
                    tableName={data.name}
                    trendTime={data.trend_tf}
                    breakoutTime={data.breakout_t}
                    rows = {data.rows}
                />
                </div>
            ))}
        </>
    );
};
export default CreateTable;


  
  