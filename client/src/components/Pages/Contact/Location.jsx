import React from 'react'

const Location = () => {
    return (
        < div className='mt-20 w-[98%] h-[40vh] mx-auto'>
            <iframe
                className="w-full h-72 rounded-2xl shadow-lg h-f"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.6350062585216!2d79.93315177430581!3d23.147012911674818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae11953e4813%3A0x5ed47710c0e66e3a!2sJabalpur%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1740758667361!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Jabalpur Incubation Center"
            ></iframe>
        </div>
    )
}

export default Location
