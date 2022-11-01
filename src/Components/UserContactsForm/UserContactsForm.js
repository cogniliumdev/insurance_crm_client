import { Col, Form, Input, Label, Row, Badge } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import cogoToast from 'cogo-toast';
// import api hooks
import { useCreatePhoneMutation, useDeletePhoneMutation } from "../../api/userProfilePhone"


const UserContactsForm = ({ tabChange, profileData }) => {
    const [isEditPhone, setIsEditPhone] = useState(false)
    const [editPhoneValue, setEditPhoneValue] = useState("")
    const [addNewPhoneVal, setAddNewPhoneVal] = useState()
    // console.log(profileData);
    const phonesList = profileData?.phones;
    const emails = ["saad@gmail.com", "saad1@gmail.com", "saad2@gmail.com", "saad3@gmail.com", "saad4@gmail.com", "saad5@gmail.com", "saad6@gmail.com", "saad7@gmail.com", "saad8@gmail.com"]


    const addNewPhone = useCreatePhoneMutation()
    const deletePhone = useDeletePhoneMutation()

    const handelAddNewPhone = (e) => {
        e.preventDefault();
        addNewPhone.mutate({ phone: addNewPhoneVal, id: profileData?.id });
        if (addNewPhone.isSuccess) cogoToast.success(addNewPhone.data?.successMsg)
        if (addNewPhone.isError) cogoToast.error("Can not add phone number")
    }

    const handelDeletePhone = (e, id) => {
        e.preventDefault();
        deletePhone.mutate(id)
        if (deletePhone.isSuccess) cogoToast.success(deletePhone.data?.successMsg)
        if (deletePhone.isError) cogoToast.error("Can not add phone number")
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
                                    <Input type="text" className="form-control"
                                        id="oldpasswordInput"
                                        placeholder="Enter Phone Number"
                                        onChange={(e) => setAddNewPhoneVal(e.target.value)}
                                    />
                                    <button onClick={(e) => handelAddNewPhone(e)} className="btn btn-primary ms-2">
                                        Add
                                    </button>
                                </>) : (<>
                                    <Input type="text" className="form-control"
                                        id="oldpasswordInput" value={editPhoneValue}
                                        placeholder="Enter Phone Number" />
                                    <button className="btn btn-primary ms-2">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsEditPhone(false);
                                            setEditPhoneValue("");
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
                                        console.log(item.phone)
                                        setEditPhoneValue(item.phone)
                                        setIsEditPhone(true);
                                    }}
                                    className="ri-pencil-line ps-2 pe-2"
                                />
                                <FeatherIcon onClick={(e) => handelDeletePhone(e, item.id)} icon="x" size={16} />
                            </Badge>
                        })}
                    </div>
                </Col>

                <Col lg={9} className="mb-2 mt-4">
                    <div>
                        <Label htmlFor="newpasswordInput" className="form-label">
                            Email Addresses
                        </Label>
                        <div className='d-flex'>
                            <Input type="password" className="form-control"
                                id="oldpasswordInput"
                                placeholder="Enter Email" />
                            <button className="btn btn-primary ms-2">
                                Add
                            </button>
                        </div>
                    </div>
                </Col>
                {/* Badges */}
                <Col lg={12}>
                    <div className="d-flex flex-row flex-wrap gap-2">
                        {emails.map((phone, index) => {
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                {phone}
                                <i className="ri-pencil-line ps-2 pe-2"></i>
                                <FeatherIcon icon="x" size={16} />
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