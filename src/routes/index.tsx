import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import ContentTypeButtonGroup from "../components/ContentTypeButtonGroup.tsx";

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
                        <h3 className="h4 pb-2 mb-1">Explore & Find Local</h3>
                        <p className="mb-0">Find things nearby without distractions. Even ads support businesses or
                            individuals in the community.</p>
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
                        <h3 className="h4 pb-2 mb-1">Easily Create</h3>
                        <p className="mb-0">Register to create your own groups, events, businesses, or NeighborServices™
                            profile.</p>
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
                        <h3 className="h4 pb-2 mb-1">No Privacy Concerns</h3>
                        <p className="mb-0">We don’t track identifiable user behavior or share personal data. Fully
                            compliant with many privacy regulations like GDPR, CCPA, and PECR.</p>
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

                                <div className="accordion pe-md-5" id="faq">
                                    <div className="accordion-item bg-transparent mb-n1 mb-xl-1">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button fs-6 py-3 px-0" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#groups-create"
                                                    aria-expanded="true" aria-controls="groups-create">
                                                <span className="pe-3">What measures are in place to maintain a safe and welcoming community environment?</span>
                                            </button>
                                        </h3>
                                        <div className="accordion-collapse collapse show" id="groups-create"
                                             data-bs-parent="#faq">
                                            <div className="accordion-body fs-sm">
                                                <p>We prioritize creating a safe and welcoming environment by regularly
                                                    reviewing content to ensure it aligns with our community standards.
                                                    Our
                                                    platform is designed to foster connection and collaboration,
                                                    focusing on
                                                    bringing people together rather than just the individual, reducing
                                                    the
                                                    likelihood of offensive interactions. Additionally, all members must
                                                    be 18
                                                    years or older to register.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item bg-transparent mb-n1 mb-xl-1">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button fs-6 py-3 px-0 collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#groups-announcements"
                                                    aria-expanded="false" aria-controls="groups-announcements">
                                                <span className="pe-3">How is my personal information protected on this platform? Can I delete my account and data if I no longer wish to use the platform?</span>
                                            </button>
                                        </h3>
                                        <div className="accordion-collapse collapse" id="groups-announcements"
                                             data-bs-parent="#faq">
                                            <div className="accordion-body fs-sm">
                                                <p>We take your privacy seriously and implement robust security measures
                                                    to
                                                    protect your personal information. We do not share any data with
                                                    third
                                                    parties. If you decide to delete your account or the content you've
                                                    created
                                                    on the platform, rest assured that it will be permanently removed
                                                    from our
                                                    system without retention.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item bg-transparent mb-n1 mb-xl-1">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button fs-6 py-3 px-0 collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#events-view"
                                                    aria-expanded="false" aria-controls="events-view">
                                                <span className="pe-3">How can I report inappropriate content or behavior?</span>
                                            </button>
                                        </h3>
                                        <div className="accordion-collapse collapse" id="events-view"
                                             data-bs-parent="#faq">
                                            <div className="accordion-body fs-sm">
                                                <p>You can easily report inappropriate content or behavior by using the
                                                    contact
                                                    form located right next to this section. Your concerns will be
                                                    addressed
                                                    promptly to ensure a safe and welcoming environment for
                                                    everyone.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item bg-transparent mb-n1 mb-xl-1">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button fs-6 py-3 px-0 collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#events-create"
                                                    aria-expanded="false" aria-controls="events-create">
                                                <span className="pe-3">What guidelines should I follow when creating content?</span>
                                            </button>
                                        </h3>
                                        <div className="accordion-collapse collapse" id="events-create"
                                             data-bs-parent="#faq">
                                            <div className="accordion-body fs-sm">
                                                <p>When creating content, we encourage respectful and positive
                                                    interactions that
                                                    contribute to a welcoming community. Please avoid any offensive,
                                                    inappropriate, or harmful material, and ensure your content aligns
                                                    with our
                                                    platform's values. For detailed guidelines, refer to our Terms of
                                                    Service,
                                                    which outline the standards for appropriate behavior and content
                                                    creation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item bg-transparent mb-n1 mb-xl-1">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button fs-6 py-3 px-0 collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#events-update"
                                                    aria-expanded="false" aria-controls="events-update">
                                                <span className="pe-3">How does the platform handle communication between users?</span>
                                            </button>
                                        </h3>
                                        <div className="accordion-collapse collapse" id="events-update"
                                             data-bs-parent="#faq">
                                            <div className="accordion-body fs-sm">
                                                <p>Currently, communication between users is primarily handled via
                                                    email. This
                                                    ensures that messages are direct and efficient, while still allowing
                                                    users
                                                    to connect based on the information available on the platform.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h2 className="h1" id="contact-us">Contact us</h2>
                            <p>We're here to help with any questions, suggestions, or feedback you might have. Whether
                                you're
                                looking for more information or need assistance with our platform, feel free to reach
                                out.</p>

                            <form className="row g-4 needs-validation" noValidate="" id="contactForm">
                                <div className="col-sm-6">
                                    <label className="form-label fs-base" htmlFor="name">Name</label>
                                    <input className="form-control form-control-lg" type="text" placeholder="Your name"
                                           required="" id="name"/>
                                    <div className="invalid-feedback">Please enter your name!</div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label fs-base" htmlFor="email">Email</label>
                                    <input className="form-control form-control-lg" type="email"
                                           placeholder="Email address" required="" id="email"/>
                                    <div className="invalid-feedback">Please provide a valid email address!</div>
                                </div>
                                <div className="col-sm-12">
                                    <label className="form-label fs-base" htmlFor="message">Message</label>
                                    <textarea className="form-control form-control-lg" rows="5"
                                              placeholder="Enter your message here..." required=""
                                              id="message"></textarea>
                                    <div className="invalid-feedback">Please enter your message!</div>
                                </div>
                                <div className="col-sm-12 pt-2">
                                    <button id="submit-button" className="btn btn-lg btn-primary" type="button"
                                            onClick="submitContactForm()">Send message
                                    </button>
                                    <button id="loading-button" className="btn btn-lg btn-primary pe-none" type="button"
                                            style={{display: 'none'}}>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"
                                              aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                </div>
                                <div id="form-message" className="alert mt-4" style={{display: 'none'}}></div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

            <section id="subscribe" className="bg-primary py-5" data-bs-theme="dark">
                <div className="container pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3">
                    <div className="row pt-sm-3 pt-md-4">
                        <div className="col-md-6 col-xl-5 offset-xl-1">
                            <h2 className="display-3">Stay informed with the latest updates</h2>
                        </div>
                        <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
                            <p className="text-body fs-xl pb-4 mb-2 mb-lg-3">Our platform is constantly evolving with
                                new features
                                and improvements. Subscribe to our newsletter, and we'll keep you informed so you can
                                make the
                                most of the latest updates as soon as they're available.</p>
                            <p className="text-body" th:if="${subscribedMessage}" th:text="${subscribedMessage}"></p>
                            <form th:action="@{/subscribe}" method="post"
                                  onSubmit="disableSubmitButtonWhileSubmitting(this)">
                                <div className="input-group">
                            <span className="input-group-text text-body-secondary">
                              <i className="ai-mail"></i>
                            </span>
                                    <input className="form-control" type="email" placeholder="Enter your email"
                                           name="email" required/>
                                    <button className="btn btn-warning" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="d-none d-md-block text-center mt-n5">
                        <svg className="text-warning ms-lg-5" width="171" height="97" viewBox="0 0 171 97"
                             fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M169.319 54.333C162.404 55.9509 155.712 58.0764 149.09 60.6764L149.07 60.6761C148.967 60.7158 148.863 60.7554 148.76 60.7951C147.3 61.3811 148.325 63.4238 149.672 63.2067C154.548 62.4134 159.994 59.8725 164.87 59.0792C148.278 73.1339 129.684 89.2549 107.779 92.6402C85.6981 96.0539 65.5665 86.7839 56.8768 66.9865C70.9662 55.0671 79.2106 35.6614 79.0299 17.6457C78.9484 10.3157 76.1485 -3.36373 65.7068 1.21851C55.8557 5.53146 52.0466 22.5213 50.5736 31.7739C48.7364 43.2858 49.7593 55.5291 53.8643 66.2014C52.787 67.0812 51.6907 67.8989 50.5755 68.6546C40.6328 75.3851 27.1039 78.8929 16.4487 72.0362C2.91045 63.3259 1.93984 44.9485 1.56902 30.4091C1.54778 29.6265 0.359869 29.6092 0.360624 30.3915C0.322634 44.0809 0.835929 59.065 10.5664 69.6857C18.5722 78.4182 30.4315 79.7753 41.3346 75.9924C46.2437 74.2834 50.7739 71.7557 54.8581 68.6348C59.9738 80.2586 68.9965 89.6956 82.2735 93.7393C113.474 103.223 141.744 83.0494 164.903 63.697L161.901 71.0334C161.267 72.5887 163.76 73.2736 164.393 71.7389C165.986 67.8713 167.569 63.9933 169.152 60.1359C169.288 60.0247 169.695 58.6127 169.821 58.491C170.122 57.1161 169.152 60.1359 169.851 58.4169C170.189 57.6087 170.517 56.79 170.855 55.9818C171.248 54.9994 170.185 54.1192 169.319 54.333ZM54.3624 59.8578C51.4872 49.1623 51.6051 37.5841 54.2025 26.8039C55.5185 21.3369 57.4405 15.8066 60.1572 10.8541C61.2311 8.89354 62.5139 6.77134 64.2307 5.31421C69.4231 0.902277 74.3649 4.80357 75.8002 10.4446C80.5272 28.9489 70.1806 51.6898 55.8431 64.5114C55.2971 63.0109 54.793 61.4698 54.3624 59.8578Z"></path>
                        </svg>
                    </div>
                </div>
            </section>

        </>
    )
}
