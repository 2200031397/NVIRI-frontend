import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import argon from '../../image/Argon_Image.png';
import menuimage from '../../image/menu-image.png';
import imgcard from '../../image/img_card3.png'
import imgcard4 from '../../image/img-card4.png'
import './index.css';

function LandingPage() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(''); // State to manage the selected location
  const [applianceType, setApplianceType] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3000/api/locations')
      .then(response => {
        console.log('Locations:', response.data); // Add this line to log the response
        setLocations(response.data);
        setSelectedLocation(response.data[0]?.name || ''); // Set default to first location if available
      })
      .catch(error => console.error(error));
  }, []);
  

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleApplianceSearch = (e) => {
    const query = e.target.value;
    setApplianceType(query);
    if (query.length > 1) {
      axios.get(`http://localhost:3000/api/appliances?q=${query}`)
        .then(response => setSuggestions(response.data))
        .catch(error => console.error(error));
    } else {
      setSuggestions([]);
    }
  };

  const handleBizLogin = () => {
    navigate('/technician-login');
  };

  const handleLogin = () => {
    navigate('/user-login');
  };

  return (
    <div className="landing-page">
      <div className='head'>
        <img src={argon} className='image-icon'/>
        <div className='login-contaier'>
          <button className='tlogin' onClick={handleBizLogin}>Biz login</button>
          <button className='userlogin' onClick={handleLogin}>login</button>
        </div>
      </div>
      <div className='card1'>
        <div>
          <h1 className='header_card1'>Take care of your home needs now!</h1>
          <p className='para_card1'>ServicePro is your one-stop solution to troubleshoot, choose a vendor and book a technician.</p>
          <div className='inputs_card1'>
            <div>
              <select value={selectedLocation} onChange={handleLocationChange}>
                {locations.map(location => (
                  <option key={location.id} value={location.locations}>
                    {location.locations}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className='input-container'>
                  <input
                    type="text"
                    value={applianceType}
                    onChange={handleApplianceSearch}
                    placeholder="Search appliance type..."
                  />
                  <button className='userlogin'>Search</button>
                </div>
                  {suggestions.length > 0 && (
                    <ul className="suggestions">
                      {suggestions.map(suggestion => (
                        <li key={suggestion.id}>{suggestion.appliances}</li>
                      ))}
                    </ul>
                  )}
            </div>

          </div>
        </div>
        <div>
          <img src={menuimage} className='menu-image'/>
        </div>
      </div>

      <div className='card2'>
            <h1 className='header_card1'>All Services</h1>
            <p className='para_card1'>The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
            <div className='mincard-layout'>
                <div className='mincard_card2'>
                      <h1 className='mincard_card2_head'>Fridge</h1>
                      <p className='mincard_card2_para'>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                </div>
                <div className='mincard_card2'>
                      <h1 className='mincard_card2_head'>Fridge</h1>
                      <p className='mincard_card2_para'>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                </div>
                <div className='mincard_card2'>
                      <h1 className='mincard_card2_head'>Fridge</h1>
                      <p className='mincard_card2_para'>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                </div>
            </div>
            <div className='mincard-layout'>
                <div className='mincard_card2'>
                      <h1 className='mincard_card2_head'>Fridge</h1>
                      <p className='mincard_card2_para'>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                </div>
                <div className='mincard_card2'>
                      <h1 className='mincard_card2_head'>Fridge</h1>
                      <p className='mincard_card2_para'>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                </div>
                <div className='mincard_card2'>
                      <h1 className='mincard_card2_head'>Fridge</h1>
                      <p className='mincard_card2_para'>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                </div>
            </div>
      </div>

      <div className='card3'>
            <h1 className='head-card3'>Book a request in 3 simple steps</h1>
            <div className='card3-layout'>
              <div className='mincard-card3'>
                  <img src={imgcard} className='img-card3'/>
                  <div className='minmincard-card3'>
                  <h1 className='mincard-card3-header'>Choose your technician</h1>
                  <p className='mincard-card3-para'>Choose from a wide variety of technicians and vendors.</p>
                  </div>
              </div>
              <div className='mincard-card3'>
                  <img src={imgcard} className='img-card3'/>
                  <div className='minmincard-card3'>
                  <h1 className='mincard-card3-header'>Choose your technician</h1>
                  <p className='mincard-card3-para'>Choose from a wide variety of technicians and vendors.</p>
                  </div>
              </div>
              <div className='mincard-card3'>
                  <img src={imgcard} className='img-card3'/>
                  <div className='minmincard-card3'>
                  <h1 className='mincard-card3-header'>Choose your technician</h1>
                  <p className='mincard-card3-para'>Choose from a wide variety of technicians and vendors.</p>
                  </div>
              </div>
            </div>
      </div>

      <div className='card4'>
            <h1 className='header-card4'>Featured Vendors</h1>
            <div className='layout-card4'>
                    <div className='mincard-card4'>
                          <div className='mincard-layout1'>
                            <img src={imgcard4} className='img-card4'/>
                            <p className='mincard-head-card1'>Metro Hardware</p>
                          </div>
                        <div>
                              <div className='mincard-layout1'>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>22</p>
                                    <p className='minmin-card4-para2'>Services</p>
                                </div>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>8/10</p>
                                    <p className='minmin-card4-para2'>rating</p>
                                </div>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>89</p>
                                    <p className='minmin-card4-para2'>reviews</p>
                                </div>
                                <p className='card4-link'>Show more</p>
                              </div>
                      </div>
                    </div>
                    <div className='mincard-card4'>
                          <div className='mincard-layout1'>
                            <img src={imgcard4} className='img-card4'/>
                            <p className='mincard-head-card1'>Metro Hardware</p>
                          </div>
                        <div>
                              <div className='mincard-layout1'>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>22</p>
                                    <p className='minmin-card4-para2'>Services</p>
                                </div>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>8/10</p>
                                    <p className='minmin-card4-para2'>rating</p>
                                </div>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>89</p>
                                    <p className='minmin-card4-para2'>reviews</p>
                                </div>
                                <p className='card4-link'>Show more</p>
                              </div>
                      </div>
                    </div>
                    <div className='mincard-card4'>
                          <div className='mincard-layout1'>
                            <img src={imgcard4} className='img-card4'/>
                            <p className='mincard-head-card1'>Metro Hardware</p>
                          </div>
                        <div>
                              <div className='mincard-layout1'>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>22</p>
                                    <p className='minmin-card4-para2'>Services</p>
                                </div>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>8/10</p>
                                    <p className='minmin-card4-para2'>rating</p>
                                </div>
                                <div className='layout'>
                                    <p className='minmin-card4-para1'>89</p>
                                    <p className='minmin-card4-para2'>reviews</p>
                                </div>
                                <p className='card4-link'>Show more</p>
                              </div>
                      </div>
                    </div>
            </div>
              
                
              
      </div>

      <div className='card5'>
        <h1 className='header-card5'>See what our happy customers have to say about us</h1>
        <div className='min-card5'>
                  <div className='mintext-card5'>
                      <p className='mincard-text-card5'>Peter Breis</p>
                      <p className='mincard-date-card5'>3 days ago</p>
                      <p className='mincard-dis-card5'>Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.
                      Couldn’t be happier.</p>
                  </div>
                  <div className='mintext-card5'>
                      <p className='mincard-text-card5'>Peter Breis</p>
                      <p className='mincard-date-card5'>3 days ago</p>
                      <p className='mincard-dis-card5'>Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.
                      Couldn’t be happier.</p>
                  </div>
                  <div className='mintext-card5'>
                      <p className='mincard-text-card5'>Peter Breis</p>
                      <p className='mincard-date-card5'>3 days ago</p>
                      <p className='mincard-dis-card5'>Knowledgeable and easy to work with. They make Instagram easy for those of us who aren’t that savvy. Growth has been great and the followers have been quality.
                      Couldn’t be happier.</p>
                  </div>
        </div>
      </div>

      <div className='foot'>
              <div className='min-foot'>
                  <div>
                    <p className='foot-min-text'>Get in touch with us</p>
                    <input type='text' className='input-box-foot'/>
                  </div>
              </div>    
      </div>
    </div>
  );
}

export default LandingPage;
