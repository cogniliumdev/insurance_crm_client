import React, { useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { useGetAllConsumersQuery, useDeleteConsumerMutation } from "../../../api/consumers"
import { useHistory } from 'react-router-dom';
import cogoToast from 'cogo-toast';

const Consumers = () => {
    const { data: allConsumers } = useGetAllConsumersQuery();
    const deleteConsumer = useDeleteConsumerMutation();
    const history = useHistory();

    const handelDeleteConsumer = (e, id) => {
        e.preventDefault();
        deleteConsumer.mutate(id)
    };
    useEffect(() => {
        if (deleteConsumer.isSuccess) cogoToast.success(deleteConsumer.data?.successMsg);
        if (deleteConsumer.isError) cogoToast.error("can not delete the consumer");
    }, [deleteConsumer.isError, deleteConsumer.isSuccess])


    const handelEditConsumer = (e, id) => {
        e.preventDefault();
        var consumerObj;
        allConsumers.forEach((consumer) => {
            if (consumer.id == id) consumerObj = consumer;
        })
        history.push({
            pathname: '/edit-consumer',
            state: consumerObj,
        })
    }

    if (allConsumers?.length == 0) {
        return <div className="page-content">
            <div className="flex-shrink-0 text-end">
                <button onClick={() => history.push("/create-consumer")} type="button" className="btn btn-soft-info btn-sm fs-6">
                    <i className="ri-user-add-fill fs-5 align-middle"></i> Add New Consumers
                </button>
            </div>
            <h5 className='text-center'>No Consumers</h5>
        </div>
    }

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
                                                        <Button className='me-2 btn btn-ghost-info' outline color='info' >View</Button>
                                                        <Button onClick={(e) => handelEditConsumer(e, consumer.id)} className='me-2 btn btn-ghost-success' outline color='success' >Edit</Button>
                                                        <Button onClick={(e) => handelDeleteConsumer(e, consumer.id)} color='danger btn btn-ghost-danger' outline>Delete</Button>
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