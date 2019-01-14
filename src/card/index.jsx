import ulog from 'ulog'
import { h } from 'preact'
import defaultClasses from 'solids/card/classes'
import { createHelper } from '../style-classes'
import { Consumer } from '../theme'

const log = ulog('preact-solids:card')

export const Card = (props = {}) => {
	log('Card', 'render', props)

	const {
		// https://material.io/guidelines/layout/structure.html#structure-app-bar
		// -------
		// show an outlined card
		outlined = false,
		children,
		// other attributes
		...attributes
	} = props

	return (
		<Consumer>{({ classes = {}, scope = 'local'	}) => {

			classes = { ...defaultClasses, ...classes }
			let classNames = createHelper(classes, scope)
			attributes.className = classNames(classes.card, {
				[attributes.className || attributes.class]: attributes.className || attributes.class,
				[classes.outlined]: outlined,
			})

			return (
				<div {...attributes}>
					{children}
				</div>
			);
		}}</Consumer>
	)
}

export default Card;

log('Initialized')
