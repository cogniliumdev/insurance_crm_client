import { Col, Form, Input, Label, Row, Badge } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';



const UserContactsForm = ({ tabChange }) => {
    const [isEditPhone, setIsEditPhone] = useState(false)
    const [editPhoneValue, setEditPhoneValue] = useState("")
    const phones = ["12312313", "456456", "7897897789", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313", "12312313"]
    const email = ["saad@gmail.com", "saad1@gmail.com", "saad2@gmail.com", "saad3@gmail.com", "saad4@gmail.com", "saad5@gmail.com", "saad6@gmail.com", "saad7@gmail.com", "saad8@gmail.com"]
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
                                        placeholder="Enter Phone Number" />
                                    <button className="btn btn-primary ms-2">
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
                        {phones.map((phone, index) => {
                            return <Badge key={index} className='fs-6 d-flex justify-content-center align-items-center' color="primary">
                                {phone}
                                <i
                                    onClick={() => {
                                        console.log(phone)
                                        setEditPhoneValue(phone)
                                        setIsEditPhone(true);
                                    }}
                                    className="ri-pencil-line ps-2 pe-2"
                                />
                                <FeatherIcon icon="x" size={16} />
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
                        {email.map((phone, index) => {
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