//import React from 'react'

export default function EmailService() {
  return (
        <div className="email-service">
            <h2 className="email-service-title">Automating Email Delivery with AWS: A Scalable Solution 📨</h2>
            <p>April 2024 - May 2024</p>
            <p>Independent Project</p>

            <section className="project-section">
                <h3>Project Overview</h3>
                <p>In this project, I aimed to automate email delivery using AWS services such as S3, SNS, Lambda, DynamoDB, and SES. The objective was to create a scalable and reliable system capable of handling large volumes of data.</p>
            </section>

            <section className="project-section">
                <h3>Accomplishments</h3>
                <ul>
                    <li>Designed and implemented a scalable email delivery system utilizing AWS services:</li>
                    <ul>
                        <li>Utilized Amazon S3 as the primary storage solution for CSV files, triggering events upon upload.</li>
                        <li>Implemented Amazon SNS to mediate between S3 and Lambda functions, ensuring efficient communication.</li>
                        <li>Utilized AWS Lambda to process incoming messages and trigger subsequent actions based on S3 events.</li>
                        <li>Deployed Amazon DynamoDB as a managed NoSQL database for storing metadata about email messages.</li>
                        <li>Employed Amazon SES for reliable email delivery, offering support for transactional and bulk sending.</li>
                    </ul>
                    <li>Ensured scalability and decoupling:</li>
                    <ul>
                        <li>Implemented SNS for decoupling components, allowing for flexible and scalable architecture.</li>
                        <li>Leveraged serverless solutions like Lambda and DynamoDB to reduce operational overhead, ensuring automatic scaling and cost efficiency.</li>
                        <li>Optimized email delivery process with SES, ensuring high deliverability rates for both transactional and bulk emails.</li>
                    </ul>
                    <li>Streamlined email delivery:</li>
                    <ul>
                        <li>Developed fault-tolerant design patterns to enhance reliability and enable real-time processing of email messages.</li>
                    </ul>
                </ul>
            </section>
        </div>

  )
}
