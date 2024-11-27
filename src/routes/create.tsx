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
                    <p>Provide key details like the group's title, a brief description, where the group will meet, and a link if it's virtual.</p>
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
                    <p>Share your text and images, and we'll make it look great. You can upload images you want to showcase visually or photos with additional details you'd like us to convert into text, such as product listings, service descriptions, or menus.</p>
                    {/*<p>We'll review and make sure the listing is created accurately within 24 hours or we'll reach*/}
                    {/*    out for more*/}
                    {/*    information.</p>*/}

                    <h2>What type of listing would you like to create?</h2>
                    <div className="d-flex flex-wrap mb-4">
                        {contentTypes.map((type) => (
                            <div className="me-2 mb-2" key={type.id}>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    id={`contentType-${type.id}`}
                                    name="contentType"
                                    value={type.id}
                                    checked={contentType === type.id}
                                    onChange={handleContentTypeChange}
                                />
                                <label htmlFor={`contentType-${type.id}`} className="d-sm-none btn btn-outline-secondary btn-sm">
                                    {type.label}
                                </label>
                                <label htmlFor={`contentType-${type.id}`} className="d-none d-sm-block btn btn-outline-secondary">
                                    {type.label}
                                </label>
                            </div>
                        ))}
                    </div>

                    {renderDetailOverview(contentType)}

                    <form action="">
                        <div className="form-group mb-3">
                            <label htmlFor="detail" className="mb-1 form-label">Details (required)</label>
                            <textarea className="form-control" id="detail" rows="7"
                                      placeholder="Provide as much detail as you can here" required></textarea>
                            <div className="form-text">Don't worry about formatting. We'll make sure the listing
                                displays well.
                            </div>

                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-1 form-label">Add Images (optional)</label>
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
