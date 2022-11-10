import { Col, Form, Input, Label, Row, Badge } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';
import cogoToast from 'cogo-toast';

// import api hooks
import {
    useCreatePhoneMutation,
    useDeletePhoneMutation,
    useUpdatePhoneMutation
} from "../../api/userProfilePhone";
import {
    useCreateEmailMutation,
    useDeleteEmailMutation,
    useUpdateEmailMutation
} from "../../api/userProfileEmail";
import {
    useCreateAddressMutation,
    useDeleteAddressMutation,
    useUpdateAddressMutation
} from "../../api/userProfileAddress";
import {
    useCreateSocialsMutation,
    useDeleteSocialsMutation,
    useUpdateSocialsMutation
} from "../../api/userProfileSocials";
import {
    useCreateWebsiteMutation,
    useDeleteWebsiteMutation,
    useUpdateWebsiteMutation
} from "../../api/userProfileWebsite";


const CreateUserContactsForm = ({ tabChange }) => {

    const localProfileData = JSON.parse(localStorage.getItem("userProfile"))
    console.log(localProfileData);

    // phone states

    const [phonesList, setPhonesList] = useState([].concat(localProfileData?.phones));
    const [addNewPhoneVal, setAddNewPhoneVal] = useState();

    // email states
    const [emailsList, setEmailsList] = useState([].concat(localProfileData?.emails));
    const [addNewEmailVal, setAddNewEmailVal] = useState();

    // address states
    const [addressList, setAddressList] = useState([].concat(localProfileData?.addresses));
    const [addNewAddressVal, setAddNewAddressVal] = useState();

    // socials states
    const [socialsList, setSocialsList] = useState([].concat(localProfileData?.socials));
    const [addNewSocialsVal, setAddNewSocialsVal] = useState();

    // website states
    const [websiteList, setWebsiteList] = useState([].concat(localProfileData?.websites));
    const [addNewWebsiteVal, setAddNewWebsiteVal] = useState();



    // handlers 

    // Phone Handlers
    const handelAddNewPhone = (e) => {
        e.preventDefault();
        setPhonesList(() => {
            const arr = phonesList.concat(addNewPhoneVal);
            const filterArr = arr.filter((val) => {
                if (val !== null) return val
            })
            return filterArr;
        });
    }
    const handelDeletePhone = async (e, item) => {
        e.preventDefault();
        setPhonesList(phonesList.filter((val) => val !== item));
    }
    useEffect(() => {
        if (addNewPhoneVal) {
            const phonesData = { ...localProfileData, phones: phonesList };
            localStorage.setItem("userProfile", JSON.stringify(phonesData));
        }

    }, [phonesList]);





    // Email handlers 
    const handelAddNewEmail = (e) => {
        e.preventDefault();
        setEmailsList(() => {
            const arr = emailsList.concat(addNewEmailVal);
            const filterArr = arr.filter((val) => {
                if (val !== null) return val
            })
            return filterArr;
        });
    }
    const handelDeleteEmail = async (e, item) => {
        e.preventDefault();
        setEmailsList(emailsList.filter((val) => val !== item));
    }
    useEffect(() => {
        if (addNewEmailVal) {
            const emailData = { ...localProfileData, emails: emailsList };
            localStorage.setItem("userProfile", JSON.stringify(emailData));
        }
    }, [emailsList]);



    // Address handlers 
    const handelAddNewAddress = (e) => {
        e.preventDefault();
        setAddressList(() => {
            const arr = addressList.concat(addNewAddressVal);
            const filterArr = arr.filter((val) => {
                if (val !== null) return val
            })
            return filterArr;
        });
    }
    const handelDeleteAddress = async (e, item) => {
        e.preventDefault();
        setAddressList(addressList.filter((val) => val !== item));
    }
    useEffect(() => {
        if (addNewAddressVal) {
            const addressData = { ...localProfileData, addresses: addressList };
            localStorage.setItem("userProfile", JSON.stringify(addressData));
        }
    }, [addressList]);




    // Socials handlers 
    const handelAddNewSocials = (e) => {
        e.preventDefault();
        setSocialsList(() => {
            const arr = socialsList.concat(addNewSocialsVal);
            const filterArr = arr.filter((val) => {
                if (val !== null) return val
            })
            return filterArr;
        });
    }
    const handelDeleteSocials = async (e, item) => {
        e.preventDefault();
        setSocialsList(socialsList.filter((val) => val !== item));
    }
    useEffect(() => {
        if (addNewSocialsVal) {
            const socialsData = { ...localProfileData, socials: socialsList };
            localStorage.setItem("userProfile", JSON.stringify(socialsData));
        }
    }, [socialsList]);



    // Website handlers 
    const handelAddNewWebsite = (e) => {
        e.preventDefault();
        setWebsiteList(() => {
            const arr = websiteList.concat(addNewWebsiteVal);
            const filterArr = arr.filter((val) => {
                if (val !== null) return val
            })
            return filterArr;
        });
    }
    const handelDeleteWebsite = async (e, item) => {
        e.preventDefault();
        setWebsiteList(websiteList.filter((val) => val !== item));
    }
    useEffect(() => {
        if (addNewWebsiteVal) {
            const websitesData = { ...localProfileData, websites: websiteList };
            localStorage.setItem("userProfile", JSON.stringify(websitesData));
        }
    }, [websiteList]);


    const handelNextBtn = (tab) => {
        // if (phonesList.length <= 0) return;
        // if (emailsList.length <= 0) return;
        // if (addressList.length <= 0) return;
        // if (socialsList.length <= 0) return;
        // if (websiteList.length <= 0) return;
        tabChange(tab);
    }

    return (<>
        <Form>
            <Row className="g-2">
                <Col lg={9} className="mb-2">
                    <div>
                        <Label htmlFor="oldpasswordInput" className="form-label">
                            Phones
                        </Label>
                        <div className='d-flex'>
                            <Input type="number" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter Phone Number"
                                onChange={(e) => setAddNewPhoneVal(e.target.value)}
                            />
                            <button onClick={(e) => handelAddNewPhone(e)} className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {phonesList?.map((item, index) => {
                            if (item == null) return null;
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                <span className='pe-2'>{item}</span>
                                <FeatherIcon
                                    onClick={(e) => handelDeletePhone(e, item)}
                                    icon="x-square"
                                    size={18}
                                />
                            </Badge>
                        })}
                    </div>
                </Col>

                {/* EMAIL  */}
                <Col lg={9} className="mb-2 mt-4">
                    <div>
                        <Label htmlFor="newpasswordInput" className="form-label">
                            Email Addresses
                        </Label>
                        <div className='d-flex'>
                            <Input type="email" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter Email"
                                onChange={e => setAddNewEmailVal(e.target.value)}
                            />
                            <button
                                onClick={e => handelAddNewEmail(e)}
                                className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {emailsList?.map((item, index) => {
                            if (item == null) return null;
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                <span className='pe-2'>{item}</span>
                                <FeatherIcon
                                    onClick={(e) => handelDeleteEmail(e, item)}
                                    icon="x-square" size={16} />
                            </Badge>
                        })}
                    </div>
                </Col>

                {/* WEBSITES  */}
                <Col lg={9} className="mb-2">
                    <div>
                        <Label htmlFor="oldpasswordInput" className="form-label">
                            websites
                        </Label>
                        <div className='d-flex'>
                            <Input type="text" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter Website"
                                onChange={(e) => setAddNewWebsiteVal(e.target.value)}
                            />
                            <button onClick={(e) => handelAddNewWebsite(e)} className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {websiteList?.map((item, index) => {
                            if (item == null) return null
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                <span className='pe-2'>{item}</span>
                                <FeatherIcon onClick={(e) => handelDeleteWebsite(e, item)} icon="x-square" size={16} />
                            </Badge>
                        })}
                    </div>
                </Col>

                {/* ADDRESS  */}
                <Col lg={9} className="mb-2">
                    <div>
                        <Label htmlFor="oldpasswordInput" className="form-label">
                            Address
                        </Label>
                        <div className='d-flex'>
                            <Input type="text" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter Address"
                                onChange={(e) => setAddNewAddressVal(e.target.value)}
                            />
                            <button onClick={(e) => handelAddNewAddress(e)} className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {addressList?.map((item, index) => {
                            if (item == null) return null;
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                <span className='pe-2'>{item}</span>
                                <FeatherIcon onClick={(e) => handelDeleteAddress(e, item)} icon="x-square" size={16} />
                            </Badge>
                        })}
                    </div>
                </Col>

                {/* SOCIALS  */}
                <Col lg={9} className="mb-2">
                    <div>
                        <Label htmlFor="oldpasswordInput" className="form-label">
                            Socials
                        </Label>
                        <div className='d-flex'>
                            <Input type="text" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter Socials"
                                onChange={(e) => setAddNewSocialsVal(e.target.value)}
                            />
                            <button onClick={(e) => handelAddNewSocials(e)} className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {socialsList?.map((item, index) => {
                            if (item == null) return null
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                <span className='pe-2'>{item}</span>
                                <FeatherIcon onClick={(e) => handelDeleteSocials(e, item)} icon="x-square" size={16} />
                            </Badge>
                        })}
                    </div>
                </Col>

                <Col lg={12}>
                    <div className="hstack gap-2 justify-content-end">
                        <button onClick={() => tabChange("1")} type="button" className="btn btn-soft-success">
                            Previous
                        </button>
                        <button onClick={() => handelNextBtn("3")} type="button" className="btn btn-soft-success">
                            Next
                        </button>
                    </div>
                </Col>

            </Row>
        </Form>
    </>)
}

export default CreateUserContactsForm;