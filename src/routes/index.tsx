import {createFileRoute, Link} from '@tanstack/react-router'
import ContentTypeButtonGroup from "../components/ContentTypeButtonGroup.tsx";
import FAQAccordion from "../components/FAQAccordian.tsx";
import ContactForm from "../components/ContactForm.tsx";
import SubscribeSection from "../components/SubscribeSection.tsx";

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <div className="container">
                <div className="row my-3 my-md-5 pb-5">
                    <div className="col-md-5 d-flex align-items-center order-md-2">
                        <img className="mb-3 mb-md-0" src="https://cdn.fremontmi.com/optimized-heart.png"
                             alt="downtown fremont"/>
                    </div>
                    <div className="col-md-7 d-flex align-items-center order-md-1">
                        <div>
                            <h1 className="display-2">Local Directory for Fremont, Michigan</h1>
                            <p className="fs-lg mb-3">Helping you find what you're looking for in the local community —
                                without distractions or privacy concerns.</p>
                            <ContentTypeButtonGroup/>
                            <a className="btn btn-lg btn-link p-0 mt-3" href="/about">
                                Why we built FremontMI.com
                                <i className="ai-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 gy-sm-5 gx-4 pb-3 pb-md-4 pb-lg-5 mb-md-3 mb-lg-0">

                    <div className="col text-center mx-auto" style={{maxWidth: '450px'}}>
                        <div className="ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{width: '68px'}}>
                            <i className="ai-search text-primary fs-1 d-flex align-items-center justify-content-center position-absolute start-0"></i>
                            <svg className="position-absolute top-0 start-0 text-primary" width="68" height="68"
                                 viewBox="0 0 68 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M56.0059 60.5579C44.1549 78.9787 18.0053 58.9081 6.41191 46.5701C-2.92817 35.5074 -2.81987 12.1818 11.7792 3.74605C30.0281 -6.79858 48.0623 7.40439 59.8703 15.7971C71.6784 24.1897 70.8197 37.5319 56.0059 60.5579Z"
                                    fill-opacity="0.1"></path>
                            </svg>
                        </div>
                        <h3 className="h4 pb-2 mb-1">Search Local</h3>
                        <p className="mb-0">Don't worry about keywords. Simply describe what you're looking for, and
                            we'll show you relevant content on the platform.</p>
                        <Link className="btn btn-lg btn-link p-0 mt-3" href="/search">
                            Search
                            <i className="ai-arrow-right ms-2"></i>
                        </Link>
                    </div>

                    <div className="col text-center mx-auto" style={{maxWidth: '450px'}}>
                        <div className="ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{width: '68px'}}>
                        <i className="ai-map text-primary fs-1 d-flex align-items-center justify-content-center position-absolute start-0"></i>
                            <svg className="position-absolute top-0 start-0 text-primary" width="68" height="68"
                                 viewBox="0 0 68 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M65.0556 29.2672C75.4219 46.3175 48.5577 59.7388 33.8299 64.3181C21.0447 67.5599 1.98006 58.174 0.888673 42.8524C-0.475555 23.7004 18.3473 14.5883 29.9289 8.26059C41.5104 1.93285 52.0978 7.9543 65.0556 29.2672Z"
                                    fill-opacity="0.1"></path>
                            </svg>
                        </div>
                        <h3 className="h4 pb-2 mb-1">Explore</h3>
                        <p className="mb-0">When you're looking to learn more about what the community has to offer in general, we'll ask you questions to help you follow your curiosity finding things.</p>
                        <Link className="btn btn-lg btn-link p-0 mt-3" href="/explore">
                            Explore
                            <i className="ai-arrow-right ms-2"></i>
                        </Link>
                    </div>

                    <div className="col text-center mx-auto" style={{maxWidth: '450px'}}>
                        <div className="ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{width: '68px'}}>
                            <i className="ai-circle-plus text-primary fs-1 d-flex align-items-center justify-content-center position-absolute start-0"></i>
                            <svg className="position-absolute top-0 start-0 text-primary" width="68" height="68"
                                 viewBox="0 0 68 68" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.34481 53.5078C-7.24653 42.4218 11.4487 18.9206 22.8702 8.55583C33.0946 0.223307 54.3393 0.690942 61.7922 14.1221C71.1082 30.9111 57.886 47.1131 50.0546 57.7358C42.2233 68.3586 30.084 67.3653 9.34481 53.5078Z"
                                    fill-opacity="0.1"></path>
                            </svg>
                        </div>
                        <h3 className="h4 pb-2 mb-1">Create Listings</h3>
                        <p className="mb-0">Select what type of listing you'd like to create, and provide the information without complex forms.</p>
                        <Link className="btn btn-lg btn-link p-0 mt-3" href="/create">
                            Create
                            <i className="ai-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <section className="bg-secondary position-relative py-4 py-md-5">
                <div className="container position-relative z-2">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
                        <div className="col d-flex justify-content-center">
                            <div className="py-3 my-lg-2 my-xl-3 text-center">
                                <div className="text-dark display-4 mb-1">5</div>
                                <p className="fs-xl fw-medium mb-0">Articles</p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="py-3 my-lg-2 my-xl-3 text-center">
                                <div className="text-dark display-4 mb-1">2</div>
                                <p className="fs-xl fw-medium mb-0">Groups</p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="py-3 ps-xl-4 my-lg-2 my-xl-3 text-center">
                                <div className="text-dark display-4 mb-1">15</div>
                                <p className="fs-xl fw-medium mb-0">Upcoming Events</p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="py-3 my-lg-2 my-xl-3 text-center">
                                <div className="text-dark display-4 mb-1">30</div>
                                <p className="fs-xl fw-medium mb-0">Businesses</p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="py-3 my-lg-2 my-xl-3 text-center">
                                <div className="text-dark display-4 mb-1">4</div>
                                <p className="fs-xl fw-medium mb-0">NeighborServices™</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-5">
                    <div className="row py-2 py-sm-4 py-md-5 mt-lg-2">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <div className="ps-md-3 ps-lg-4 ps-xl-5">
                                <h2 className="h1 pb-sm-1 pb-md-3">Common Questions &amp; Answers</h2>

                                <FAQAccordion />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <SubscribeSection />

        </>
    )
}
