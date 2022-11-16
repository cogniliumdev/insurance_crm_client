import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { recentOrders } from "../../../common/data";
import { useGetAllConsumersQuery } from "../../../api/consumers"
import { useHistory } from 'react-router-dom';

const Consumers = () => {
    const { data: allConsumers } = useGetAllConsumersQuery();
    const history = useHistory();
    return <>
        <div className="page-content">
            <Row>
                <Col xl={12}>
                    <Card>
                        <CardHeader className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Consumers</h4>
                            <div className="flex-shrink-0">
                                <button onClick={() => history.push("/create-consumer")} type="button" className="btn btn-soft-info btn-sm fs-6">
                                    <i className="ri-user-add-fill fs-5 align-middle"></i> Add New Consumers
                                </button>
                            </div>
                        </CardHeader>

                        <CardBody>
                            <div className="table-responsive table-card">
                                <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                    <thead className="text-muted table-light">
                                        <tr>
                                            <th scope="col">Consumer Title</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allConsumers?.map((consumer, key) => (
                                            <tr key={key} className="border-bottom">
                                                <td>{consumer.title}</td>
                                                <td>{consumer.primary_email}</td>
                                                <td>
                                                    <div className='d-flex justify-content-start align-items-center'>
                                                        <Button className='me-2' color='info' outline>View</Button>
                                                        <Button className='me-2' color='success' outline>Edit</Button>
                                                        <Button color='danger' outline>Delete</Button>
                                                    </div>
                                                </td>
                                            </tr>))}
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    </>
};

export default Consumers;