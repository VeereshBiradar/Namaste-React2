import ItemListCard from "./ItemListCard";

const RestaurantCategoryAccordion = ({ data, showItems, setShowIndex }) => {

    //when it have it's own coponent then it's called controlled component
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();
    }


    return (
        <>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" >
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
                
                   {  showItems && <ItemListCard items={data?.itemCards} /> }
    
            </div>
        </>
    )
}

export default RestaurantCategoryAccordion;


//On react document
//lifting the state up
//controlled and uncontrolled components
