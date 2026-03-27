import { Link } from 'react-router-dom'

function Error({
	title = '404',
	subtitle = "Oops! La page que vous demandez",
	subtitle2 = "n'existe pas.",
}) {
	return (
		<section className="error">
			<h1 className="error__title">{title}</h1>
			<h2 className="error__subtitle">
				{subtitle} {subtitle2}

			</h2>
			<Link className="error__link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	)
}

export default Error