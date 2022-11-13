import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import CreateUserContactsForm from "../../../../Components/CreateUserContactsForm/CreateUserContactsForm"
import cogoToast from 'cogo-toast';

//import images
import progileBg from '../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';

// import api hooks
import { useCreateUserProfileMutation } from "../../../../api/userProfile";

const CreateProfile = () => {
    document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";

    const localProfileData = JSON.parse(localStorage.getItem("userProfile"));
    const createProfile = useCreateUserProfileMutation();

    // Profile data states 
    const [title, setTitle] = useState(localProfileData?.title);
    const [company, setCompany] = useState(localProfileData?.company);
    const [timezone, setTimezone] = useState(localProfileData?.timezone);
    const [SSN, setSSN] = useState(localProfileData?.SSN);
    const [birthDate, setBirthDate] = useState(localProfileData?.birthDate);
    const [TIN, setTIN] = useState(localProfileData?.TIN);
    const [licenseTypes, setLicenseTypes] = useState(localProfileData?.licenseTypes);
    const [brokerDealer, setBrokerDealer] = useState(localProfileData?.brokerDealer);
    const [relationshipManager, setRelationshipManager] = useState(localProfileData?.relationshipManager);
    const [paymentPlan, setPaymentPlan] = useState(localProfileData?.paymentPlan);
    const [compLevel, setCompLevel] = useState(localProfileData?.compLevel);
    const [subdomain, setSubdomain] = useState(localProfileData?.subdomain);

    // Assistant data states 
    const [assistantName, setAssistantName] = useState(localProfileData?.assistantName);
    const [assistantEmail, setAssistantEmail] = useState(localProfileData?.assistantEmail);
    const [assistantPhone, setAssistantPhone] = useState(localProfileData?.assistantPhone);

    const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };


    const handelPersonal = (e) => {
        e.preventDefault();
        const personalData = { ...localProfileData, title, company, timezone, SSN, birthDate, TIN, licenseTypes, brokerDealer };
        localStorage.setItem("userProfile", JSON.stringify(personalData));
        tabChange("2");
    }

    const handelAccount = (e, tab) => {
        e.preventDefault();
        const accountData = { ...localProfileData, relationshipManager, compLevel, paymentPlan, subdomain };
        localStorage.setItem("userProfile", JSON.stringify(accountData));
        tabChange(tab);
    }

    const handelAssistant = (e) => {
        e.preventDefault();
        const assistantData = { ...localProfileData, assistantEmail, assistantName, assistantPhone };
        localStorage.setItem("userProfile", JSON.stringify(assistantData));
        tabChange("3");
    }

    const handelCreateProfile = (e) => {
        e.preventDefault();
        const assistantData = { ...localProfileData, assistantEmail, assistantName, assistantPhone };
        localStorage.setItem("userProfile", JSON.stringify(assistantData));
        const localProfileData2 = JSON.parse(localStorage.getItem("userProfile"));
        createProfile.mutate(localProfileData2);
    };

    useEffect(() => {
        if (createProfile.isSuccess) cogoToast.success(createProfile.data?.successMsg);
        if (createProfile.isError) cogoToast.error("Can not create profile");
    }, [createProfile?.isError, createProfile?.isSuccess]);

    console.log(birthDate);
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
                                        <NavItem >
                                            <NavLink
                                                // disabled
                                                className={classnames({ active: activeTab === "1" }, "text-body")}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}>
                                                <i className="fas fa-home"></i>
                                                Personal
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                // disabled
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
                                            <NavLink
                                                // disabled
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
                                            <NavLink
                                                // disabled
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
                                                                placeholder="Enter your firstname"
                                                                onChange={e => setTitle(e.target.value)}
                                                                defaultValue={title}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lastnameInput" className="form-label">
                                                                Company
                                                            </Label>
                                                            <Input type="text" className="form-control" id="lastnameInput"
                                                                placeholder="Enter your lastname"
                                                                onChange={e => setCompany(e.target.value)}
                                                                defaultValue={company}
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
                                                                onChange={e => setTimezone(e.target.value)}
                                                                defaultValue={timezone}
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
                                                                onChange={e => setSSN(e.target.value)}
                                                                defaultValue={SSN}
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
                                                                    // dateFormat: "d M, Y"
                                                                    dateFormat: "M d, Y"
                                                                }}
                                                                defaultValue={birthDate}
                                                                onChange={([date]) => {
                                                                    setBirthDate(date.toLocaleDateString());
                                                                }}
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
                                                                onChange={(e) => setTIN(e.target.value)}
                                                                defaultValue={TIN}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="designationInput"
                                                                className="form-label">License Types</Label>
                                                            <Input type="text" className="form-control"
                                                                id="designationInput" placeholder="Designation"
                                                                onChange={e => setLicenseTypes(e.target.value)}
                                                                defaultValue={licenseTypes}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="websiteInput1"
                                                                className="form-label">Broker Dealer</Label>
                                                            <Input type="text" className="form-control" id="websiteInput1"
                                                                placeholder="www.example.com"
                                                                onChange={e => setBrokerDealer(e.target.value)}
                                                                defaultValue={brokerDealer}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button onClick={(e) => handelPersonal(e)} type="button" className="btn btn-soft-success">
                                                                Next
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <CreateUserContactsForm tabChange={tabChange} />
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
                                                                        placeholder="www.example.com"
                                                                        onChange={e => setRelationshipManager(e.target.value)}
                                                                        defaultValue={relationshipManager}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="designationInput"
                                                                        className="form-label">Payment Plan</Label>
                                                                    <Input type="text" className="form-control"
                                                                        id="designationInput" placeholder="Designation"
                                                                        onChange={e => setPaymentPlan(e.target.value)}
                                                                        defaultValue={paymentPlan}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="websiteInput1"
                                                                        className="form-label">Comp Level</Label>
                                                                    <Input type="text" className="form-control" id="websiteInput1"
                                                                        placeholder="www.example.com"
                                                                        onChange={e => setCompLevel(e.target.value)}
                                                                        defaultValue={compLevel}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="websiteInput1"
                                                                        className="form-label">Subdomain</Label>
                                                                    <Input type="text" className="form-control" id="websiteInput1"
                                                                        placeholder="www.example.com"
                                                                        onChange={e => setSubdomain(e.target.value)}
                                                                        defaultValue={subdomain}
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

                                                        <button onClick={(e) => handelAccount(e, "2")} type="button" className="btn btn-soft-success">
                                                            Previous
                                                        </button>
                                                        <button onClick={(e) => handelAccount(e, "4")} type="button" className="btn btn-soft-success">
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
                                                                placeholder="Enter your firstname"
                                                                onChange={(e) => setAssistantName(e.target.value)}
                                                                defaultValue={assistantName}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="lastnameInput" className="form-label">
                                                                Email
                                                            </Label>
                                                            <Input type="text" className="form-control" id="lastnameInput"
                                                                placeholder="Enter your lastname"
                                                                onChange={(e) => setAssistantEmail(e.target.value)}
                                                                defaultValue={assistantEmail}
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
                                                                onChange={(e) => setAssistantPhone(e.target.value)}
                                                                defaultValue={assistantPhone}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button
                                                                onClick={(e) => handelCreateProfile(e)}
                                                                className="btn btn-primary"
                                                            >
                                                                Create Profile
                                                            </button>
                                                            <button onClick={(e) => handelAssistant(e)} type="button" className="btn btn-soft-success">
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

export default CreateProfile;