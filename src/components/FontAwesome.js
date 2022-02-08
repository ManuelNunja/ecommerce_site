import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faListAlt, faRocket, faShoppingCart, faTags, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const FontAwesome = ({iconName}) => {
    let fontSize = "1x";
    let fontColor = "#ddd621";
    if(iconName == "faHome"){return(<FontAwesomeIcon icon={(faHome)} color={fontColor} size={fontSize}/>)}
    if(iconName == "faList"){return(<FontAwesomeIcon icon={(faList)} color={fontColor} size={fontSize} />)}
    if(iconName == "faTags"){return(<FontAwesomeIcon icon={(faTags)} color={fontColor} size={fontSize}/>)}
    if(iconName == "faListAlt"){return(<FontAwesomeIcon icon={(faListAlt)} color={fontColor} size={fontSize}/>)}
    if(iconName == "faShoppingCart"){return(<FontAwesomeIcon icon={(faShoppingCart)} color={fontColor} size={fontSize}/>)}
    if(iconName == "faLightbulb"){return(<FontAwesomeIcon icon={(faLightbulb)} color={fontColor} size={fontSize}/>)}

};

export default FontAwesome;
