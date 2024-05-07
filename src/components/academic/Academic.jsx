//import React from 'react'
import cloudCore from '../../assets/cloud-core.pdf'
import digital from '../../assets/digital-information.pdf'
import java from '../../assets/java.pdf'
import internet from '../../assets/principles-internet.pdf'
import cloud from '../../assets/public-cloud.pdf'
import aws from '../../assets/Coursera aws1.pdf'
import './style.css'
export default function Academic() {

        const certificates = [
                {
                    title: "AWS Cloud Technical Essentials",
                    src: aws, 
                    id: 'certificate-1' 
                },
                {
                    title: "A Beginner's Guide to Public Cloud Platforms",
                    src: cloud, 
                    id: 'certificate-2' 
                },
                {
                    title: "Computer Science Principles: Digital Information",
                    src: digital,
                    id: 'certificate-3' 
                },
                {
                    title: "Computer Science Principles: The Internet",
                    src: internet,
                    id: 'certificate-4'
                },
                {
                    title: "Java Object-Oriented Programming",
                    src: java,
                    id: 'certificate-5'
                },
                {
                    title: "Learning Cloud Computing: Core Concepts",
                    src: cloudCore,
                    id: 'certificate-6' 
                },

                
        ];
    return (
        <div className="credentials-container">
            <h2 className="credentials-title">My Certificates</h2>
            {certificates.map((certificate) => (
                <div key={certificate.id} className="certificate">
                    <h3>{certificate.title}</h3>
                    <object
                        data={certificate.src}
                        type="application/pdf"
                        width="500"
                        height="300"
                        aria-label={`Certificate - ${certificate.title}`}
                    >
                        <p>Your browser does not support PDFs. 
                             <a href={certificate.src}>Download the PDF</a>.</p>
                    </object>
                </div>
            ))}
        </div>
    )
}
