import { NavLink } from 'react-router-dom'
import arrNavItems from '../../../Assets/data/arrNavItems'

export const Nav = () => {
	return (
		<nav>
			<ul>
				{/* Det kan skrivet på to måder  */}
				{arrNavItems.map((item, key)=> {
					// if (item.display) {
					// 	return (
					// 		<li key={key}>
					// 		<NavLink to={item.path}>{item.title}</NavLink>
					// 	</li>
					// 	)
					// } else {  //skal have en else da det er et map og et map vil return'en
					// 	return null
					// }

					return (
						item.display ?
						<li key={key}>
							<NavLink to={item.path}>{item.title}</NavLink>
						</li>
						: null
					)
				})}
			</ul>
		</nav>
	)
}