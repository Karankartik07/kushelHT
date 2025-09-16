
"use client"
import React, { useRef, useEffect, useState } from 'react';
import "./perfect.css";

const Progress = () => {
    // const phasesRef = useRef(null);

    // useEffect(() => {
    //     if (phasesRef.current) {
    //         setTimeout(() => {
    //             phasesRef.current.scrollLeft = 0;
    //         }, 50);
    //     }
    // }, []);
const [inView, setInView] = useState(false);
    const progressRef = useRef(null);
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
        <div className='shopi-progress-outer-container'>
            <div className="shopi-progress-inner-container">
                <h2 className='sprogresss-sm-heading-primary-heading'>
                Our Headless Shopify Development Process
                </h2>
                {/* <h3 className='progress-sm-heading primary-heading'>
                    Kushel Digi believes in employing latest and advanced global process to deliver projects best suited with your business needs.
                </h3> */}

                <div ref={progressRef} className="shopi-phases-wrapper">
                   {
                    inView && (
                        <div ref={phasesRef} className="shopi-phases">
                        <div id='shopi-phase1' className="shopi-process-button"></div>
                        <div id='shopi-phase1Name'>
                            <span>01</span>
                            <span className='shopi-procBCom'>Discovery and <br></br> Strategy</span>
                        </div>

                        <div id='shopi-phase2' className="shopi-process-button"></div>
                        <div id='shopi-phase2Name'>
                            <span>02</span>
                            <span className='shopi-procBCom'>Architecture and <br></br>Planning</span>
                        </div>

                        <div id='shopi-phase3' className="shopi-process-button"></div>
                        <div id='shopi-phase3Name'>
                            <span>03</span>
                            <span className='shopi-procBCom'>Development and Integration</span>
                        </div>

                        <div id='shopi-phase4' className="shopi-process-button"></div>
                        <div id='shopi-phase4Name'>
                            <span>04</span>
                            <span className='shopi-procBCom'>Customization and Design</span>
                        </div>

                        <div id='shopi-phase5' className="shopi-process-button"></div>
                        <div id='shopi-phase5Name'>
                            <span>05</span>
                            <span className='shopi-procBCom'>Testing and Quality <br></br>Assurance</span>
                        </div>

                        <div id='shopi-phase6' className="shopi-process-button"></div>
                        <div id='shopi-phase6Name'>
                            <span>06</span>
                            <span className='shopi-procBCom'>Deployment and Optimization</span>
                        </div>

                        <div id='shopi-phase7' className="shopi-process-button"></div>
                        <div id='shopi-phase7Name'>
                            <span>07</span>
                            <span className='shopi-procBCom'>Training and Support</span>
                        </div>

                        <div id='shopi-phase8' className="shopi-process-button"></div>
                        <div id='shopi-phase8Name'>
                            <span>08</span>
                            <span className='shopi-procBCom'>Growth and Scaling</span>
                        </div>

                        {/* <div id='phase9' className="process-button"></div>
                        <div id='phase9Name'>
                            <span className='procBCom'>User Acceptance Testing</span>
                        </div>

                        <div id='phase10' className="process-button"></div>
                        <div id='phase10Name'>
                            <span>06</span>
                            <span className='procBCom'>Final Touches</span>
                        </div>

                        <div id='phase11' className="process-button"></div>
                        <div id='phase11Name'>
                            <span>07</span>
                            <span className='procBCom'>Deployment</span>
                        </div> */}
                    </div>
                    )
                   }
                </div>
            </div>
        </div>
    );
};

export default Progress;