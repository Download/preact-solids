import ulog from 'ulog'
import { h } from 'preact'
import appbarClasses from 'solids/appbar/classes'
import drawerClasses from 'solids/drawer/classes'
import { createHelper } from '../style-classes'
import { Consumer } from '../theme'

const defaultClasses = { ...appbarClasses, ...drawerClasses };

const log = ulog('preact-solids:drawer')

export const Drawer = (props = {}) => {

	log('Drawer', 'render', props)

	const {
		// https://material.io/guidelines/layout/structure.html#structure-side-nav
		// -------

		// show a temporary drawer overlaying the content when expanded, or just a button when collapsed
		temporary = false,
		// show the temporary drawer as floating
		floating = false,
		// show a drawer alongside the content when expanded, or a button when collapsed
		persistent = false,
		// show a drawer alongside the content that cannot be collapsed
		permanent = false,
		// show a temporary drawer on small screens and a persistent drawer on large screens
		// when using this setting, don't specify temporary/persistent/permanent as they will
		// override this setting.
		responsive = !temporary && !persistent && !permanent,
		// show the persistent drawer as fixed under the appbar
		fixed = false,
		// title string or jsx element
		title = '',
		// footer string or jsx element
		footer = '',
		// navigation items to show in the drawer
		children = undefined,
		// start (left) drawer
		start = true,
		// end (right) drawer
		end = !start,
		// drawer button string or JSX element
		button = (<i class="material-icons">menu</i>),
		// other attributes
		...attributes
	} = props

	return (
		<Consumer>{({ classes = {}, scope = 'local'	}) => {

			classes = { ...defaultClasses, ...classes };
			
			let classNames = createHelper(classes, scope);
			attributes.className = classNames(classes.drawer, {
				[classes.start]: start,
				[classes.end]: end,
				[classes.temporary]: temporary,
				[classes.persistent]: persistent,
				[classes.permanent]: permanent,
				[classes.responsive]: responsive,
				[classes.floating]: floating,
				[classes.fixed]: fixed
			});

			let id_temp = `${classes.drawer}_temporary_open_${(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).toString(36)}`;
			let id_pers = `${classes.drawer}_persistent_collapsed_${(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).toString(36)}`;

			return (
				<aside {...attributes}>
					<input type="checkbox" id={id_temp} class={classes.temporary} />
					<label for={`${id_temp}`} ><a class={classes.icon + ' ' + classes.action}>{button}</a></label>
					<input type="checkbox" id={id_pers} class={classes.persistent} />
					<label for={`${id_pers}`}><a class={classes.icon + ' ' + classes.action}>{button}</a></label>
					<div><div>
						<nav>
							{title ? <header><div>{title}</div></header> : ''}
							{children ? <nav>{children}</nav> : ''}
							{footer ? <footer>{footer}</footer> : ''}
						</nav>
					</div></div>
				</aside>
			);
		}}</Consumer>
	);
}

export default Drawer;

log('Initialized')
