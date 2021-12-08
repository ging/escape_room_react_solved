import Switch from 'react-toggle-switch';
import propTypes from 'prop-types';

export default function BombComponent(props) {
  return (
    <li className="list-group-item bomb-item" id={"bomb-item-"+(props.index+1)}>
      <Switch onClick={()=>props.toggleSwitch(props.index)} on={props.status} className='my-switch'/>
      <p className={"bomb-component-name"}>{props.id}</p>
    </li>)
}


BombComponent.propTypes = {
	/**
	 * Function to turn off the switch
	 */
	toggleSwitch: propTypes.func,
	/**
	 * Index of the switch
	 */
	index: propTypes.number,
	/**
	 * Current status of the switch
	 */
	status: propTypes.bool,
	/**
	 * Name of the component to deactivate
	 */
	id: propTypes.string
}
