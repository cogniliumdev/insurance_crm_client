import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import UserContactsForm from "../../../../Components/UserContactsForm/UserContactsForm"
import cogoToast from 'cogo-toast';

//import images
import progileBg from '../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';

// import api hooks
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from "../../../../api/userProfile";
import { useGetUserAssistantQuery, useUpdateUserAssistantMutation } from "../../../../api/userAssistant";

const EditProfile = () => {
    document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";

    const { data: profileData } = useGetUserProfileQuery();
    const { data: assistantData } = useGetUserAssistantQuery();
    const updateProfile = useUpdateUserProfileMutation();
    const updateAssistant = useUpdateUserAssistantMutation();

    // Profile data states 
    const [title, setTitle] = useState();
    const [company, setCompany] = useState();
    const [timezone, setTimezone] = useState();
    const [SSN, setSSN] = useState();
    const [birthDate, setBirthDate] = useState();
    const [TIN, setTIN] = useState();
    const [licenseTypes, setLicenseTypes] = useState();
    const [brokerDealer, setBrokerDealer] = useState();
    const [relationshipManager, setRelationshipManager] = useState();
    const [paymentPlan, setPaymentPlan] = useState();
    const [compLevel, setCompLevel] = useState();
    const [subdomain, setSubdomain] = useState();

    // Assistant data states 
    const [assistantName, setAssistantName] = useState();
    const [assistantEmail, setAssistantEmail] = useState();
    const [assistantPhone, setAssistantPhone] = useState();

    const [activeTab, setActiveTab] = useState("1");


    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const updateProfileDataObj = { title, company, timezone, SSN, birth_date: birthDate, TIN, license_types: licenseTypes, broker_dealer: brokerDealer, relationship_manager: relationshipManager, payment_plan: paymentPlan, comp_level: compLevel, subdomain }
    const updateAssistantDataObj = { name: assistantName, phone: assistantPhone, email: assistantEmail };

    const handelUpdateProfile = (e) => {
        e.preventDefault();
        updateProfile.mutate(updateProfileDataObj);
    };

    const handelUpdateAssistant = (e) => {
        e.preventDefault();
        updateAssistant.mutate(updateAssistantDataObj);
    };

    useEffect(() => {
        if (updateProfile.isSuccess) cogoToast.success(updateProfile.data?.successMsg);
        if (updateProfile.isError) cogoToast.error("Can not update user profile");
    }, [updateProfile.isSuccess, updateProfile.isError]);

    useEffect(() => {
        if (updateAssistant.isSuccess) cogoToast.success(updateAssistant.data?.successMsg);
        if (updateAssistant.isError) cogoToast.error("Can not update user Assistant");
    }, [updateAssistant?.isError, updateAssistant?.isSuccess]);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg profile-setting-img">
                            <img src={progileBg} className="profile-wid-img" alt="" />
                            <div className="overlay-content">
                                <div className="text-end p-3">
                                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                        <Input id="profile-foreground-img-file-input" type="file"
                                            className="profile-foreground-img-file-input" />
                                        <Label htmlFor="profile-foreground-img-file-input"
                                            className="profile-photo-edit btn btn-light">
                                            <i className="ri-image-edit-line align-bottom me-1"></i> Change Cover
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col xxl={3}>
                            <Card className="mt-n5">
                                <CardBody className="p-4">
                                    <div className="text-center">
                                        <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                            <img src={avatar1}
                                                className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                alt="user-profile" />
                                            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <Input id="profile-img-file-input" type="file"
                                                    className="profile-img-file-input" />
                                                <Label htmlFor="profile-img-file-input"
                                                    className="profile-photo-edit avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                        <i className="ri-camera-fill"></i>
                                                    </span>
                                                </Label>
                                            </div>
                                        </div>
                                        <h5 className="fs-16 mb-1">Anna Adame</h5>
                                        <p className="text-muted mb-0">Lead Designer / Developer</p>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Complete Your Profile</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link to="#" className="badge bg-light text-primary fs-12"><i
                                                className="ri-edit-box-line align-bottom me-1"></i> Edit</Link>
                                        </div>
                                    </div>
                                    <div className="progress animated-progress custom-progress progress-label">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ "width": "30%" }}
                                            aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                            <div className="label">30%</div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Portfolio</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link to="#" className="badge bg-light text-primary fs-12"><i
                                                className="ri-add-fill align-bottom me-1"></i> Add</Link>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                                <i className="ri-github-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="email" className="form-control" id="gitUsername" placeholder="Username"
                                            defaultValue="@daveadame" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-primary">
                                                <i className="ri-global-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="websiteInput"
                                            placeholder="www.example.com" defaultValue="www.velzon.com" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-success">
                                                <i className="ri-dribbble-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="dribbleName" placeholder="Username"
                                            defaultValue="@dave_adame" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                <i className="ri-pinterest-fill"></i>
                                            </span>
                                        </div>
                                        <Input type="text" className="form-control" id="pinterestName"
                                            placeholder="Username" defaultValue="Advance Dave" />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xxl={9}>
                            <Card className="mt-xxl-n5">
                                <CardHeader>
                                    <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" }, "text-body")}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}>
                                                <i className="fas fa-home"></i>
                                                Personal
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "2" }, "text-body")}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                <i className="far fa-user"></i>
                                                Contact
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "3" }, "text-body")}
                                                onClick={() => {
                                                    tabChange("3");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Account
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "4" }, "text-body")}
                                                onClick={() => {
                                                    tabChange("4");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Assistant
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody className="p-4">

                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <Form>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Title
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your firstname" defaultValue={profileData?.title}
                                                                onChange={(e) => setTitle(e.target.value)}
                                                            />

                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lastnameInput" className="form-label">
                                                                Company
                                                            </Label>
                                                            <Input type="text" className="form-control" id="lastnameInput"
                                                                placeholder="Enter your lastname" defaultValue={profileData?.company}
                                                                onChange={(e) => setCompany(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="phonenumberInput" className="form-label">
                                                                Timezone
                                                            </Label>
                                                            <Input type="text" className="form-control"
                                                                id="phonenumberInput"
                                                                placeholder="Enter your phone number"
                                                                defaultValue={profileData?.timezone}
                                                                onChange={(e) => setTimezone(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="emailInput" className="form-label">
                                                                SSN
                                                            </Label>
                                                            <Input type="email" className="form-control" id="emailInput"
                                                                placeholder="Enter your email"
                                                                defaultValue={profileData?.SSN}
                                                                onChange={(e) => setSSN(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="JoiningdatInput" className="form-label">
                                                                Birth date
                                                            </Label>
                                                            <Flatpickr
                                                                className="form-control"
                                                                options={{
                                                                    dateFormat: "d M, Y"
                                                                }}
                                                                value={profileData?.birth_date}
                                                                onChange={(e) => setBirthDate(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="emailInput" className="form-label">
                                                                TIN
                                                            </Label>
                                                            <Input type="email" className="form-control" id="emailInput"
                                                                placeholder="Enter your email"
                                                                defaultValue={profileData?.TIN}
                                                                onChange={(e) => setTIN(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="designationInput"
                                                                className="form-label">License Types</Label>
                                                            <Input type="text" className="form-control"
                                                                id="designationInput" placeholder="Designation"
                                                                defaultValue={profileData?.license_types}
                                                                onChange={(e) => setLicenseTypes(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="websiteInput1"
                                                                className="form-label">Broker Dealer</Label>
                                                            <Input type="text" className="form-control" id="websiteInput1"
                                                                placeholder="www.example.com" defaultValue={profileData?.broker_dealer}
                                                                onChange={(e) => setBrokerDealer(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button onClick={(e) => handelUpdateProfile(e)} className="btn btn-primary">
                                                                Updates
                                                            </button>
                                                            <button onClick={() => tabChange("2")} type="button" className="btn btn-soft-success">
                                                                Next
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <UserContactsForm profileData={profileData} tabChange={tabChange} />
                                        </TabPane>

                                        <TabPane tabId="3">
                                            <form>
                                                <div id="newlink">
                                                    <div id="1">
                                                        <Row>

                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="websiteInput1"
                                                                        className="form-label">Relationship Manager</Label>
                                                                    <Input type="text" className="form-control" id="websiteInput1"
                                                                        placeholder="www.example.com" defaultValue={profileData?.relationship_manager}
                                                                        onChange={(e) => setRelationshipManager(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="designationInput"
                                                                        className="form-label">Payment Plan</Label>
                                                                    <Input type="text" className="form-control"
                                                                        id="designationInput" placeholder="Designation"
                                                                        defaultValue={profileData?.payment_plan}
                                                                        onChange={(e) => setPaymentPlan(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="websiteInput1"
                                                                        className="form-label">Comp Level</Label>
                                                                    <Input type="text" className="form-control" id="websiteInput1"
                                                                        placeholder="www.example.com" defaultValue={profileData?.comp_level}
                                                                        onChange={(e) => setCompLevel(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="websiteInput1"
                                                                        className="form-label">Subdomain</Label>
                                                                    <Input type="text" className="form-control" id="websiteInput1"
                                                                        placeholder="www.example.com" defaultValue={profileData?.subdomain}
                                                                        onChange={(e) => setSubdomain(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div id="newForm" style={{ "display": "none" }}>
                                                </div>

                                                <Col lg={12}>
                                                    <div className="hstack gap-2 justify-content-end">
                                                        <button onClick={e => handelUpdateProfile(e)} className="btn btn-primary">
                                                            Updates
                                                        </button>
                                                        <button onClick={() => tabChange("2")} type="button" className="btn btn-soft-success">
                                                            Previous
                                                        </button>
                                                        <button onClick={() => tabChange("4")} type="button" className="btn btn-soft-success">
                                                            Next
                                                        </button>
                                                    </div>
                                                </Col>
                                            </form>

                                        </TabPane>

                                        <TabPane tabId="4">
                                            <Form>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Name
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your firstname" defaultValue={assistantData?.name}
                                                                onChange={(e) => setAssistantName(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lastnameInput" className="form-label">
                                                                Email
                                                            </Label>
                                                            <Input type="text" className="form-control" id="lastnameInput"
                                                                placeholder="Enter your lastname" defaultValue={assistantData?.email}
                                                                onChange={(e) => setAssistantEmail(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="phonenumberInput" className="form-label">
                                                                Phone
                                                            </Label>
                                                            <Input type="text" className="form-control"
                                                                id="phonenumberInput"
                                                                placeholder="Enter your phone number"
                                                                defaultValue={assistantData?.phone}
                                                                onChange={(e) => setAssistantPhone(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button onClick={(e) => handelUpdateAssistant(e)} className="btn btn-primary">
                                                                Updates
                                                            </button>
                                                            <button onClick={() => tabChange("3")} type="button" className="btn btn-soft-success">
                                                                Previous
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default EditProfile;