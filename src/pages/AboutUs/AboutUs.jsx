import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import * as React from 'react'
import ContactList from '../../utils/_ContactsData'
import History from './AboutDetails/History'
import Managments from './AboutDetails/Managments'
import Contacts from './AboutDetails/Сontacts'
import './aboutUs.scss'

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
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
	)
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export default function AboutUs() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className='MainTabsContainer'>
			<div className='container'>
				<Box sx={{ width: '100%' }}>
					<Box
						sx={{
							borderBottom: 1,
							borderColor: 'divider',
							display: 'flex',
							position: 'relative',
							justifyContent: 'center',
						}}
					>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label='basic tabs example'
						>
							<Tab label='Руководство' {...a11yProps(0)} />
							<Tab label='История' {...a11yProps(1)} />
							<Tab label='Контакты' {...a11yProps(2)} />
						</Tabs>
					</Box>
					<CustomTabPanel value={value} index={0}>
						<Managments />
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						<History />
					</CustomTabPanel>
					<CustomTabPanel value={value} index={2}>
						<ContactList contacts={Contacts} />
					</CustomTabPanel>
				</Box>
			</div>
		</div>
	)
}
