import React from 'react';

const Physical: React.FC = () => {
    return (
        <div className="physwrap" id="physical">
            <div className="wrap">
                <div className="rv">
                    <div className="pre">In-person services</div>
                    <h2 className="sh2">We also show up<br /><i>in the room.</i></h2>
                    <p className="ssub">The platform is powerful. But some things only happen when people are physically together. StreetOps delivers hands-on team experiences that our behavioural methodology makes genuinely effective — not just fun for a day.</p>
                </div>
                <div className="physgrid">
                    <div className="pc rv d1">
                        <span className="pem">🏟️</span>
                        <div className="ptag">Live Consulting</div>
                        <div className="pnm">Team Engagement Consulting</div>
                        <div className="pdc">We come in,assess your team's behavioural dynamics,and design a tailored engagement programme. Not sticky notes — a structured intervention backed by data.</div>
                        <div className="plist">
                            <div className="pi"><div className="pdot"></div>Team diagnostic and behavioural assessment</div>
                            <div className="pi"><div className="pdot"></div>Custom engagement programme design</div>
                            <div className="pi"><div className="pdot"></div>Manager coaching and action plan</div>
                            <div className="pi"><div className="pdot"></div>Follow-up measurement and reporting</div>
                        </div>
                        <a href="#demo" className="plk">Talk to us about consulting →</a>
                    </div>
                    <div className="pc rv d2">
                        <span className="pem">🎯</span>
                        <div className="ptag">Physical Experience</div>
                        <div className="pnm">Team Bonding Sessions</div>
                        <div className="pdc">High-energy,identity-driven experiences delivered on-site. Designed around who your team actually is — not generic corporate fun that everyone forgets by Monday.</div>
                        <div className="plist">
                            <div className="pi"><div className="pdot"></div>Identity-mapped team activities and games</div>
                            <div className="pi"><div className="pdot"></div>Facilitated by StreetOps practitioners</div>
                            <div className="pi"><div className="pdot"></div>Full-day,half-day,and off-site formats</div>
                            <div className="pi"><div className="pdot"></div>Debrief with behavioural insights</div>
                        </div>
                        <a href="#demo" className="plk">Book a bonding session →</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Physical;
