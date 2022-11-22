import { Card, CardBody, Col, List, Progress, Row, Table } from "reactstrap";
import SimpleBar from "simplebar-react";
import FeatherIcon from 'feather-icons-react';
import { Link } from "react-router-dom";


const ProfileView = ({ profileData, assistantData }) => {
    return (<>
        <Card>
            <CardBody
                className="d-flex justify-content-between align-items-center"
            >
                <h4 className="card-title">Profile View</h4>
                <h6 className="d-flex justify-content-center align-items-center">
                    <Link to={"/pages-profile-edit-profile"}>
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
                        <div className="table-responsive">
                            <Table className="table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th className="ps-0" scope="row">Title :</th>
                                        <td className="text-muted">{profileData?.title}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Company :</th>
                                        <td className="text-muted">{profileData?.company}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Timezone :</th>
                                        <td className="text-muted">{profileData?.timezone}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">SSN :</th>
                                        <td className="text-muted">{profileData?.SSN}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">TIN</th>
                                        <td className="text-muted">{profileData?.SSN}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Birthdate</th>
                                        <td className="text-muted">{profileData?.birth_date}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">License Types</th>
                                        <td className="text-muted">{profileData?.license_types}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Broker Dealer</th>
                                        <td className="text-muted">{profileData?.broker_dealer}</td>
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
                        <div className="table-responsive">
                            <Table className="table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th className="ps-0" scope="row">Phones :</th>
                                        <td className="text-muted">

                                            {profileData?.phones?.length <= 2 ?
                                                (
                                                    <>
                                                        {profileData?.phones?.map((phone, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {phone.phone}
                                                                <FeatherIcon icon="phone" size={15} />
                                                            </p>
                                                        })}
                                                    </>
                                                ) : (
                                                    <SimpleBar style={{ maxHeight: 42 }}>
                                                        {profileData?.phones?.map((phone, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {phone.phone}
                                                                <FeatherIcon icon="phone" size={15} />
                                                            </p>
                                                        })}
                                                    </SimpleBar>
                                                )
                                            }

                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Email Address :</th>
                                        <td className="text-muted">
                                            {profileData?.emails?.length <= 2 ?
                                                (
                                                    <>
                                                        {profileData?.emails?.map((email, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {email.email}
                                                                <FeatherIcon icon="mail" size={15} />
                                                            </p>
                                                        })}
                                                    </>
                                                ) : (
                                                    <SimpleBar style={{ maxHeight: 42 }}>
                                                        {profileData?.emails?.map((email, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {email.email}
                                                                <FeatherIcon icon="mail" size={15} />
                                                            </p>
                                                        })}
                                                    </SimpleBar>
                                                )
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Website :</th>
                                        <td className="text-muted">
                                            {profileData?.websites?.length <= 2 ?
                                                (
                                                    <>
                                                        {profileData?.websites?.map((website, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {website.website}
                                                                <FeatherIcon icon="globe" size={15} />
                                                            </p>
                                                        })}
                                                    </>
                                                ) : (
                                                    <SimpleBar style={{ maxHeight: 42 }}>
                                                        {profileData?.websites?.map((website, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {website.website}
                                                                <FeatherIcon icon="globe" size={15} />
                                                            </p>
                                                        })}
                                                    </SimpleBar>
                                                )
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Address :</th>
                                        <td className="text-muted">
                                            {profileData?.addresses?.length <= 2 ?
                                                (
                                                    <>
                                                        {profileData?.addresses?.map((address, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {address.address}
                                                                <FeatherIcon icon="map-pin" size={18} />
                                                            </p>
                                                        })}
                                                    </>
                                                ) : (
                                                    <SimpleBar style={{ maxHeight: 90 }}>
                                                        {profileData?.addresses?.map((address, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {address.address}
                                                                <FeatherIcon icon="map-pin" size={18} />
                                                            </p>
                                                        })}
                                                    </SimpleBar>
                                                )
                                            }

                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Social</th>
                                        <td className="text-muted">
                                            {profileData?.socials?.length <= 2 ?
                                                (
                                                    <>
                                                        {profileData?.socials?.map((social, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {social.social}
                                                                <FeatherIcon icon="globe" size={15} />
                                                            </p>
                                                        })}
                                                    </>
                                                ) : (
                                                    <SimpleBar style={{ maxHeight: 42 }}>
                                                        {profileData?.socials?.map((social, index) => {
                                                            return <p
                                                                key={index}
                                                                className="d-flex justify-content-between align-items-center mb-1 pe-3"
                                                            >
                                                                - {social.social}
                                                                <FeatherIcon icon="globe" size={15} />
                                                            </p>
                                                        })}
                                                    </SimpleBar>
                                                )
                                            }
                                        </td>
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
                        <h5 className="card-title mb-3">Account</h5>
                        <div className="table-responsive">
                            <Table className="table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th className="ps-0" scope="row">Relationship Manager :</th>
                                        <td className="text-muted">{profileData?.relationship_manager}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Payment Plan :</th>
                                        <td className="text-muted">{profileData?.payment_plan}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Comp Level :</th>
                                        <td className="text-muted">{profileData?.comp_level}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Subdomain</th>
                                        <td className="text-muted">{profileData?.subdomain}</td>
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
                        <h5 className="card-title mb-3">Assistant</h5>
                        <div className="table-responsive">
                            <Table className="table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th className="ps-0" scope="row">Name :</th>
                                        <td className="text-muted">{assistantData?.name}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Phone :</th>
                                        <td className="text-muted">{assistantData?.phone}</td>
                                    </tr>
                                    <tr>
                                        <th className="ps-0" scope="row">Email :</th>
                                        <td className="text-muted">{assistantData?.email}</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </>

    )
};
export default ProfileView;