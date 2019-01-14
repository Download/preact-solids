import ulog from 'ulog';
import { h } from 'preact';
import defaultClasses from 'solids/appbar/classes';
import { createHelper } from '../style-classes';
import { Consumer } from '../theme';

const log = ulog('preact-solids:appbar')

const AppBar = (props = {}) => {
	log('AppBar', 'render', props)
	
	const {
		// https://material.io/guidelines/layout/structure.html#structure-app-bar
		// -------
		// show a condensed version of the appbar
		dense = false,
		// show a prominent version of the appbar
		prominent = false,
		// the appbar stays visible on scroll
		fixed = false,
		// the short version of the appbar
		short = false,
		// always show the toolbar as floating (with drop-shadow)
		floating = false,
		// shrink the toolbar from (dense) prominent to standard size on scroll
		shrink = false,
		// the short version of the appbar in collapsed state
		collapsed = false,
		// the collapsed short appbar should include the action item
		hasAction = false,
		// title string or jsx element
		title = '',
		// action buttons to show in the appbar
		children,
		// reserve space for a toolbar button at the start
		reserveStart = false,
		// reserve space for a toolbar button at the end
		reserveEnd = false,
		// should the appbar be 'tactile' (look like it has thickness)
		tactile = false,
		// other attributes
		...attributes
	} = props

	return (
		<Consumer>{({ classes = {}, scope = 'local'	}) => {

			classes = { ...defaultClasses, ...classes };
			let classNames = createHelper(classes, scope);
			attributes.className = classNames(classes.appbar, {
				[attributes.className || attributes.class]: attributes.className || attributes.class,
				[classes.fixed]: fixed,
				[classes.dense]: dense,
				[classes.prominent]: prominent,
				[classes.short]: short,
				[classes.collapsed]: collapsed,
				[classes.has_action]: hasAction,
				[classes.shrink]: shrink,
				[classes.floating]: floating,
				[classes.tactile]: tactile,
			});

			return (
				<header {...attributes}>
					<div>
						<section class={classNames(classes.start, { [classes.reserve]: reserveStart })}>
							<span class={classNames(classes.title)}>{title}</span>
						</section>
						<section class={classNames(classes.end, { [classes.reserve]: reserveEnd })}>
							{children}
						</section>
					</div>
				</header>
			);
		}}</Consumer>
	)
}

export default AppBar;


export const AppBarAction = (props = {}) => {
	log('AppBarAction', 'render', props)

	const {
		Component = 'a',
		children,
		// other attributes
		...attributes
		
	}	= props 

	return (
		<Consumer>{({ classes = {}, scope = 'local'	}) => {

			classes = { ...defaultClasses, ...classes };
			let classNames = createHelper(classes, scope);
			attributes.className = classNames(classes.action, {
				[attributes.className || attributes.class]: attributes.className || attributes.class,
			});

			return (
				<Component {...attributes}>{children}</Component>
			);
		}}</Consumer>
	)
}

log('Initialized')
