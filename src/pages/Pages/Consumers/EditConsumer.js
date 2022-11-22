import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Badge, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import FeatherIcon from 'feather-icons-react';
import { useUpdateConsumerMutation, useGetSingleConsumerQuery } from "../../../api/consumers"
import { useAddConsumerTagMutation,useDeleteConsumerTagMutation } from "../../../api/consumerTags.js";

//import images
import avatar1 from '../../../assets/images/users/avatar-1.jpg';
import progileBg from "../../../assets/images/profile-bg.jpg";
import cogoToast from 'cogo-toast';

const EditConsumer = () => {

    const { consumerId } = useParams();
    const { data: consumerData } = useGetSingleConsumerQuery(consumerId);
    const updateConsumer = useUpdateConsumerMutation();
    const addConsumerTag = useAddConsumerTagMutation();
    const deleteConsumerTag = useDeleteConsumerTagMutation();

    const [title, setTitle] = useState();
    const [birthDate, setBirthDate] = useState();
    const [gender, setGender] = useState();
    const [heightWeight, setHeightWeight] = useState();
    const [tobacco, setTobacco] = useState();
    const [SSN, setSSN] = useState();
    const [driversLicNo, setDriversLicNo] = useState();
    const [driversLicState, setDriversLicState] = useState();
    const [citizenShip, setCitizenShip] = useState();
    const [countryBorn, setCountryBorn] = useState();
    const [stateBorn, setStateBorn] = useState();
    const [martialStatus, setMartialStatus] = useState();
    const [spouse, setSpouse] = useState();
    const [entityType, setEntityType] = useState();
    const [primaryContact, setPrimaryContact] = useState();
    const [contactMethod, setContactMethod] = useState();
    const [contactTime, setContactTime] = useState();
    const [primaryPhone, setPrimaryPhone] = useState();
    const [primaryEmail, setPrimaryEmail] = useState();
    const [homePrimaryAddress, setHomePrimaryAddress] = useState();
    const [occupation, setOccupation] = useState();
    const [employer, setEmployer] = useState();
    const [createDate, setCreateDate] = useState();
    const [lastContact, setLastContact] = useState();
    const [brand, setBrand] = useState();
    const [leadType, setLeadType] = useState();
    const [referrer, setReferrer] = useState();
    const [source, setSource] = useState();
    const [ipAddress, setIpAddress] = useState();
    const [quoterURL, setQuoterURL] = useState();
    const [tags, setTags] = useState();
    const [tagsVal, setTagsVal] = useState();
    const [activeTab, setActiveTab] = useState("1");

    const consumerObj = { consumerId: consumerData?.id, title, birthDate, gender, heightWeight, tobacco, SSN, driversLicNo, driversLicState, citizenShip, countryBorn, stateBorn, martialStatus, spouse, entityType, primaryContact, contactMethod, contactTime, primaryPhone, primaryEmail, homePrimaryAddress, occupation, employer, createDate, lastContact, brand, leadType, quoterURL, ipAddress, source, referrer, }

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const addTag = (e) => {
        e.preventDefault();
        if (!tagsVal) return
        addConsumerTag.mutate({ consumerId: consumerData?.id, tag: tagsVal });
    }
    const deleteTag = async (e, id) => {
        e.preventDefault();
        deleteConsumerTag.mutate(id);
    }
    const handelUpdateConsumer = (e) => {
        e.preventDefault();
        updateConsumer.mutate(consumerObj);
        console.log(consumerObj);
    };
    useEffect(() => {
        if (updateConsumer.isSuccess) cogoToast.success(updateConsumer.data?.successMsg);
        if (updateConsumer.isError) cogoToast.error("Can not create profile");
    }, [updateConsumer?.isError, updateConsumer?.isSuccess]);

    document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";

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
                                            <NavLink to="#"
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
                                        <NavItem >
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "3" }, "text-body")}
                                                onClick={() => {
                                                    tabChange("3");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Employment
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
                                                Consumer Details
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "5" }, "text-body")}
                                                onClick={() => {
                                                    tabChange("5");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Tracking Data
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
                                                                placeholder="Enter your firstname" defaultValue={consumerData?.title}
                                                                onChange={(e) => setTitle(e.target.value)}
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
                                                                    dateFormat: "M d, Y"
                                                                }}
                                                                defaultValue={consumerData?.birth_date}
                                                                onChange={([date]) => {

                                                                    setBirthDate(date.toLocaleDateString())
                                                                }}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <label htmlFor="experienceYear"
                                                                className="form-label">Gender</label>
                                                            <select className="form-control" data-choices
                                                                data-choices-search-false
                                                                name="experienceYear"
                                                                id="experienceYear"
                                                                defaultValue={consumerData?.gender}
                                                                onChange={(e) => setGender(e.target.value)}
                                                            >
                                                                <option value="Male" selected={consumerData?.gender == "Male" ? 1 : 0}>
                                                                    Male
                                                                </option>
                                                                <option value="Female" selected={consumerData?.gender == "Female" ? 1 : 0}>
                                                                    Female
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Height/Weight
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your height weight"
                                                                defaultValue={consumerData?.height_weight}
                                                                onChange={(e) => setHeightWeight(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <label htmlFor="experienceYear"
                                                                className="form-label">Tobacco?</label>
                                                            <select className="form-control" data-choices
                                                                data-choices-search-false
                                                                name="experienceYear"
                                                                id="experienceYear"
                                                                defaultValue={consumerData?.tobacco}
                                                                onChange={(e) => setTobacco(e.target.value)}
                                                            >

                                                                <option selected={consumerData?.tobacco == "No" ? 1 : 0} value="No" >
                                                                    No
                                                                </option>
                                                                <option selected={consumerData?.tobacco == "Yes" ? 1 : 0} value="Yes">
                                                                    Yes
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                SSN
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your SSN"
                                                                defaultValue={consumerData?.SSN}
                                                                onChange={(e) => setSSN(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Driver's Lic #
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your driver's Lic #"
                                                                defaultValue={consumerData?.drivers_lic}
                                                                onChange={(e) => setDriversLicNo(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Driver's Lic State
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your Driver's Lic State"
                                                                defaultValue={consumerData?.drivers_lic_state}
                                                                onChange={(e) => setDriversLicState(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Citizenship
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your citizenship"
                                                                defaultValue={consumerData?.citizenship}
                                                                onChange={(e) => setCitizenShip(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Country Born
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your country born"
                                                                defaultValue={consumerData?.country_born}
                                                                onChange={(e) => setCountryBorn(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                State Born
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your country sate born"
                                                                defaultValue={consumerData?.state_born}
                                                                onChange={(e) => setStateBorn(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <label htmlFor="experienceYear"
                                                                className="form-label">Martial Status?</label>
                                                            <select className="form-control" data-choices
                                                                data-choices-search-false
                                                                name="experienceYear"
                                                                id="experienceYear"
                                                                defaultValue={consumerData?.marital_status}
                                                                onChange={(e) => setMartialStatus(e.target.value)}
                                                            >
                                                                <option selected={consumerData?.marital_status == "Single" ? 1 : 0} value="Single">
                                                                    Single
                                                                </option>
                                                                <option selected={consumerData?.marital_status == "Married" ? 1 : 0} value="Married">
                                                                    Married
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <label htmlFor="experienceYear"
                                                                className="form-label">Spouse?</label>
                                                            <select className="form-control" data-choices
                                                                data-choices-search-false
                                                                name="experienceYear"
                                                                id="experienceYear"
                                                                defaultValue={consumerData?.spouse}
                                                                onChange={(e) => setSpouse(e.target.value)}
                                                            >
                                                                <option selected={consumerData?.spouse == "Yes" ? 1 : 0} value="Yes">
                                                                    Yes
                                                                </option>
                                                                <option selected={consumerData?.spouse == "No" ? 1 : 0} value="No">
                                                                    No
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Entity Type
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your entity type"
                                                                defaultValue={consumerData?.entity_type}
                                                                onChange={(e) => setEntityType(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button onClick={(e) => handelUpdateConsumer(e)} type="button" className="btn btn-primary">
                                                                Update
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
                                            <Form>
                                                <Row className="g-2">
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Primary Contact
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your primary contact"
                                                                defaultValue={consumerData?.primary_contact}
                                                                onChange={(e) => setPrimaryContact(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Contact Method
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your contact method"
                                                                defaultValue={consumerData?.contact_method}
                                                                onChange={(e) => setContactMethod(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Contact Time
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your contact time"
                                                                defaultValue={consumerData?.contact_time}
                                                                onChange={(e) => setContactTime(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Primary Phone
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your primary phone"
                                                                defaultValue={consumerData?.primary_phone}
                                                                onChange={(e) => setPrimaryPhone(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Primary Email
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your primary email"
                                                                defaultValue={consumerData?.primary_email}
                                                                onChange={(e) => setPrimaryEmail(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="firstnameInput" className="form-label">
                                                                Home / Primary Address
                                                            </Label>
                                                            <Input type="text" className="form-control" id="firstnameInput"
                                                                placeholder="Enter your home primary address"
                                                                defaultValue={consumerData?.home_primary_address}
                                                                onChange={(e) => setHomePrimaryAddress(e.target.value)}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button onClick={(e) => handelUpdateConsumer(e)} type="button" className="btn btn-primary">
                                                                Update
                                                            </button>
                                                            <button onClick={() => tabChange("3")} type="button" className="btn btn-soft-success">
                                                                Next
                                                            </button>

                                                        </div>
                                                    </Col>

                                                </Row>
                                            </Form>
                                        </TabPane>

                                        <TabPane tabId="3">
                                            <form>
                                                <div id="newlink">
                                                    <div id="1">
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Occupation
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your occupation"
                                                                        defaultValue={consumerData?.occupation}
                                                                        onChange={(e) => setOccupation(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Employer
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your employer"
                                                                        defaultValue={consumerData?.employer}
                                                                        onChange={(e) => setEmployer(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <div className="hstack gap-2 justify-content-end">
                                                                    <button onClick={(e) => handelUpdateConsumer(e)} type="button" className="btn btn-primary">
                                                                        Update
                                                                    </button>
                                                                    <button onClick={() => tabChange("4")} type="button" className="btn btn-soft-success">
                                                                        Next
                                                                    </button>

                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </form>
                                        </TabPane>

                                        <TabPane tabId="4">
                                            <form>
                                                <div id="newlink">
                                                    <div id="1">
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Create Date
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your create date"
                                                                        defaultValue={consumerData?.createdAt}
                                                                        onChange={(e) => setCreateDate(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Last Contact
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your employer"
                                                                        defaultValue={consumerData?.last_contact}
                                                                        onChange={(e) => setLastContact(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <div className="hstack gap-2 justify-content-end">
                                                                    <button onClick={(e) => handelUpdateConsumer(e)} type="button" className="btn btn-primary">
                                                                        Update
                                                                    </button>
                                                                    <button onClick={() => tabChange("5")} type="button" className="btn btn-soft-success">
                                                                        Next
                                                                    </button>

                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </form>
                                        </TabPane>

                                        <TabPane tabId="5">
                                            <form>
                                                <div id="newlink">
                                                    <div id="1">
                                                        <Row>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Brand
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your brand"
                                                                        defaultValue={consumerData?.brand}
                                                                        onChange={(e) => setBrand(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Lead Type
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your lead type"
                                                                        defaultValue={consumerData?.lead_type}
                                                                        onChange={(e) => setLeadType(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Referrer
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your referrer"
                                                                        defaultValue={consumerData?.referrer}
                                                                        onChange={(e) => setReferrer(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Source
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your source"
                                                                        defaultValue={consumerData?.source}
                                                                        onChange={(e) => setSource(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        IP Address
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your IP address"
                                                                        defaultValue={consumerData?.ip_address}
                                                                        onChange={(e) => setIpAddress(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div className="mb-3">
                                                                    <Label htmlFor="firstnameInput" className="form-label">
                                                                        Quoter URL
                                                                    </Label>
                                                                    <Input type="text" className="form-control" id="firstnameInput"
                                                                        placeholder="Enter your quoter URL"
                                                                        defaultValue={consumerData?.quoter_url}
                                                                        onChange={(e) => setQuoterURL(e.target.value)}
                                                                    />
                                                                </div>
                                                            </Col>
                                                            <Col lg={6} className="mb-2">
                                                                <div>
                                                                    <Label htmlFor="oldpasswordInput" className="form-label">
                                                                        Tags
                                                                    </Label>
                                                                    <div className='d-flex'>
                                                                        <>
                                                                            <Input type="text" className="form-control"
                                                                                id="oldpasswordInput"
                                                                                placeholder="Enter Phone Number"
                                                                                onChange={e => setTagsVal(e.target.value)}
                                                                            />
                                                                            <button onClick={(e) => addTag(e)} className="btn btn-primary ms-2">
                                                                                Add
                                                                            </button>
                                                                        </>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            {/* Badges */}
                                                            <Col lg={12}>
                                                                <div className="d-flex flex-row flex-wrap gap-2">
                                                                    {consumerData?.consumertags.map((tag, index) => {
                                                                        return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                                                            <span className='pe-2'>{tag.tag}</span>
                                                                            <FeatherIcon
                                                                                onClick={(e) => deleteTag(e, tag.id)}
                                                                                icon="x-square"
                                                                                size={18}
                                                                            />
                                                                        </Badge>
                                                                    })}
                                                                </div>
                                                            </Col>

                                                            <Col lg={12}>
                                                                <div className="hstack gap-2 justify-content-end mt-5">
                                                                    <button onClick={(e) => handelUpdateConsumer(e)} type="button" className="btn btn-primary">
                                                                        Update
                                                                    </button>
                                                                    <button onClick={() => tabChange("4")} type="button" className="btn btn-soft-success">
                                                                        previous
                                                                    </button>

                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </form>
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

export default EditConsumer;