// BasicTabs.js
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import AboutCompany from './AboutDetails/AboutCompany'
import { Link as ScrollLink } from 'react-scroll';  
import Contact from './AboutDetails/contacts'
import ContactsList from './AboutDetails/contactList'
import History from './AboutDetails/history'
import Price from './AboutDetails/prices'
import "./aboutUs.scss"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [contact, setContact] = useState({});
  const [histories, setHistories] = useState([]);
  const [management, setManagement] = useState([]);
  const [prices, setPrices] = useState([]);
  const [about, setAbout] = useState([]); // Initialize with an empty array

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchData = async (url, setState) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setState(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    const endpoints = [
      'http://127.0.0.1:8000/api/about/history',
      'http://127.0.0.1:8000/api/about/management',
      'http://127.0.0.1:8000/api/about/contact',
    ];

    const fetchDataForAllTabs = async () => {
      await Promise.all([
        fetchData(endpoints[0], setHistories),
        fetchData(endpoints[1], setManagement),
        fetchData(endpoints[2], setContact),
      ]);
    };
    
    

    fetchDataForAllTabs();
  }, []);
  console.log(histories)

  return (
    <div className='AboutUs'>
      <div className='AboutContainer'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", position: "relative", justifyContent: "center", alignItems: "center" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="О предприятии" {...a11yProps(0)} />
              <Tab label="История" {...a11yProps(1)} />
              <Tab label="Услуги" {...a11yProps(2)} />
              <Tab label="Контакты" {...a11yProps(3)} />
              <Tab label="Руководство" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="tab_pane_fade_active_show" id="about">
              {about.length > 0 ? (
                about.map((item) => (
                  <AboutCompany key={item.id} data={item} />
                ))
              ) : (
                <p>About data is loading...</p>
              )}
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <div className="tab history" id="history">
              {histories.map((item) => (
                <History key={item.id} data={item} />
              ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="tab-pane fade" id="services">
              {prices.map((item) => (
                <Price key={item.id} data={item} />
              ))}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className='About contacts'>
              <ContactsList contacts={contact} />
            </div>
          </CustomTabPanel>


          <CustomTabPanel value={value} index={4}>
            <div>
              <h3>Руководство</h3>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
