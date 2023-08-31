import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Dropdown,
    ProgressBar,
  } from "react-bootstrap";
  
export const AddTable = () => {
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
      
    return (
        <>
        <Col lg={12}>
        <Card>
          <Card.Header>
            <Card.Title>Table Name</Card.Title>
          </Card.Header>
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
                <tr>
                  <td>
                    <strong>01</strong>
                  </td>
                  <td>Mr. Bobby</td>
                  <td>Dr. Jackson</td>
                  <td>01 August 2022</td>
                  <td>$21.56</td>
                  <td>
                    <span  className="badge light badge-success">Buy</span>
                  </td>
                  <td>
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
                  </td>
                </tr>                
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
        </>
    )
}

export default AddTable;