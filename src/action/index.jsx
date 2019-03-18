import ulog from 'ulog'
import { h } from 'preact'
import defaultClasses from 'solids/action/classes'
import { createHelper } from '../style-classes'
import Icon from '../icon'
import { Consumer } from '../theme'

const log = ulog('preact-solids:action')

export const Action = (props = {}) => {
	log('Action', 'render', props)

	const {
		icon,
		src,
		Component = 'a',
		children,
		// other attributes
		...attributes
	}	= props

	return (
		<Consumer>{({	classes = {},	scope = 'local'	}) => {
			
			classes = { ...defaultClasses, ...classes }
			let classNames = createHelper(classes, scope)
			attributes.className = classNames(classes.action, {
				[attributes.className || attributes.class]: attributes.className || attributes.class,
			})

			var IC = icon && (typeof icon == 'string' ? <Icon>{icon}</Icon> : icon) || src && <Icon src={src} />
			return (
				<Component {...attributes}>
					{IC}
					{children}
				</Component>
			);

		}}</Consumer>
	);
}
export default Action;

log('Initialized')
