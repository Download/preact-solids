import ulog from 'ulog'
import { h } from 'preact'
import defaultClasses from 'solids/menu/classes'
import { createHelper } from '../style-classes'
import { Consumer } from '../theme'

const log = ulog('preact-solids:menu')

export const Menu = (props = {}) => {
	log('Menu', 'render', props)

	const {
		action = <i class="material-icons">account_circle</i>, 
		interactive = false,
		Component = 'div',
		// menu items
		children,
		// other attributes
		...attributes
	}	= props

	return (
		<Consumer>{({	classes = {},	scope = 'local'	}) => {

			classes = { ...defaultClasses, ...classes }
			let classNames = createHelper(classes, scope)
			attributes.className = classNames(classes.anchor, {
				[attributes.className || attributes.class]: attributes.className || attributes.class,
			})

			let id = `${classes.menu}_toggle_${(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).toString(36)}`;
			
			return (
				<Component {...attributes}>
					<input type="checkbox" id={id} />
					<label for={id}>{action}</label>
					<div class={classNames(classes.menu)}>
						{children}
					</div>
				</Component>
			);

		}}</Consumer>
	);
}
export default Menu;

log('Initialized')
