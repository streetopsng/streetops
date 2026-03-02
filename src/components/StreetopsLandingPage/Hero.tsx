import React, { useState, useEffect } from "react";

interface HeroProps {
    onOpenModal?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
    const [stats, setStats] = useState({
        total: 82,
        trust: 88,
        connection: 74,
        recognition: 82,
        pulseBars: [38, 52, 46, 64, 82],
    });

    useEffect(() => {
        const rand = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min + 1)) + min;

        const newTotal = rand(82, 100);

        setStats({
            total: newTotal,
            trust: rand(82, 100),
            connection: rand(82, 100),
            recognition: rand(82, 100),
            pulseBars: [
                rand(30, 70),
                rand(40, 80),
                rand(45, 85),
                rand(50, 95),
                newTotal,
            ],
        });
    }, []);

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="hero">
                <div>
                    <div className="hpill">
                        <span className="hpd"></span>Identity-First Behavioural Technology
                    </div>
                    <h1>
                        Your teams deserve a manager who can <i>actually see them.</i>
                    </h1>
                    <p className="hbody">
                        StreetOps gives managers real-time visibility into the human
                        dynamics inside their teams — so they can build culture, reduce
                        attrition, and drive performance with confidence.
                    </p>
                    <div className="hform" style={{ marginTop: '20px' }}>
                        <button
                            className="hbtn"
                            onClick={onOpenModal}
                            style={{ padding: '16px 28px', fontSize: '16px', borderRadius: '12px' }}
                        >
                            Get Early Access →
                        </button>
                    </div>
                </div>
                <div className="hvis">
                    <div className="hvbg"></div>
                    <div className="hc hc1">
                        <div className="hlbl">Team Engagement Score</div>
                        <div className="cnum">{stats.total}%</div>
                        <div className="csub">+6 pts this month</div>
                        <div className="cbars">
                            <div className="cbr">
                                <span className="cbn">Trust</span>
                                <div className="cbt">
                                    <div
                                        className="cbf"
                                        style={{ width: `${stats.trust}%`, transition: "width 1s ease-out" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="cbr">
                                <span className="cbn">Connection</span>
                                <div className="cbt">
                                    <div
                                        className="cbf"
                                        style={{ width: `${stats.connection}%`, transition: "width 1s ease-out" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="cbr">
                                <span className="cbn">Recognition</span>
                                <div className="cbt">
                                    <div
                                        className="cbf"
                                        style={{ width: `${stats.recognition}%`, transition: "width 1s ease-out" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hc hc2">
                        <div className="hlbl">Team Identity</div>
                        <div className="cbadge">The Strategist</div>
                        <div className="cnm">Amara O.</div>
                        <div className="crl">Product Lead</div>
                        <div className="ctags">
                            <span className="ctag">Builder</span>
                            <span className="ctag">Driver</span>
                            <span className="ctag">Connector</span>
                        </div>
                    </div>
                    <div className="hc hc3">
                        <div className="hlbl">Active Team</div>
                        <div className="cteam">
                            <div className="ctr">
                                <div className="cav" style={{ background: "#E50000" }}>AO</div>
                                <div style={{ flex: 1 }}>
                                    <div className="ctnm">Amara O.</div>
                                    <div className="ctrl">Product Lead</div>
                                </div>
                                <div className="cldot" style={{ background: "#22C55E" }}></div>
                            </div>
                            <div className="ctr">
                                <div className="cav" style={{ background: "#991B1B" }}>TA</div>
                                <div style={{ flex: 1 }}>
                                    <div className="ctnm">Tunde A.</div>
                                    <div className="ctrl">Sales Lead</div>
                                </div>
                                <div className="cldot" style={{ background: "#22C55E" }}></div>
                            </div>
                            <div className="ctr">
                                <div className="cav" style={{ background: "#5A0000" }}>EK</div>
                                <div style={{ flex: 1 }}>
                                    <div className="ctnm">Emeka K.</div>
                                    <div className="ctrl">Ops Lead</div>
                                </div>
                                <div className="cldot" style={{ background: "#FCD34D" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="hc hc4">
                        <div className="hlbl">Weekly Pulse</div>
                        <div className="cspark">
                            {stats.pulseBars.map((h, i) => (
                                <div
                                    key={i}
                                    className={`csb ${i === stats.pulseBars.length - 1 ? "on" : ""}`}
                                    style={{ height: `${h}%`, transition: "height 1s ease-out" }}
                                ></div>
                            ))}
                        </div>
                        <span className="cup">↑ Trending up</span>
                    </div>
                    <div className="hc hc5">
                        <div className="hlbl">Engagement Streak</div>
                        <div className="cstN">14</div>
                        <div className="cstS">weeks consistent 🔥</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
