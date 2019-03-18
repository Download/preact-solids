import ulog from 'ulog'
import { h } from 'preact'
import defaultClasses from 'solids/icon/classes'
import { createHelper } from '../style-classes'
import { Consumer } from '../theme'

const log = ulog('preact-solids:icon')

export const Icon = (props = {}) => {
	log('Icon', 'render', props)

	const {
		src,
		Component = 'i',
		children,
		// other attributes
		...attributes
	}	= props

	return (
		<Consumer>{({	classes = {},	scope = 'local'	}) => {

			classes = { ...defaultClasses, ...classes }
			let classNames = createHelper(classes, scope)
			attributes.className = classNames(classes.icon, {
				['material-icons']: !src,
				[attributes.className || attributes.class]: attributes.className || attributes.class,
			})

			return (
				<Component {...attributes}>
					{src && <img src={src} /> || children}
				</Component>
			);

		}}</Consumer>
	);
}
export default Icon;

log('Initialized')
