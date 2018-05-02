import classNames from 'classnames';

export const createHelper = (classes, scope) => {
	const lookup = Object.keys(classes).reduce((r,v) => (r[classes[v]] = v) && r, {});
	return (...args) => classNames(...args).split(/\s/).reduce((r,v) => {
		if (v === lookup[v]) r.push(v);
		else {
			if (scope === 'mixed')  r.push(lookup[v]);
			r.push(v);
		}
		return r;
	}, []).join(' ');
};

export default createHelper;
