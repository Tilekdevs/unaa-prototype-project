import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import './Services.scss'

export default function Services() {
	const [isHovered, setIsHovered] = React.useState(false)

	return (
		<div className='MainServicesContainer'>
			<PopupState variant='popover' popupId='demo-popup-menu'>
				{popupState => (
					<div className='RoutedServices'>
						<a
							variant='contained'
							{...bindTrigger(popupState)}
							className={`services-link ${isHovered ? 'hovered' : ''}`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							style={{
								padding: '10px',
								cursor: 'pointer',
								textDecoration: 'none',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							Сервисы
							<FaCaretDown />
						</a>
						<Menu {...bindMenu(popupState)}>
							<MenuItem onClick={popupState.close}>
								<Link
									to='/calculator'
									style={{ textDecoration: 'none', color: 'black' }}
								>
									Калькулятор
								</Link>
							</MenuItem>
							<MenuItem onClick={popupState.close}>
								<Link
									to='/request-for-inspection'
									style={{ textDecoration: 'none', color: 'black' }}
								>
									Обращение на осмотр
								</Link>
							</MenuItem>
						</Menu>
					</div>
				)}
			</PopupState>
		</div>
	)
}
