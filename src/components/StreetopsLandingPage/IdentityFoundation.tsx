import React from 'react';

const IdentityFoundation: React.FC = () => {
    return (
        <div className="idwrap">
            <div className="idin">
                <div className="rv">
                    <div className="idpre">The Foundation</div>
                    <h2 className="idh">Everything starts<br />with <i>identity.</i></h2>
                    <p className="idbody">Before any service activates,every team member is assigned an identity — a name,a role,and the core values that define how they work. This takes minutes. It powers everything. It is what makes StreetOps fundamentally different from every platform that came before it.</p>
                    <div className="idchips">
                        <span className="idch">Team Names</span>
                        <span className="idch">Core Values</span>
                        <span className="idch">Role Mapping</span>
                        <span className="idch">Behavioural Profile</span>
                    </div>
                </div>
                <div className="idvis rv d1">
                    <div className="idca">
                        <div style={{ fontSize: '9.5px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(229,0,0,.6)', fontWeight: 500, marginBottom: '10px' }}>Team Identity</div>
                        <div style={{ display: 'inline-block', background: 'rgba(229,0,0,.15)', border: '1px solid rgba(229,0,0,.3)', color: '#FF2020', fontSize: '10.5px', fontWeight: 600, padding: '3px 12px', borderRadius: '20px', marginBottom: '9px' }}>The Strategist</div>
                        <div style={{ fontSize: '21px', fontWeight: 700, color: '#fff' }}>Amara O.</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.4)', marginTop: '3px' }}>Product Lead</div>
                        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '11px' }}>
                            <span style={{ fontSize: '9.5px', padding: '2px 8px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '10px', color: 'rgba(255,255,255,.4)' }}>Builder</span>
                            <span style={{ fontSize: '9.5px', padding: '2px 8px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '10px', color: 'rgba(255,255,255,.4)' }}>Driver</span>
                            <span style={{ fontSize: '9.5px', padding: '2px 8px', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '10px', color: 'rgba(255,255,255,.4)' }}>Connector</span>
                        </div>
                    </div>
                    <div className="idcb">
                        <div style={{ fontSize: '9px', letterSpacing: '.13em', textTransform: 'uppercase', color: 'rgba(255,255,255,.25)', marginBottom: '9px' }}>Engagement Health</div>
                        <div style={{ fontSize: '34px', fontWeight: 700, color: '#FF2020', lineHeight: 1, fontFamily: '"Montserrat", sans-serif' }}>88%</div>
                        <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,.3)', marginTop: '3px', marginBottom: '9px' }}>This week · Amara</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '9.5px', color: 'rgba(255,255,255,.35)', width: '58px' }}>Clarity</span>
                                <div style={{ flex: 1, height: '3px', background: 'rgba(255,255,255,.08)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg,rgba(229,0,0,.6),#FF2020)', borderRadius: '2px' }}></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '9.5px', color: 'rgba(255,255,255,.35)', width: '58px' }}>Belonging</span>
                                <div style={{ flex: 1, height: '3px', background: 'rgba(255,255,255,.08)', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg,rgba(229,0,0,.6),#FF2020)', borderRadius: '2px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdentityFoundation;
