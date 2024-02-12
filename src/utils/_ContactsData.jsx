import React, { useEffect, useState } from 'react'
import Contacts from '../pages/AboutUs/AboutDetails/Сontacts'

const ContactList = () => {
	const [contacts, setContacts] = useState([])

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/about/contact')
			.then(response => response.json())
			.then(data => {
				setContacts(data)
			})
			.catch(error => {
				console.error('Error fetching contacts:', error)
			})
	}, [])

	if (contacts.length === 0) {
		return <p>Contact data is not available.</p>
	}

	return (
		<div>
			{contacts.map(contact => (
				<Contacts key={contact.id} data={contact} />
			))}
		</div>
	)
}

export default ContactList
