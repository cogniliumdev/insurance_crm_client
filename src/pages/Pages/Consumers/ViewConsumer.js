import { Card, CardBody, Col, List, Progress, Row, Table } from "reactstrap";
import SimpleBar from "simplebar-react";
import FeatherIcon from 'feather-icons-react';
import { Link, useParams } from "react-router-dom";
import { useGetSingleConsumerQuery } from "../../../api/consumers"



const ViewConsumer = () => {

    const { consumerId } = useParams();
    const { data: consumerData } = useGetSingleConsumerQuery(consumerId);
    console.log(consumerData);

    return (<>
        <div className="page-content">
            <Card>
                <CardBody
                    className="d-flex justify-content-between align-items-center"
                >
                    <h4 className="card-title">{consumerData?.title}</h4>
                    <h6 className="d-flex justify-content-center align-items-center">
                        <Link to={`/edit-consumer/${consumerData?.id}`}>
                            Edit Profile
                        </Link>
                        <Link className="ps-2">
                            <FeatherIcon icon="edit-2" size={15} />
                        </Link>
                    </h6>
                </CardBody>
            </Card>

            <Row>
                <Col xxl={4}>
                    <Card>
                        <CardBody>
                            <h5 className="card-title mb-3">Personal</h5>
                            <hr />
                            <div className="table-responsive">
                                <Table className="table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="ps-0" scope="row">Title :</th>
                                            <td className="text-muted">{consumerData?.title}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Birthdate :</th>
                                            <td className="text-muted">{consumerData?.birth_date}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Gender :</th>
                                            <td className="text-muted">{consumerData?.gender}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Height/Weight :</th>
                                            <td className="text-muted">{consumerData?.height_weight}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Tobacco :</th>
                                            <td className="text-muted">{consumerData?.tobacco}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">SSN :</th>
                                            <td className="text-muted">{consumerData?.SSN}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Driver's Lic# :</th>
                                            <td className="text-muted">{consumerData?.drivers_lic}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Driver's Lic State :</th>
                                            <td className="text-muted">{consumerData?.drivers_lic_state}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Citizenship :</th>
                                            <td className="text-muted">{consumerData?.citizenship}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Country Born :</th>
                                            <td className="text-muted">{consumerData?.country_born}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">State Born :</th>
                                            <td className="text-muted">{consumerData?.state_born}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Marital Status :</th>
                                            <td className="text-muted">{consumerData?.marital_status}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Spouse?</th>
                                            <td className="text-muted">{consumerData?.spouse}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Entity Type :</th>
                                            <td className="text-muted">{consumerData?.entity_type}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card>
                        <CardBody>
                            <h5 className="card-title mb-3">Contact</h5>
                            <hr />
                            <div className="table-responsive">
                                <Table className="table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="ps-0" scope="row">Primary Contact :</th>
                                            <td className="text-muted">{consumerData?.primary_contact}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Contact Method :</th>
                                            <td className="text-muted">{consumerData?.contact_method}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Contact Time :</th>
                                            <td className="text-muted">{consumerData?.contact_time}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Primary Phone :</th>
                                            <td className="text-muted">{consumerData?.primary_phone}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Primary Email :</th>
                                            <td className="text-muted">{consumerData?.primary_email}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Home/Primary Address :</th>
                                            <td className="text-muted">{consumerData?.home_primary_address}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                        <CardBody>
                            <h5 className="card-title mb-3">Employment</h5>
                            <hr />
                            <div className="table-responsive">
                                <Table className="table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="ps-0" scope="row">Occupation :</th>
                                            <td className="text-muted">{consumerData?.occupation}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Employer :</th>
                                            <td className="text-muted">{consumerData?.employer}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card>
                        <CardBody>
                            <h5 className="card-title mb-3">Consumer Details</h5>
                            <hr />
                            <div className="table-responsive">
                                <Table className="table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="ps-0" scope="row">Create Date :</th>
                                            <td className="text-muted">{consumerData?.createdAt.split("T")[0]}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Last Contact :</th>
                                            <td className="text-muted">{consumerData?.last_contact}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                        <CardBody>
                            <h5 className="card-title mb-0">Tracking Data</h5>
                            <hr />
                            <div className="table-responsive">
                                <Table className="table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="ps-0" scope="row">Brand :</th>
                                            <td className="text-muted">{consumerData?.brand}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Lead Type :</th>
                                            <td className="text-muted">{consumerData?.lead_type}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Referrer :</th>
                                            <td className="text-muted">{consumerData?.relationship_manager}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Source :</th>
                                            <td className="text-muted">{consumerData?.source}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">IP Address :</th>
                                            <td className="text-muted">{consumerData?.ip_address}</td>
                                        </tr>
                                        <tr>
                                            <th className="ps-0" scope="row">Quoter URL :</th>
                                            <td className="text-muted">{consumerData?.quoter_url}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                        <CardBody>
                            <h5 className="card-title mb-0">Tags</h5>
                            <hr />
                            <div className="table-responsive">
                                <Table className="table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="ps-0" scope="row">Tags:</th>
                                            <td className="text-muted">{consumerData?.quoter_url}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </div>
    </>
    )
};
export default ViewConsumer;