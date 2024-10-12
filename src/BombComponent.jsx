import PropTypes from 'prop-types';

export default function BombComponent(props) {

return (
	<li className="list-group-item bomb-item" id={"bomb-item-"+(props.index+1)}>
		<input type="checkbox" checked={props.status} onChange={(e)=>props.toggleSwitch(props.index)} className='my-switch' id={"idbomb-item-"+(props.index+1)}/>
		<p className={"bomb-component-name"}>{props.id}</p>
	</li>
);
}


BombComponent.propTypes = {
	/**
	 * Function to turn off the switch
	 */
	toggleSwitch: PropTypes.func,
	/**
	 * Index of the switch
	 */
	index: PropTypes.number,
	/**
	 * Current status of the switch
	 */
	status: PropTypes.bool,
	/**
	 * Name of the component to deactivate
	 */
	id: PropTypes.string
}
