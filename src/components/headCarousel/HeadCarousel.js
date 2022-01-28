import "./HeadCarousel.scss"
import HeadCarouselItem from "./HeadCarouselItem";

const textItem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla quam voluptate qui repellat!."
const items = [
    {itemId: "1", itemText: textItem},
    {itemId: "2", itemText: textItem},
    {itemId: "3", itemText: textItem},
    {itemId: "4", itemText: textItem},
];

const HeadCarousel = () => {
    
  return <div className="headCarousel--container">
        <div className="headCarousel--background">
            <div className="side--left"><h1 className="side--left--name">My E-commerce</h1></div>
            <div className="side--right">
                {
                    items.map(({itemId, itemText}) => (
                        <HeadCarouselItem key={itemId} itemId={itemId} itemText={itemText}></HeadCarouselItem>
                    ))
                }
            </div>
        </div>
  </div>;
};

export default HeadCarousel;
