import PageTitle from "../../../layouts/PageTitle";
import CreatePopup from "../../../layouts/Popups/tablePopups/CreatePopup";
import React, { useState } from "react";
import './create.css'
import TableComponent from "./TableComponent";
import { tableData } from "./tableData";
import { useEffect } from "react";
import axios from "axios";
import { BackendUrl } from "../../../../urls";
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

    useEffect(() => {
        axios.get(`${BackendUrl}/table/`)
        .then((response) => {
            console.log(response.data);
            setTableList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    const onCreateBtnClick = async (name, trend_tf, breakout_tf, script) => {
        console.log("request to backend");
        try {
          // Create an object with the data you want to send
          const requestData = {
            name: name,
            trend_tf: trend_tf,
            breakout_tf: breakout_tf,
            symbol_list: [script],
            rows:[]
          };
      
          // Send a POST request to the backend
          const response = await axios.post(`${BackendUrl}/table`, requestData);
      
          // Handle the response (e.g., log success message)
          console.log("Table created successfully:", response.data);
      
          // Close the table popup or perform other actions as needed
          handleTablePopupClose();
          window.location.reload()
        } catch (error) {
          console.error("Error creating table:", error);
      
          // Handle the error (e.g., show an error message to the user)
        }
      };
      

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
                        

            {tableList?.map((data, i) => (
                <div key={i}>
                <TableComponent
                    tableId={data.id}
                    tableName={data.name}
                    trendTime={data.trend_tf}
                    breakoutTime={data.breakout_tf}
                    rows = {data.rows}
                />
                </div>
            ))}
        </>
    );
};
export default CreateTable;


  
  