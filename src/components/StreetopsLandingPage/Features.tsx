import React, { useState, useEffect } from "react";

const Features: React.FC = () => {
  const [stats, setStats] = useState({
    total: 82,
    pulseBars: [35, 50, 44, 68, 82],
  });

  useEffect(() => {
    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const newTotal = rand(82, 100);

    setStats({
      total: newTotal,
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
    <>
      <div className="band">
        <div className="btrk">
          <span className="bi r">Social Productivity</span>
          <span className="bi">·</span>
          <span className="bi">Behavioural Technology</span>
          <span className="bi">·</span>
          <span className="bi r">Team Intelligence</span>
          <span className="bi">·</span>
          <span className="bi">Identity-Native</span>
          <span className="bi">·</span>
          <span className="bi r">Africa-First</span>
          <span className="bi">·</span>
          <span className="bi">Human Dynamics</span>
          <span className="bi">·</span>
          <span className="bi r">Built for Teams</span>
          <span className="bi">·</span>
          <span className="bi r">Social Productivity</span>
          <span className="bi">·</span>
          <span className="bi">Behavioural Technology</span>
          <span className="bi">·</span>
          <span className="bi r">Team Intelligence</span>
          <span className="bi">·</span>
          <span className="bi">Identity-Native</span>
          <span className="bi">·</span>
          <span className="bi r">Africa-First</span>
          <span className="bi">·</span>
          <span className="bi">Human Dynamics</span>
          <span className="bi">·</span>
          <span className="bi r">Built for Teams</span>
          <span className="bi">·</span>
        </div>
      </div>

      {/* <div className="logos">
        <div className="llbl">Trusted by forward-thinking organisations</div>
        <div className="lrow">
          <div className="lco">DCSL · ETR</div>
          <div className="lco">Venture Garden</div>
          <div className="lco">ARM Holdings</div>
          <div className="lco">Helicarrier</div>
          <div className="lco">Kobo360</div>
          <div className="lco">SystemSpecs</div>
        </div>
      </div> */}

      <div className="wrap rv">
        <div className="pre">The reality</div>
        <h2 className="sh2">
          Most managers are leading blind.
          <br />
          <i>Here is what that costs.</i>
        </h2>
        <div className="sgrid">
          <div className="sc rv d1 glossy">
            <div className="sn">$8.9T</div>
            <div className="sl">
              <strong>Lost globally every year</strong> to low employee
              engagement and poor team productivity — Gallup 2024
            </div>
          </div>
          <div className="sc rv d2 glossy">
            <div className="sn">73%</div>
            <div className="sl">
              <strong>Of employees worldwide</strong> are disengaged. Most
              managers have no system to detect it early.
            </div>
          </div>
          <div className="sc rv d3 glossy">
            <div className="sn">2x</div>
            <div className="sl">
              <strong>Higher attrition risk</strong> in teams with no structured
              engagement or onboarding programme in year one
            </div>
          </div>
          <div className="sc rv d4 glossy">
            <div className="sn">11</div>
            <div className="sl">
              <strong>Behavioural dimensions</strong> tracked per
              team,continuously — giving managers a complete picture of how
              their people are really doing.
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" id="solutions" style={{ paddingTop: 0 }}>
        <div className="rv">
          <div className="pre">The ecosystem</div>
          <h2 className="sh2">
            One identity. Every service.
            <br />
            <i>All connected.</i>
          </h2>
          <p className="ssub">
            Use one service or all six. Every touchpoint feeds the same
            behavioural intelligence layer — so the more your team engages,the
            smarter the platform gets.
          </p>
        </div>
        <div className="solg">
          <div className="sol rv d1 glossy">
            <div className="smk glossy-inner">
              <div className="mhd">
                <span className="mtt">Team Engagement</span>
                <span className="mbg">Live</span>
              </div>
              <div className="mbig">{stats.total}%</div>
              <div className="msb">+6pts this week</div>
              <div className="mspk">
                {stats.pulseBars.map((h, i) => (
                  <div
                    key={i}
                    className={`msb2 ${i === stats.pulseBars.length - 1 ? "on" : ""}`}
                    style={{
                      height: `${h}%`,
                      transition: "height 1s ease-out",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="sbd">
              <div className="snm">Team Engagement</div>
              <div className="sdc">
                Continuous visibility into team health across 11 behavioural
                dimensions. Managers stop guessing and start leading with data.
              </div>
              {/* <a href="#" className="slk">Explore →</a> */}
            </div>
          </div>
          <div className="sol rv d2 glossy">
            <div className="smk glossy-inner">
              <div className="mhd">
                <span className="mtt">Team Onboarding</span>
                <span className="mbg">In progress</span>
              </div>
              <div className="mcl">
                <div className="mci">
                  <div className="mck mok">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5l2.5 2.5L8 1"
                        stroke="#16A34A"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  Identity assigned
                </div>
                <div className="mci">
                  <div className="mck mok">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5l2.5 2.5L8 1"
                        stroke="#16A34A"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  Values confirmed
                </div>
                <div className="mci">
                  <div className="mck mok">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5l2.5 2.5L8 1"
                        stroke="#16A34A"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  Team introductions
                </div>
                <div className="mci">
                  <div className="mck mpe">
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                      <path
                        d="M1 3.5l2.5 2.5L8 1"
                        stroke="#CA8A04"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  First week check-in
                </div>
              </div>
            </div>
            <div className="sbd">
              <div className="snm">Team Onboarding</div>
              <div className="sdc">
                New hires connected to the team's identity,values,and people
                from day one. Not a process — a belonging experience.
              </div>
              {/* <a href="#" className="slk">Explore →</a> */}
            </div>
          </div>
          <div className="sol rv d3 glossy">
            <div className="smk glossy-inner">
              <div className="mhd">
                <span className="mtt">Task Tracker</span>
                <span className="mbg">3 due today</span>
              </div>
              <div className="mtkl">
                <div className="mtki">
                  <div className="mtkd dn"></div>
                  <span className="mtkn">Weekly report</span>
                  <span className="mtkw">Amara</span>
                </div>
                <div className="mtki">
                  <div className="mtkd dn"></div>
                  <span className="mtkn">Client deck</span>
                  <span className="mtkw">Tunde</span>
                </div>
                <div className="mtki">
                  <div className="mtkd dp"></div>
                  <span className="mtkn">Standup notes</span>
                  <span className="mtkw">Emeka</span>
                </div>
                <div className="mtki">
                  <div className="mtkd dt"></div>
                  <span className="mtkn">Q2 planning</span>
                  <span className="mtkw">All</span>
                </div>
              </div>
            </div>
            <div className="sbd">
              <div className="snm">Task Tracker</div>
              <div className="sdc">
                Recurring SOPs and team tasks with a behavioural intelligence
                layer. See who is thriving,who is struggling,and why.
              </div>
              {/* <a href="#" className="slk">Explore →</a> */}
            </div>
          </div>
          <div className="sol sw rv glossy">
            <div className="smk glossy-inner">
              <div className="mhd">
                <span className="mtt">Games & Collaboration</span>
                <span className="mbg">Live session</span>
              </div>
              <div className="mgm">
                <div className="mgn">Team Rebus Challenge</div>
                <div className="mgavs">
                  <div className="mga" style={{ background: "#E50000" }}>
                    AO
                  </div>
                  <div className="mga" style={{ background: "#991B1B" }}>
                    TA
                  </div>
                  <div className="mga" style={{ background: "#5A0000" }}>
                    EK
                  </div>
                  <div className="mga" style={{ background: "#3D0000" }}>
                    +4
                  </div>
                </div>
                <div className="mgq">
                  🔊 Sounds like a common phrase…
                  <div className="mgos">
                    <div className="mgs">Amara →</div>
                    <div className="mgd">Tunde</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sbd">
              <div className="snm">Games & Collaboration</div>
              <div className="sdc" style={{ maxWidth: "340px" }}>
                Identity-powered team games and bonding — online or physical.
                Connection that is designed,not accidental. The behavioural
                layer runs underneath every session.
              </div>
              {/* <a href="#" className="slk">Explore →</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
