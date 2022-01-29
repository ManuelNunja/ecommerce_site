import "./HeadCarousel.scss";

const HeadCarouselItem = ({itemId, itemText}) => {
    let classNormal = "side--right--item"
    let classActive = "side--right--item active"
    let elementId = "headCarouselItem" + itemId
    return <div key={elementId} id={elementId} className={(itemId == "1" ? classActive : classNormal)} onClick={(props) => (function(){
        var arrayObjectByClass = document.getElementsByClassName("side--right--item")
        var i = 0
        for(i = 0; i <= arrayObjectByClass.length - 1; i++){
            arrayObjectByClass[i].classList.remove("active");
            arrayObjectByClass[i].innerHTML = itemText.substring(0, 17) + " ..."
        }
        document.getElementById(props.target.id).classList.add("active")
        document.getElementById(props.target.id).innerHTML = itemText
    })(
        
    )}>
     {(itemId == "1" ? itemText : itemText.substring(0, 17) + " ...")}
    </div>;
};

export default HeadCarouselItem;
