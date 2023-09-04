import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";

import { useState } from "react";
import AddRowPopup from "../../../layouts/Popups/tablePopups/AddRowPopup";
import "./create.css";
import ConfirmationPopup from "../../../layouts/Popups/tablePopups/ConfirmationPopup";

const svg1 = (
  <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect x="0" y="0" width="24" height="24"></rect>
      <circle fill="#000000" cx="5" cy="12" r="2"></circle>
      <circle fill="#000000" cx="12" cy="12" r="2"></circle>
      <circle fill="#000000" cx="19" cy="12" r="2"></circle>
    </g>
  </svg>
);

const TableComponent = ({ tableName, trendTime, breakoutTime, rows }) => {
  const [isAddRowPopupOpen, setisAddRowPopupOpen] = useState(false);
  const [isDeleteTablePopupOpen, setisDeleteTablePopupOpen] = useState(false);
  const [isTableCollapsed, setIsTableCollapsed] = useState(true); // State to track table collapse/expand

  const toggleTableCollapse = () => {
    setIsTableCollapsed(!isTableCollapsed); // Toggle the collapse state
  };

  const handleRowPopupOpen = () => {
    setisAddRowPopupOpen(true);
  };

  const handleRowPopupClose = () => {
    setisAddRowPopupOpen(false);
  };

  const handleDeletePopupOpen = () => {
    setisDeleteTablePopupOpen(true);
  };

  const handleDeletePopupClose = () => {
    setisDeleteTablePopupOpen(false);
  };

  const textForDeletePopup = "Are you sure you want to delete this table?";

  return (
    <>
      <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>
              <span
                className="clickable"
                style={{cursor: "pointer"}}
                onClick={toggleTableCollapse}
                aria-controls="example-collapse-text"
                aria-expanded={isTableCollapsed}
              >
                              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                
                viewBox="0 0 16 16"
                style={{
                  marginRight: "10px",
                  transform: isTableCollapsed ? "rotate(-90deg)" : "rotate(0deg)",
                  transition: "transform 0.1s ease",
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 5.646a.5.5 0 01.708 0L8 11.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                />
              </svg>

                {tableName} - Trend: {trendTime} min - Breakout: {breakoutTime}{" "}
                min
              </span>
            </Card.Title>
            <div>
              <button
                className="btn btn-primary"
                style={{ marginRight: "10px" }}
                onClick={handleRowPopupOpen}
              >
                Add Row
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDeletePopupOpen}
              >
                Delete Table
              </button>
            </div>
          </Card.Header>
          {!isTableCollapsed && ( // Render the table only if it's not collapsed
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="width80">
                      <strong>#</strong>
                    </th>
                    <th>
                      <strong>SCRIPT</strong>
                    </th>
                    <th>
                      <strong>CMP</strong>
                    </th>
                    <th>
                      <strong>Expiry Date</strong>
                    </th>
                    <th>
                      <strong>LH LEVEL</strong>
                    </th>
                    <th>
                      <strong>HL LEVEL</strong>
                    </th>
                    <th>
                      <strong>BUY / SELL</strong>
                    </th>
                    <th>
                      <strong>STRIKE PRICE</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((rowData, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{index + 1}</strong>
                      </td>
                      <td>{rowData.symbol}</td>
                      <td>{rowData.cmp}</td>
                      <td>{rowData.expiry_date}</td>
                      <td>
                        {rowData.lh.map((lh, index) => (
                          <div key={index}>{lh}</div>
                        ))}
                      </td>
                      <td>
                        {rowData.hl.map((hl, index) => (
                          <div key={index}>{hl}</div>
                        ))}
                      </td>
                      <td>
                        <span
                          className={`badge light badge-${
                            rowData.view === "buy"
                              ? "success"
                              : rowData.view === "sell"
                              ? "danger"
                              : "warning"
                          }`}
                        >
                          {rowData.view}
                        </span>
                      </td>
                      <td>{rowData.strike_price}</td>
                      {/* <td>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            className="light sharp i-false"
                          >
                            {svg1}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>Edit</Dropdown.Item>
                            <Dropdown.Item>Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          )}
        </Card>
      </Col>

      {isAddRowPopupOpen && (
        <div className="popup-container">
          <div className="popup">
            <div className="modal-content">
              <AddRowPopup
                handleCloseButton={handleRowPopupClose}
                handleAddRowButton={() => {}}
              />
            </div>
          </div>
        </div>
      )}

      {isDeleteTablePopupOpen && (
        <div className="popup-container">
          <div className="popup">
            <div className="modal-content">
              <ConfirmationPopup
                text={textForDeletePopup}
                handleCloseButton={handleDeletePopupClose}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableComponent;
