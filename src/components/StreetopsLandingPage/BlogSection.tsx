import React from 'react';

const BlogSection: React.FC = () => {
    return (
        <div className="wrap" id="blog">
            <div className="rv">
                <div className="pre">From the blog</div>
                <h2 className="sh2">Thinking on teams,<br /><i>behaviour,and culture.</i></h2>
            </div>
            <div className="bloggrid">
                <a href="#" className="bc rv d1">
                    <div className="bth bt1">
                        <div className="btic">🧠</div>
                        <div className="bcat">Behavioural Tech</div>
                    </div>
                    <div className="bbd">
                        <div className="bdt">February 2026</div>
                        <div className="btn2">Why team engagement fails before it starts</div>
                        <div className="bex">Most engagement initiatives collapse in the first 90 days. Here is the behavioural reason why — and what identity-first onboarding changes.</div>
                    </div>
                </a>
                <a href="#" className="bc rv d2">
                    <div className="bth bt2">
                        <div className="btic">📊</div>
                        <div className="bcat">People Strategy</div>
                    </div>
                    <div className="bbd">
                        <div className="bdt">January 2026</div>
                        <div className="btn2">The true cost of a disengaged team member</div>
                        <div className="bex">The recruitment fee you pay when someone leaves is the smallest part. The real cost starts six months before they hand in their notice.</div>
                    </div>
                </a>
                <a href="#" className="bc rv d3">
                    <div className="bth bt3">
                        <div className="btic">🏆</div>
                        <div className="bcat">Team Culture</div>
                    </div>
                    <div className="bbd">
                        <div className="bdt">January 2026</div>
                        <div className="btn2">Social productivity:what it is and why it matters</div>
                        <div className="bex">Productivity measured in output misses the point. Social productivity measures something deeper — and predicts output better than any task tool can.</div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default BlogSection;
