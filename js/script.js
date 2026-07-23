function loadPage(page) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (page === 'home') {
        content.innerHTML = `
            <section>
                <h1>Welcome to AIcademy</h1>
                <p>Your gateway to AI learning!</p>

                <h2>Why Learn AI?</h2>

                <p>
                    Artificial Intelligence is transforming the world we live in.
                    From self-driving cars to virtual assistants, AI is at the
                    forefront of innovation. Equip yourself with the skills to
                    thrive in this exciting field!
                </p>
            </section>

            <section>
                <h2>The Future of AI</h2>

                <p>
                    AI is set to revolutionize industries and redefine the way
                    we interact with technology. By 2030, AI could contribute
                    up to $15 trillion to the global economy.
                </p>

                <button class="enroll-btn">
                    Start Learning Today
                </button>
            </section>

            <section class="placements">
                <h2>Students Placed</h2>

                <p>Our learners are making waves in the industry!</p>

                <ul>
                    <li>Tushar Kamdi - Data Scientist at TechCorp</li>
                    <li>Manthan Narad - AI Engineer at InnovateAI</li>
                    <li>Sagar Chandankhede - Machine Learning Specialist at FutureTech</li>
                    <li>Shiv Kasat - Research Scientist at AI Labs</li>
                </ul>
            </section>
        `;
    }

    else if (page === 'courses') {

        content.innerHTML = `

            <section>

                <h1>AI Courses</h1>

                <ul>

                    <li>
                        <a href="#">
                            <img src="images/istockphoto-1452604857-612x612.jpg" alt="">
                            Machine Learning
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="images/Deep-Learning-vs-Machine-Learning.jpg" alt="">
                            Deep Learning
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="images/Natural-Language-Processing-1.png" alt="">
                            Natural Language Processing
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="images/Deep-Learning-vs-Machine-Learning.jpg" alt="">
                            Computer Vision
                        </a>
                    </li>

                </ul>

                <button class="enroll-btn">
                    Enroll Now
                </button>

            </section>

            <section>

                <h1>AI Tutorials</h1>

                <ul>

                    <li>
                        <a href="#">
                            <img src="images/DS-With-Python-Banner.jpg" alt="">
                            Python for AI
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="images/ai.jpg" alt="">
                            Artificial Intelligence Basics
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="images/pytorch.png" alt="">
                            PyTorch Tutorial
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="images/keras.png" alt="">
                            Keras Tutorial
                        </a>
                    </li>

                </ul>

                <button class="enroll-btn">
                    Enroll Now
                </button>

            </section>
        `;
    }
      else if (page === 'about') {

        content.innerHTML = `

            <section>

                <h1>About Us</h1>

                <p>
                    We are dedicated to providing the best AI education online.
                </p>

                <p>
                    Our mission is to empower learners with the knowledge they
                    need to succeed in the field of Artificial Intelligence.
                </p>

            </section>

            <section class="testimonials">

                <h2>What Our Students Say</h2>

                <div class="testimonial">
                    "The courses are well-structured and easy to follow!"
                </div>

                <div class="author">
                    - Kashish Singh
                </div>

                <div class="testimonial">
                    "I learned so much in a short time, highly recommend!"
                </div>

                <div class="author">
                    - Diksha Jambhule
                </div>

                <div class="testimonial">
                    "The hands-on projects helped me apply what I learned!"
                </div>

                <div class="author">
                    - Shri Prasad
                </div>

            </section>

        `;
    }

    else if (page === 'contact') {

        content.innerHTML = `

            <section>

                <h1>Contact Us</h1>

                <p>
                    If you have any questions, suggestions, or feedback,
                    we'd love to hear from you! Please fill out the form below,
                    and our team will get back to you as soon as possible.
                </p>

                <form>

                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    >

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    >

                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        required
                    >

                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        required>
                    </textarea>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

                <div class="contact-info">

                    <h2>
                        Alternatively, you can reach us at:
                    </h2>

                    <p>
                        Email:
                        <a href="mailto:support@aicademy.com">
                            support@aicademy.com
                        </a>
                    </p>

                    <p>
                        Phone:
                        <a href="tel:+1234567890">
                            +1 (234) 567-890
                        </a>
                    </p>

                    <p>Follow us on social media:</p>

                    <ul class="social-media">

                        <li>
                            <a href="#">
                                <img src="images/fb.png" alt="Facebook">
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/twi.png" alt="Twitter">
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="images/lin.png" alt="LinkedIn">
                            </a>
                        </li>

                    </ul>

                </div>

            </section>

        `;
    }
      else if (page === 'login') {

        content.innerHTML = `

            <section class="login-form">

                <h1>Login</h1>

                <form>

                    <input
                        type="text"
                        placeholder="Username"
                        required
                    >

                    <input
                        type="password"
                        placeholder="Password"
                        required
                    >

                    <button type="submit">
                        Login
                    </button>

                </form>

            </section>

        `;
    }
}
