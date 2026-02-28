import React from 'react';

const DemoCTA: React.FC = () => {
    return (
        <div className="demowrap" id="demo">
            <div className="demoin rv">
                <div className="dpre">Request a demo</div>
                <h2 className="dh">See what your team<br /><i>looks like with clarity.</i></h2>
                <p className="ds">Book a 30-minute demo and we will show you exactly how StreetOps works for your team — no generic slides,just your context and your questions.</p>
                <div className="dform">
                    <input className="di" type="email" placeholder="Enter your work email" />
                    <button className="db">Book a demo →</button>
                </div>
                <p className="dl">No commitment required. We will reach out within 24 hours.</p>
            </div>
        </div>
    );
};

export default DemoCTA;
