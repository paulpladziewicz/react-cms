import { useState } from 'react';
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';

function SubscribeSection() {
    const [email, setEmail] = useState('');
    const [subscribedMessage, setSubscribedMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setSubscribedMessage('');
        setIsSubmitting(true);

        try {
            // Simulate an API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubscribedMessage('Thank you for subscribing!');
            setEmail('');
        } catch (error) {
            setSubscribedMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="subscribe" className="bg-primary py-5" data-bs-theme="dark">
            <Container className="pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3">
                <Row className="pt-sm-3 pt-md-4">
                    <Col md={6} xl={5} className="offset-xl-1">
                        <h2 className="display-3">Stay informed with the latest updates</h2>
                    </Col>
                    <Col md={6} lg={5} xl={4} className="offset-lg-1">
                        <p className="text-body fs-xl pb-4 mb-2 mb-lg-3">
                            Our platform is constantly evolving with new features and improvements. Subscribe to our
                            newsletter, and we'll keep you informed so you can make the most of the latest updates as soon
                            as they're available.
                        </p>
                        {subscribedMessage && (
                            <p className="text-body">{subscribedMessage}</p>
                        )}
                        <Form onSubmit={handleSubscribe}>
                            <InputGroup>
                                <InputGroup.Text className="text-body-secondary">
                                    <i className="ai-mail"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button type="submit" className="btn-warning" disabled={isSubmitting}>
                                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                </Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <div className="d-none d-md-block text-center mt-n5">
                    <svg
                        className="text-warning ms-lg-5"
                        width="171"
                        height="97"
                        viewBox="0 0 171 97"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M169.319 54.333C162.404 ..."></path>
                    </svg>
                </div>
            </Container>
        </section>
    );
}

export default SubscribeSection;
