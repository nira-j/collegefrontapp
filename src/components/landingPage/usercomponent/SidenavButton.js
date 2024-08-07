import react from 'react'
import { useNavigate } from 'react-router-dom'

export default function SidenavButton(props){
    const navigate=useNavigate()

    const handleClick = () => {
        props.setActiveItem(props.value);
        navigate(props.actionpath);
      };
    return(
        <>
            <li className={`menu-item ${props.activeItem === props.value ? 'active' : ''}`} onClick={handleClick}>
                <a className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle"></i>
                    <div data-i18n="Analytics" > {props.value} </div>
                </a>
            </li>
        </>
    )
}