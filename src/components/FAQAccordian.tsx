import { Accordion } from 'react-bootstrap';

function FAQAccordion() {
    return (
        <Accordion defaultActiveKey="0" id="faq" className="pe-md-5">
            <Accordion.Item eventKey="0" className="bg-transparent mb-n1 mb-xl-1">
                <Accordion.Header>
                    <span className="pe-3">What measures are in place to maintain a safe and welcoming community environment?</span>
                </Accordion.Header>
                <Accordion.Body className="fs-sm">
                    <p>
                        We prioritize creating a safe and welcoming environment by regularly reviewing content to ensure it
                        aligns with our community standards. Our platform is designed to foster connection and collaboration,
                        focusing on bringing people together rather than just the individual, reducing the likelihood of
                        offensive interactions. Additionally, all members must be 18 years or older to register.
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="bg-transparent mb-n1 mb-xl-1">
                <Accordion.Header>
                    <span className="pe-3">How is my personal information protected on this platform? Can I delete my account and data if I no longer wish to use the platform?</span>
                </Accordion.Header>
                <Accordion.Body className="fs-sm">
                    <p>
                        We take your privacy seriously and implement robust security measures to protect your personal
                        information. We do not share any data with third parties. If you decide to delete your account or
                        the content you've created on the platform, rest assured that it will be permanently removed from
                        our system without retention.
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="bg-transparent mb-n1 mb-xl-1">
                <Accordion.Header>
                    <span className="pe-3">How can I report inappropriate content or behavior?</span>
                </Accordion.Header>
                <Accordion.Body className="fs-sm">
                    <p>
                        You can easily report inappropriate content or behavior by using the contact form located right next
                        to this section. Your concerns will be addressed promptly to ensure a safe and welcoming environment
                        for everyone.
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="bg-transparent mb-n1 mb-xl-1">
                <Accordion.Header>
                    <span className="pe-3">What guidelines should I follow when creating content?</span>
                </Accordion.Header>
                <Accordion.Body className="fs-sm">
                    <p>
                        When creating content, we encourage respectful and positive interactions that contribute to a
                        welcoming community. Please avoid any offensive, inappropriate, or harmful material, and ensure
                        your content aligns with our platform's values. For detailed guidelines, refer to our Terms of
                        Service, which outline the standards for appropriate behavior and content creation.
                    </p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="bg-transparent mb-n1 mb-xl-1">
                <Accordion.Header>
                    <span className="pe-3">How does the platform handle communication between users?</span>
                </Accordion.Header>
                <Accordion.Body className="fs-sm">
                    <p>
                        Currently, communication between users is primarily handled via email. This ensures that messages
                        are direct and efficient, while still allowing users to connect based on the information available
                        on the platform.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FAQAccordion;
