import "./HeadCarousel.scss";

const HeadCarouselItem = ({itemId, itemText}) => {
    let classNormal = "side--right--item"
    let classActive = "side--right--item active"
    return <div id={"headCarouselItem" + itemId} className={(itemId == "1" ? classActive : classNormal)} onClick={(props) => (function(){
        var arrayObjectByClass = document.getElementsByClassName("side--right--item")
        var i = 0
        for(i = 0; i <= arrayObjectByClass.length - 1; i++){
            arrayObjectByClass[i].classList.remove("active");
        }
        document.getElementById(props.target.id).classList.add("active");
    })(
        
    )}>
        <div className="text">{itemText}</div>
    </div>;
};

export default HeadCarouselItem;
