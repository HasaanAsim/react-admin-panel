import React from "react";
import{Card,Row,Col} from "react-bootstrap";
import Sidebar from "./sidebar";
import "./dashboard.css"

const Dashboard=()=>{
    const stats=[
        {title: "Total Users", value: 7},
        {title: "Total Active Users", value: 6},
        {title: "Total White Pearl Users", value: 2},
        {title: "Total Black Pearl Users", value: 4},
        {title: "New Users", value: 5},
        {title: "New Events", value: 5},
        {title: "Total Events", value: 19}
    ];
    return(
        
        <div className=" container2">
            <div>
                <Sidebar/>
            </div>
        <div className="heading">
            <div className="adminHead p-3 shadow-sm border-top border-bottom">
                <h5>
                    Pearl Admin
                </h5>

                <button className="btn btn-light btn-sm">Logout</button>
            </div>
            <h2>
                Dashboard
            </h2>
            <Row className="rowBody shadow-sm">
                {stats.map((stat,index)=>
                <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="card mb-6 shadow-sm">
                        <Card.Body>
                            <Card.Title className="titleCard">
                                {stat.title}
                                </Card.Title>
                            <Card.Text>
                                {stat.value}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                )}
            </Row>
            </div>
        </div>


    )
}
export default Dashboard;