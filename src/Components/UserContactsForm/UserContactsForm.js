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


const UserContactsForm = ({ tabChange, profileData }) => {
    // phone states
    const [isEditPhone, setIsEditPhone] = useState(false);
    const [editPhoneValue, setEditPhoneValue] = useState({ phone: "", id: null });
    const [addNewPhoneVal, setAddNewPhoneVal] = useState();

    // email states
    const [isEditEmail, setIsEditEmail] = useState(false);
    const [editEmailValue, setEditEmailValue] = useState({ email: "", id: null });
    const [addNewEmailVal, setAddNewEmailVal] = useState();

    // address states
    const [isEditAddress, setIsEditAddress] = useState(false);
    const [editAddressValue, setEditAddressValue] = useState({ address: "", id: null });
    const [addNewAddressVal, setAddNewAddressVal] = useState();

    // socials states
    const [isEditSocials, setIsEditSocials] = useState(false);
    const [editSocialsValue, setEditSocialsValue] = useState({ socials: "", id: null });
    const [addNewSocialsVal, setAddNewSocialsVal] = useState();

    // website states
    const [isEditWebsite, setIsEditWebsite] = useState(false);
    const [editWebsiteValue, setEditWebsiteValue] = useState({ website: "", id: null });
    const [addNewWebsiteVal, setAddNewWebsiteVal] = useState();


    const phonesList = profileData?.phones;
    const emailsList = profileData?.emails;
    const addressList = profileData?.addresses;
    const socialsList = profileData?.socials;
    const websiteList = profileData?.websites;

    // phone hooks 
    const addNewPhone = useCreatePhoneMutation();
    const deletePhone = useDeletePhoneMutation();
    const updatePhone = useUpdatePhoneMutation();

    // Email hooks 
    const addNewEmail = useCreateEmailMutation();
    const deleteEmail = useDeleteEmailMutation();
    const updateEmail = useUpdateEmailMutation();

    // Address hooks 
    const addNewAddress = useCreateAddressMutation();
    const deleteAddress = useDeleteAddressMutation();
    const updateAddress = useUpdateAddressMutation();

    // Socials hooks 
    const addNewSocials = useCreateSocialsMutation();
    const deleteSocials = useDeleteSocialsMutation();
    const updateSocials = useUpdateSocialsMutation();

    // Website hooks 
    const addNewWebsite = useCreateWebsiteMutation();
    const deleteWebsite = useDeleteWebsiteMutation();
    const updateWebsite = useUpdateWebsiteMutation();


    // handlers 

    // Phone Handlers
    const handelAddNewPhone = (e) => {
        e.preventDefault();
        addNewPhone.mutate({ phone: addNewPhoneVal, id: profileData?.id });
    }
    useEffect(() => {
        if (addNewPhone.isSuccess) cogoToast.success(addNewPhone.data?.successMsg)
        if (addNewPhone.isError) cogoToast.error("Can not add phone number")
    }, [addNewPhone.isSuccess, addNewPhone.isError]);


    const handelDeletePhone = async (e, id) => {
        e.preventDefault();
        deletePhone.mutate(id)
    }
    useEffect(() => {
        if (deletePhone.isSuccess) cogoToast.success(deletePhone.data?.successMsg)
        if (deletePhone.isError) cogoToast.error("Can not delete phone number")
    }, [deletePhone.isSuccess, deletePhone.isError]);


    const handelUpdatePhone = (e) => {
        e.preventDefault();
        updatePhone.mutate(editPhoneValue)
    }
    useEffect(() => {
        if (updatePhone.isSuccess) cogoToast.success(updatePhone.data?.successMsg)
        if (updatePhone.isError) cogoToast.error("Can not edit phone number")
    }, [updatePhone.isSuccess, updatePhone.isError]);



    // Email handlers 
    const handelAddNewEmail = (e) => {
        e.preventDefault();
        addNewEmail.mutate({ email: addNewEmailVal, id: profileData?.id });
    }
    useEffect(() => {
        if (addNewEmail.data) cogoToast.success(addNewEmail.data?.successMsg)
        if (addNewEmail.error) cogoToast.error("Can not add Email")
    }, [addNewEmail.isSuccess, addNewEmail.isError]);


    const handelDeleteEmail = async (e, id) => {
        e.preventDefault();
        deleteEmail.mutate(id)
    }
    useEffect(() => {
        if (deleteEmail.isSuccess) cogoToast.success(deleteEmail.data?.successMsg)
        if (deleteEmail.isError) cogoToast.error("Can not delete Email")
    }, [deleteEmail.isSuccess, deleteEmail.isError]);


    const handelUpdateEmail = (e) => {
        e.preventDefault();
        updateEmail.mutate(editEmailValue);
    }
    useEffect(() => {
        if (updateEmail.isSuccess) cogoToast.success(updateEmail.data?.successMsg)
        if (updateEmail.isError) cogoToast.error("Can not edit email");
    }, [updateEmail.isSuccess, updateEmail.isError]);


    // Address handlers 
    const handelAddNewAddress = (e) => {
        e.preventDefault();
        addNewAddress.mutate({ address: addNewAddressVal, id: profileData?.id });
    }
    useEffect(() => {
        if (addNewAddress.data) cogoToast.success(addNewAddress.data?.successMsg)
        if (addNewAddress.error) cogoToast.error("Can not add Address")
    }, [addNewAddress.isSuccess, addNewAddress.isError]);


    const handelDeleteAddress = async (e, id) => {
        e.preventDefault();
        deleteAddress.mutate(id)
    }
    useEffect(() => {
        if (deleteAddress.isSuccess) cogoToast.success(deleteAddress.data?.successMsg)
        if (deleteAddress.isError) cogoToast.error("Can not delete Address")
    }, [deleteAddress.isSuccess, deleteAddress.isError]);


    const handelUpdateAddress = (e) => {
        e.preventDefault();
        console.log(editAddressValue);
        updateAddress.mutate(editAddressValue);
    }
    useEffect(() => {
        if (updateAddress.isSuccess) cogoToast.success(updateAddress.data?.successMsg)
        if (updateAddress.isError) cogoToast.error("Can not edit Address");
    }, [updateAddress.isSuccess, updateAddress.isError]);


    // Socials handlers 
    const handelAddNewSocials = (e) => {
        e.preventDefault();
        addNewSocials.mutate({ socials: addNewSocialsVal, id: profileData?.id });
    }
    useEffect(() => {
        if (addNewSocials.data) cogoToast.success(addNewSocials.data?.successMsg)
        if (addNewSocials.error) cogoToast.error("Can not add Socials")
    }, [addNewSocials.isSuccess, addNewSocials.isError]);


    const handelDeleteSocials = async (e, id) => {
        e.preventDefault();
        deleteSocials.mutate(id)
    }
    useEffect(() => {
        if (deleteSocials.isSuccess) cogoToast.success(deleteSocials.data?.successMsg)
        if (deleteSocials.isError) cogoToast.error("Can not delete Socials")
    }, [deleteSocials.isSuccess, deleteSocials.isError]);

    const handelUpdateSocials = (e) => {
        e.preventDefault();
        updateSocials.mutate(editSocialsValue);
    }
    useEffect(() => {
        if (updateSocials.isSuccess) cogoToast.success(updateSocials.data?.successMsg)
        if (updateSocials.isError) cogoToast.error("Can not edit Socials");
    }, [updateSocials.isSuccess, updateSocials.isError]);


    // Website handlers 
    const handelAddNewWebsite = (e) => {
        e.preventDefault();
        addNewWebsite.mutate({ website: addNewWebsiteVal, id: profileData?.id });
    }
    useEffect(() => {
        if (addNewWebsite.data) cogoToast.success(addNewWebsite.data?.successMsg)
        if (addNewWebsite.error) cogoToast.error("Can not add Website")
    }, [addNewWebsite.isSuccess, addNewWebsite.isError]);


    const handelDeleteWebsite = async (e, id) => {
        e.preventDefault();
        deleteWebsite.mutate(id)
    }
    useEffect(() => {
        if (deleteWebsite.isSuccess) cogoToast.success(deleteWebsite.data?.successMsg)
        if (deleteWebsite.isError) cogoToast.error("Can not delete Website")
    }, [deleteWebsite.isSuccess, deleteWebsite.isError]);


    const handelUpdateWebsite = (e) => {
        e.preventDefault();
        updateWebsite.mutate(editWebsiteValue);
    }
    useEffect(() => {
        if (updateWebsite.isSuccess) cogoToast.success(updateWebsite.data?.successMsg)
        if (updateWebsite.isError) cogoToast.error("Can not edit Website");
    }, [updateWebsite.isSuccess, updateWebsite.isError]);


    return (<>
        <Form>
            <Row className="g-2">
                <Col lg={9} className="mb-2">
                    <div>
                        <Label htmlFor="oldpasswordInput" className="form-label">
                            Phones
                        </Label>
                        <div className='d-flex'>
                            {!isEditPhone ?
                                (<>
                                    <Input type="number" className="form-control"
                                        id="oldpasswordInput"
                                        placeholder="Enter Phone Number"
                                        onChange={(e) => setAddNewPhoneVal(e.target.value)}
                                    />
                                    <button onClick={(e) => handelAddNewPhone(e)} className="btn btn-primary ms-2">
                                        Add
                                    </button>
                                </>) : (<>
                                    <Input type="number" className="form-control"
                                        id="oldpasswordInput" value={editPhoneValue.phone}
                                        placeholder="Enter Phone Number"
                                        // onChange={(e) => setEditedPhoneValue(e.target.value)}
                                        onChange={(e) => setEditPhoneValue((prevState) => ({ phone: e.target.value, id: prevState.id }))}
                                    />
                                    <button
                                        onClick={e => handelUpdatePhone(e)}
                                        className="btn btn-primary ms-2">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsEditPhone(false);
                                            setEditPhoneValue({ phone: "", id: null });
                                        }}
                                        className="btn btn-primary ms-2">
                                        Cancel
                                    </button>
                                </>)}
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {phonesList?.map((item, index) => {
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                {item.phone}
                                <i
                                    onClick={() => {
                                        setEditPhoneValue({ phone: item.phone, id: item.id })
                                        setIsEditPhone(true);
                                    }}
                                    className="ri-pencil-line ps-2 pe-2"
                                />
                                <FeatherIcon onClick={(e) => handelDeletePhone(e, item.id)} icon="x" size={16} />
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
                            {!isEditEmail ?
                                (<>
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
                                </>) : (<>
                                    <Input type="email" className="form-control"
                                        id="oldpasswordInput" value={editEmailValue.email}
                                        placeholder="Enter Email"
                                        onChange={(e) => setEditEmailValue((prevState) => ({ email: e.target.value, id: prevState.id }))}
                                    />
                                    <button
                                        onClick={e => handelUpdateEmail(e)}
                                        className="btn btn-primary ms-2">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsEditEmail(false);
                                            setEditEmailValue({ email: "", id: null })
                                            setAddNewEmailVal("")
                                        }}
                                        className="btn btn-primary ms-2">
                                        Cancel
                                    </button>
                                </>)
                            }

                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {emailsList?.map((item, index) => {
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                {item.email}
                                <i
                                    onClick={() => {
                                        setEditEmailValue({ email: item.email, id: item.id })
                                        setIsEditEmail(true);
                                    }}
                                    className="ri-pencil-line ps-2 pe-2"
                                />
                                <FeatherIcon
                                    onClick={(e) => handelDeleteEmail(e, item.id)}
                                    icon="x" size={16} />
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
                            {!isEditWebsite ?
                                (<>
                                    <Input type="text" className="form-control"
                                        id="oldpasswordInput"
                                        placeholder="Enter Website"
                                        onChange={(e) => setAddNewWebsiteVal(e.target.value)}
                                    />
                                    <button onClick={(e) => handelAddNewWebsite(e)} className="btn btn-primary ms-2">
                                        Add
                                    </button>
                                </>) : (<>
                                    <Input type="text" className="form-control"
                                        id="oldpasswordInput" value={editWebsiteValue.website}
                                        placeholder="Enter Website"
                                        // onChange={(e) => setEditedPhoneValue(e.target.value)}
                                        onChange={(e) => setEditWebsiteValue((prevState) => ({ website: e.target.value, id: prevState.id }))}
                                    />
                                    <button
                                        onClick={e => handelUpdateWebsite(e)}
                                        className="btn btn-primary ms-2">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsEditWebsite(false);
                                            setEditWebsiteValue({ website: "", id: null });
                                        }}
                                        className="btn btn-primary ms-2">
                                        Cancel
                                    </button>
                                </>)}
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {websiteList?.map((item, index) => {
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                {item.website}
                                <i
                                    onClick={() => {
                                        setEditWebsiteValue({ website: item.website, id: item.id })
                                        setIsEditWebsite(true);
                                    }}
                                    className="ri-pencil-line ps-2 pe-2"
                                />
                                <FeatherIcon onClick={(e) => handelDeleteWebsite(e, item.id)} icon="x" size={16} />
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
                            {!isEditAddress ?
                                (<>
                                    <Input type="text" className="form-control"
                                        id="oldpasswordInput"
                                        placeholder="Enter Address"
                                        onChange={(e) => setAddNewAddressVal(e.target.value)}
                                    />
                                    <button onClick={(e) => handelAddNewAddress(e)} className="btn btn-primary ms-2">
                                        Add
                                    </button>
                                </>) : (<>
                                    <Input type="text" className="form-control"
                                        id="oldpasswordInput" value={editAddressValue.address}
                                        placeholder="Enter Phone Number"
                                        // onChange={(e) => setEditedPhoneValue(e.target.value)}
                                        onChange={(e) => setEditAddressValue((prevState) => ({ address: e.target.value, id: prevState.id }))}
                                    />
                                    <button
                                        onClick={e => handelUpdateAddress(e)}
                                        className="btn btn-primary ms-2">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsEditAddress(false);
                                            setEditAddressValue({ address: "", id: null });
                                        }}
                                        className="btn btn-primary ms-2">
                                        Cancel
                                    </button>
                                </>)}
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {addressList?.map((item, index) => {
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                {item.address}
                                <i
                                    onClick={() => {
                                        setEditAddressValue({ address: item.address, id: item.id })
                                        setIsEditAddress(true);
                                    }}
                                    className="ri-pencil-line ps-2 pe-2"
                                />
                                <FeatherIcon onClick={(e) => handelDeleteAddress(e, item.id)} icon="x" size={16} />
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
                            {!isEditSocials ?
                                (<>
                                    <Input type="text" className="form-control"
                                        id="oldpasswordInput"
                                        placeholder="Enter Socials"
                                        onChange={(e) => setAddNewSocialsVal(e.target.value)}
                                    />
                                    <button onClick={(e) => handelAddNewSocials(e)} className="btn btn-primary ms-2">
                                        Add
                                    </button>
                                </>) : (<>
                                    <Input type="text" className="form-control"
                                        id="oldpasswordInput" value={editSocialsValue.socials}
                                        placeholder="Enter Socials"
                                        onChange={(e) => setEditSocialsValue((prevState) => ({ socials: e.target.value, id: prevState.id }))}
                                    />
                                    <button
                                        onClick={e => handelUpdateSocials(e)}
                                        className="btn btn-primary ms-2">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsEditSocials(false);
                                            setEditSocialsValue({ socials: "", id: null });
                                        }}
                                        className="btn btn-primary ms-2">
                                        Cancel
                                    </button>
                                </>)}
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {socialsList?.map((item, index) => {
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                {item.social}
                                <i
                                    onClick={() => {
                                        setEditSocialsValue({ socials: item.social, id: item.id })
                                        setIsEditSocials(true);
                                    }}
                                    className="ri-pencil-line ps-2 pe-2"
                                />
                                <FeatherIcon onClick={(e) => handelDeleteSocials(e, item.id)} icon="x" size={16} />
                            </Badge>
                        })}
                    </div>
                </Col>

                <Col lg={12}>
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-primary">
                            Updates
                        </button>
                        <button onClick={() => tabChange("1")} type="button" className="btn btn-soft-success">
                            Previous
                        </button>
                        <button onClick={() => tabChange("3")} type="button" className="btn btn-soft-success">
                            Next
                        </button>
                    </div>
                </Col>

            </Row>
        </Form>
    </>)
}

export default UserContactsForm;