import { h } from 'preact';
import { createHelper } from './style-classes';

// import 'solids/AppBar';

// import style from './style';


export const defaultClasses = {
	solid_appbar: 'solid_appbar',
	_fixed: 'fixed',
	_dense: 'dense',
	_prominent: 'prominent',
	_shrink: 'shrink',
	_elevated: 'elevated',
	_start: 'start',
	_end: 'end',
	_title: 'title',
	_icon: 'icon',
	_action: 'action'
};

const AppBar = ({
	// the following attributes are standard properties of material design appbars
	// see https://material.io/guidelines/layout/structure.html#structure-app-bar
	// -------

	// show a condensed version of the appbar
	dense = false,
	// show a prominent version of the appbar
	prominent = false,
	// the appbar stays visible on scroll
	fixed = false,

	// the following attributes are non-standard properties
	// -------

	// shrink the toolbar from prominent to standard size on scroll
	shrink = false,
	// always show the toolbar as elevated (with drop-shadow)
	elevated = false,
	// reserve space for a toolbar button at the start
	reserveStart = false,
	// reserve space for a toolbar button at the end
	reserveEnd = false,
	// action buttons to show in the appbar
	children = undefined,
	// title string or jsx element
	title = '',
	// classes mapping
	classes = defaultClasses,
	// local or mixed scope (for CSS Modules)
	// local: only use altered (locally scoped) CSS class names
	// mixed: use both global as well as locally scoped class names
	scope = 'local',
	// helper function to compile class list based on classes and scope
	classNames = createHelper(classes, scope),
	// other attributes
	...attributes
}) => {

	attributes.className = classNames(attributes.className, classes.solid_appbar, {
		[classes._fixed]: fixed,
		[classes._dense]: dense,
		[classes._prominent]: prominent,
		[classes._shrink]: shrink,
		[classes._elevated]: elevated
	});

	return (
		<header {...attributes}>
			<div>
				<section class={classNames(classes._start, { [classes._reserve]: reserveStart })}>
					{/* reserveStart ? (
						<span class={classNames(classes.icon)} />
					): '' */}
					<span class={classNames(classes._title)}>{title}</span>
				</section>
				<section class={classNames(classes._end, { [classes._reserve]: reserveEnd })}>
					{children}
					{/* reserveEnd ? (
						<span class={classNames(classes.icon)} />
					): ''*/}
				</section>
			</div>
		</header>
	);
};

export default AppBar;
