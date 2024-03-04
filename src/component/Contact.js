import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container text-center mt-5 pt-5">
                <span>--------</span>
            </div>
            <div className="row w-100 justify-content-center">
                <div className="text-center">
                    <h3 className="mb-4">CONTACT US</h3>
                </div>
            </div>
            <div id="map-container-google-2" className="mt-5 z-depth-1-half container justify-content-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.444959259489!2d72.87908964936956!3d21.24087492768481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709388211488!5m2!1sen!2sin"
                    width="100%"
                    height="650"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </>
    )
}

export default Contact