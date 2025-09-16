'use client'

import React, { useState ,useRef, useEffect} from 'react';
import "./Process.css";

const Progress = ({page}) => {

    const [isSwitch, setIsSwitch] = useState(false);

    const handleSwitchChange = () => {
        setIsSwitch(!isSwitch);
    }
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
        <div className='progress-outer-container'>
            <div className="progress-inner-container">
                <h3 className='progress-heading primary-heading '>Our {page} Development Process</h3>
                <h3 className='progress-sm-heading secondary-heading'>Kushel Digi believes in employing latest and advanced global process to deliver projects best suited with your business needs.</h3>

                <div className="progress-toggle-btn-div">
                    <h4 className={`progress-company-name first-copmpany ${isSwitch ? 'textOpacity' : ''}`}>CUSTOM</h4>
                    <input onChange={() => handleSwitchChange()} type="checkbox" id="switch" />
                    <label id='switchLabel' htmlFor="switch">Toggle</label>
                    <h4 className={`progress-company-name second-copmpany ${!isSwitch ? 'textOpacity' : ''}`}>DYNAMIC</h4>
                </div>

                <div ref={progressRef} className="phases-wrapper">
               {
                inView && (
                    <div key={isSwitch ? "agile" : "hybrid"} ref={phasesRef} className="phases">
                    {
                        !isSwitch ? (
                            <>
                            <div id='phase1' className="process-button"></div>
                                <div id='phase1Name'>
                                    <span className=''>01</span>
                                    <span className='procBCom'>Planning</span>
                                </div>
    
                                <div id='phase2' className="process-button"></div>
                                <div id='phase2Name'>
                                    <span className=''>02</span>
                                    <span className='procBCom'>UI/UX Design   </span>
                                </div>
    
                                <div id='phase3' className="process-button"></div>
                                <div id='phase3Name'>
                                    <span className='procBCom'>Brand</span>
                                </div>
    
    
                                <div id='phase4' className="process-button"></div>
                                <div id='phase4Name'>
                                    <span className='procBCom'>Visual</span>
                                </div>
    
    
                                <div id='phase5' className="process-button"></div>
                                <div id='phase5Name'>
                                    <span className=''>03</span>
                                    <span className='procBCom'>Development</span>
                                </div>
    
                                <div id='phase6' className="process-button"></div>
                                <div id='phase6Name'>
                                    <span className=''>04</span>
                                    <span className='procBCom'>Improvements</span>
                                </div>
    
    
                                <div id='phase7' className="process-button"></div>
                                <div id='phase7Name'>
                                    <span className=''>05</span>
                                    <span className='procBCom'>Testing</span>
                                </div>
    
                                <div id='phase8' className="process-button"></div>
                                <div id='phase8Name'>
                                    <span className='procBCom'>Validation</span>
                                </div>
    
    
                                <div id='phase9' className="process-button"></div>
                                <div id='phase9Name'>
                                    <span className='procBCom'>User Acceptance Testing</span>
                                </div>
    
    
                                <div id='phase10' className="process-button"></div>
                                <div id='phase10Name'>
                                    <span className=''>06</span>
                                    {/* <span className='procBCom'>Final Touches</span> */}
                                    <span className='procBCom'>Deployment</span>
                                </div>
                                <div id='phase11' className="process-button"></div>
                                <div id='phase11Name'>
                                    <span className=''>07</span>
                                    <span className='procBCom'>Hyper Care</span>
                                </div>
                            </>
                        ) : (
                           <>
                           <div id='phase1' className="process-button"></div>
                                <div id='phase1Name'>
                                    <span className=''>01</span>
                                    <span className='procBCom'>Sprint Setup</span>
                                </div>
    
                                <div id='phase2' className="process-button"></div>
                                <div id='phase2Name'>
                                    <span className=''>02</span>
                                    <span className='procBCom'>Wireframing</span>
                                </div>
    
                                <div id='phase3' className="process-button"></div>
                                <div id='phase3Name' className='agile3phase'>
                                    <span className='procBCom'>Project Setup</span>
                                </div>
    
    
                                <div id='phase4' className="process-button"></div>
                                <div id='phase4Name'>
                                    <span className='procBCom'>Initiation</span>
                                </div>
    
    
                                <div id='phase5' className="process-button"></div>
                                <div id='phase5Name'>
                                    <span className=''>03</span>
                                    <span className='procBCom'>Development</span>
                                </div>
    
                                <div id='phase6' className="process-button"></div>
                                <div id='phase6Name'>
                                    <span className=''>04</span>
                                    <span className='procBCom'>Regular Testing</span>
                                </div>
    
    
                                <div id='phase7' className="process-button"></div>
                                <div id='phase7Name' className='agile7phase'>
                                    <span className=''>05</span>
                                    <span className='procBCom'>Feedback</span>
                                </div>
    
                                <div id='phase8' className="process-button"></div>
                                <div id='phase8Name' className='agile8phase'>
                                    <span className='procBCom'>Sprint Completed</span>
                                </div>
    
    
                                <div id='phase9' className="process-button"></div>
                                <div id='phase9Name' className='agile9phase'>
                                    <span className='procBCom'>Release</span>
                                </div>
    
    
                                <div id='phase10' className="process-button"></div>
                                <div id='phase10Name' className='agile10phase'>
                                    <span className=''>06</span>
                                    <span className='procBCom'>Final Review</span>
                                </div>
                                <div id='phase11' className="process-button"></div>
                                <div id='phase11Name' className='agile11phase'>
                                    <span className=''>07</span>
                                    <span className='procBCom'>Launch & Ongoing <br/> Support</span>
                                </div>
                           </>
                        )
                    }
                    </div> 
                )
               }
                </div>

            </div>
        </div>
    )
}

export default Progress