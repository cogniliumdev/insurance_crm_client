import { Col, Form, Input, Label, Row, Badge } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import cogoToast from 'cogo-toast';

// import api hooks
import {
    useCreatePhoneMutation,
    useDeletePhoneMutation,
    useUpdatePhoneMutation
} from "../../api/userProfilePhone"
import {
    useCreateEmailMutation,
    useDeleteEmailMutation,
    useUpdateEmailMutation
} from "../../api/userProfileEmail"



const UserContactsForm = ({ tabChange, profileData }) => {
    const [isEditPhone, setIsEditPhone] = useState(false);
    const [editPhoneValue, setEditPhoneValue] = useState({ phone: "", id: null });
    const [addNewPhoneVal, setAddNewPhoneVal] = useState();

    const [isEditEmail, setIsEditEmail] = useState(false);
    const [editEmailValue, setEditEmailValue] = useState({ email: "", id: null });
    const [addNewEmailVal, setAddNewEmailVal] = useState();

    const phonesList = profileData?.phones;
    const emailsList = profileData?.emails
    console.log(emailsList);

    // phone hooks 
    const addNewPhone = useCreatePhoneMutation();
    const deletePhone = useDeletePhoneMutation();
    const updatePhone = useUpdatePhoneMutation();

    // Email hooks 
    const addNewEmail = useCreateEmailMutation();
    const deleteEmail = useDeleteEmailMutation();
    const updateEmail = useUpdateEmailMutation();

    const handelAddNewPhone = (e) => {
        e.preventDefault();
        addNewPhone.mutate({ phone: addNewPhoneVal, id: profileData?.id });
        if (addNewPhone.data) cogoToast.success(addNewPhone.data?.successMsg)
        if (addNewPhone.error) cogoToast.error("Can not add phone number")

    }

    const handelDeletePhone = async (e, id) => {
        e.preventDefault();
        deletePhone.mutate(id)
        if (deletePhone.isSuccess) cogoToast.success(deletePhone.data?.successMsg)
        if (deletePhone.isError) cogoToast.error("Can not delete phone number")
    }

    const handelUpdatePhone = (e) => {
        e.preventDefault();
        updatePhone.mutate(editPhoneValue)
        if (updatePhone.isSuccess) cogoToast.success(updatePhone.data?.successMsg)
        if (updatePhone.isError) cogoToast.error("Can not edit phone number")
    }

    const handelAddNewEmail = (e) => {
        e.preventDefault();
        addNewEmail.mutate({ email: addNewEmailVal, id: profileData?.id });
        if (addNewEmail.data) cogoToast.success(addNewEmail.data?.successMsg)
        if (addNewEmail.error) cogoToast.error("Can not add Email")

    }

    const handelDeleteEmail = async (e, id) => {
        e.preventDefault();
        deleteEmail.mutate(id)
        if (deleteEmail.isSuccess) cogoToast.success(deleteEmail.data?.successMsg)
        if (deleteEmail.isError) cogoToast.error("Can not delete Email")
    }

    const handelUpdateEmail = (e) => {
        e.preventDefault();
        updateEmail.mutate(editEmailValue);
        if (updateEmail.isSuccess) cogoToast.success(updateEmail.data?.successMsg)
        if (updateEmail.isError) cogoToast.error("Can not edit email");
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

                <Col lg={7}>
                    <div>
                        <Label htmlFor="confirmpasswordInput" className="form-label">
                            websites
                        </Label>
                        <div className='d-flex'>
                            <Input type="password" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter website" />
                            <button className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
                    </div>
                </Col>

                <Col lg={7}>
                    <div>
                        <Label htmlFor="confirmpasswordInput" className="form-label">
                            Addresses
                        </Label>
                        <div className='d-flex'>
                            <Input type="password" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter address" />
                            <button className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
                    </div>
                </Col>

                <Col lg={7}>
                    <div>
                        <Label htmlFor="confirmpasswordInput" className="form-label">
                            Socials
                        </Label>
                        <div className='d-flex'>
                            <Input type="password" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter social" />
                            <button className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
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