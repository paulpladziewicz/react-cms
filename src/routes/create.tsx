import {createFileRoute} from '@tanstack/react-router'
import {useState, useEffect} from "react";
import contentTypes from "../constants/ContentTypes.ts";

export const Route = createFileRoute('/create')({
    component: RouteComponent,
})

function RouteComponent() {
    const [contentType, setContentType] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [dragActive, setDragActive] = useState(false);

    const handleContentTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContentType(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImages([...images, ...Array.from(event.target.files)]);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);

        if (event.dataTransfer.files) {
            const droppedFiles = Array.from(event.dataTransfer.files).filter((file) =>
                file.type.startsWith('image/')
            );
            setImages([...images, ...droppedFiles]);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDragEnter = () => setDragActive(true);
    const handleDragLeave = () => setDragActive(false);

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    useEffect(() => {
        const handlePaste = (event: ClipboardEvent) => {
            const items = event.clipboardData?.items || [];
            const pastedImages: File[] = [];

            for (const item of items) {
                if (item.type.startsWith('image/')) {
                    const file = item.getAsFile();
                    if (file) {
                        pastedImages.push(file);
                    }
                }
            }

            if (pastedImages.length > 0) {
                event.preventDefault();
                setImages((prevImages) => [...prevImages, ...pastedImages]);
            }
        };

        document.addEventListener('paste', handlePaste);

        return () => {
            document.removeEventListener('paste', handlePaste);
        };
    }, []);

    const renderDetailOverview = (contentType) => {
        switch (contentType) {
            case 'group':
                return (
                    <p>Please include the following details:
                        <ul>
                            <li>Title</li>
                            <li>Description</li>
                            <li>Common meeting location</li>
                            <li>If the group is virtual, provide a link</li>
                        </ul>
                    </p>
                );
        }
    };

    return (
        <div
            className={`container ${dragActive ? 'drag-active' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
        >
            <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                    <h1>Create Listing</h1>
                    <p>Select what type of listing you'd like to create and enter the information in plain English. We
                        avoid complex
                        forms.</p>
                    {/*<p>We'll review and make sure the listing is created accurately within 24 hours or we'll reach*/}
                    {/*    out for more*/}
                    {/*    information.</p>*/}

                    <h2>What type of listing would you like to create?</h2>
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
                                <label htmlFor={`contentType-${type.id}`} className="btn btn-outline-secondary">
                                    {type.label}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="mb-1 form-label">Email</label>
                                <input type="email" className="form-control" id="email"
                                       placeholder="Enter email address" required/>
                                <div className="form-text">You're currently not logged in. Please provide your email
                                    address in case we need more information.
                                </div>
                            </div>
                        </div>
                    </div>

                    {renderDetailOverview(contentType)}

                    <form action="">
                        <div className="form-group mb-3">
                            <label htmlFor="detail" className="mb-1 form-label">Details</label>
                            <textarea className="form-control" id="detail" rows="7"
                                      placeholder="Provide as much detail as you can here" required></textarea>
                            <div className="form-text">Don't worry about formatting. We'll make sure the listing
                                displays well.
                            </div>

                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-1 form-label">Add Images</label>
                            <input
                                type="file"
                                className="form-control"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            <div className="form-text">You can also drag or paste images anywhere on this screen.</div>
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
    );
}
