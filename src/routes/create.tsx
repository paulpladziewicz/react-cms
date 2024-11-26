import {createFileRoute} from '@tanstack/react-router'
import {useState} from "react";
import contentTypes from "../constants/ContentTypes.ts";

export const Route = createFileRoute('/create')({
    component: RouteComponent,
})

function RouteComponent() {
    const [contentType, setContentType] = useState('');
    const [images, setImages] = useState<File[]>([]);

    const handleContentTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContentType(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImages([...images, ...Array.from(event.target.files)]);
        }
    };

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const renderDetailOverview = (contentType) => {
        switch (contentType) {
            case 'group': {
                return (
                    <p>When creating a group, please include:
                        <ul>
                            <li>Title</li>
                            <li>Description</li>
                            <li>Common meeting location</li>
                            <li>If the group is virtual, provide a link</li>
                        </ul>
                    </p>
                );
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                    <h1>Create Listing</h1>
                    <p>Select what type of listing you'd like to create and enter the information in plain English. We
                        avoid complex
                        forms.</p>
                    <p>We'll review and make sure the listing is created accurately within 24 hours or we'll reach
                        out for more
                        information.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="email"
                                       className="mb-1 form-label opacity-75 fw-medium fs-base">Email</label>
                                <input type="email" className="form-control" id="email"
                                       placeholder="Enter email address" required="" name="email" value=""/>
                                <div className="form-text">You're currently not logged in. If you'd like to make updates
                                    to this listing easier in the future, please register or login.
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="fs-lg">What type of listing would you like to create?</h2>
                    <div className="d-flex mb-4">
                        {contentTypes.map((type) => (
                            <div className="me-3" key={type.id}>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    id={`contentType-${type.id}`}
                                    name="contentType"
                                    value={type.id}
                                    checked={contentType === type.id}
                                    onChange={handleContentTypeChange}
                                />
                                <label htmlFor={`contentType-${type.id}`}
                                       className="btn btn-outline-secondary px-2">
                                    <span className="mx-1">{type.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>

                    {renderDetailOverview(contentType)}

                    <form action="">

                        <div className="form-group mb-3">
                            <label htmlFor="detail"
                                   className="mb-1 form-label opacity-75 fw-medium fs-base">Details</label>
                            <textarea className="form-control" id="detail" rows="7"
                                      placeholder="Provide all details here about the content" required=""
                                      name="detail"></textarea>
                        </div>

                        <div className="form-group mb-3">
                            <label className="mb-1 form-label opacity-75 fw-medium fs-base">Add Images</label>
                            <input
                                type="file"
                                className="form-control"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <div className="d-flex flex-wrap mt-3">
                                {images.map((image, index) => (
                                    <div key={index} className="position-relative me-3 mb-3" style={{width: '100px'}}>
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Preview ${index}`}
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                objectFit: 'cover',
                                                borderRadius: '5px'
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger position-absolute top-0 end-0"
                                            onClick={() => removeImage(index)}
                                            style={{borderRadius: '50%'}}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
