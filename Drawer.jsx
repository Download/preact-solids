import { h } from 'preact';

const Drawer = (props) => (
	<aside class={style.drawer}>
		{/*
			// (props.fixed ? ' ' + style.fixed : '') +
			// (props.dense ? ' ' + style.dense : '') +
			// (props.prominent ? ' ' + style.prominent : '') +
			// (props.shrink ? ' ' + style.shrink : '') +
			// (props.elevated ? ' ' + style.elevated : '') 
		*/}
		<nav>
			<header class={style.header}>
				<div class={style.content}>
          Header here
				</div>
			</header>
		</nav>
	</aside>
);

export default Drawer;
