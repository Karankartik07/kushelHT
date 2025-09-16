"use client"
import React, { useRef, useEffect, useState } from 'react';
import "./process.css";

const Progress = () => {
  const [inView, setInView] = useState(false);
  const progressRef = useRef(null);
  const [isSwitch, setIsSwitch] = useState(false);

  const handleSwitchChange = () => {
    setIsSwitch(!isSwitch);
  };

  const phasesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='headless-progress-outer-container'>
      <div className="headless-progress-inner-container">
        <h3 className='headless-progress-sm-heading primary-heading'>
        Our Headless Commerce Development Process

        </h3>
        <div className="progress-toggle-btn-div">
          <h3 className={`progress-company-name first-copmpany ${isSwitch ? 'textOpacity' : ''}`}>CUSTOM</h3>
          <input onChange={handleSwitchChange} type="checkbox" id="switch" />
          <label id='switchLabel' htmlFor="switch">Toggle</label>
          <h3 className={`progress-company-name second-copmpany ${!isSwitch ? 'textOpacity' : ''}`}>DYNAMIC</h3>
        </div>

        <div ref={progressRef} className="headless-phases-wrapper">
          {inView && (
            <div key={isSwitch ? "agile" : "hybrid"} ref={phasesRef} className="phases">
              {!isSwitch ? (
                <div className="headless-phases">
                  <div id='headless-phase1' className="headless-process-button"></div>
                  <div id='headless-phase1Name'>
                    <span>01</span>
                    <span className='headless-procBCom'>Planning</span>
                  </div>

                  <div id='headless-phase2' className="headless-process-button"></div>
                  <div id='headless-phase2Name'>
                    <span>02</span>
                    <span className='headless-procBCom'>UI/UX Design
                    </span>
                  </div>

                  <div id='headless-phase3' className="headless-process-button"></div>
                  <div id='headless-phase3Name'>
                    <span>03</span>
                    <span className='headless-procBCom'>Development</span>
                  </div>

                  <div id='headless-phase4' className="headless-process-button"></div>
                  <div id='headless-phase4Name'>
                    <span>04</span>
                    <span className='headless-procBCom'>Improvements</span>
                  </div>

                  <div id='headless-phase5' className="headless-process-button"></div>
                  <div id='headless-phase5Name'>
                    <span>05</span>
                    <span className='headless-procBCom'>Testing</span>
                  </div>

                  <div id='headless-phase6' className="headless-process-button"></div>
                  <div id='headless-phase6Name'>
                    <span>06</span>
                    <span className='headless-procBCom'>Growth and Scaling
                    </span>
                  </div>

                  <div id='headless-phase7' className="headless-process-button"></div>
                  <div id='headless-phase7Name'>
                    <span>07</span>
                    <span className='headless-procBCom'>Final <br/> Touches </span>
                  </div>

                  <div id='headless-phase8' className="headless-process-button"></div>
                  <div id='headless-phase8Name'>
                    <span>08</span>
                    <span className='headless-procBCom'>Deployment </span>
                  </div>
                </div>
              ) : (
                <div className="headless-phases">
<div id='headless-phase1' className="headless-process-button"></div>
        <div id='headless-phase1Name'>
          <span>01</span>
          <span className='headless-procBCom'>Sprint Setup</span>
        </div>

        <div id='headless-phase2' className="headless-process-button"></div>
        <div id='headless-phase2Name'>
          <span>02</span>
          <span className='headless-procBCom'>Wireframing</span>
        </div>

        <div id='headless-phase3' className="headless-process-button"></div>
        <div id='headless-phase3Name'>
          <span>03</span>
          <span className='headless-procBCom'>Project Setup</span>
        </div>

        <div id='headless-phase4' className="headless-process-button"></div>
        <div id='headless-phase4Name'>
          <span>04</span>
          <span className='headless-procBCom'>Development
          </span>
        </div>

        <div id='headless-phase5' className="headless-process-button"></div>
        <div id='headless-phase5Name'>
          <span>05</span>
          <span className='headless-procBCom'>Regular Testing</span>
        </div>

        <div id='headless-phase6' className="headless-process-button"></div>
        <div id='headless-phase6Name'>
          <span>06</span>
          <span className='headless-procBCom'>Regular Testing
          </span>
        </div>

        <div id='headless-phase7' className="headless-process-button"></div>
        <div id='headless-phase7Name'>
          <span>07</span>
          <span className='headless-procBCom'>Feedback
          </span>
        </div>

        <div id='headless-phase8' className="headless-process-button"></div>
        <div id='headless-phase8Name'>
          <span>08</span>
          <span className='headless-procBCom'>Final Review
          </span>
        </div>

                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Progress;
