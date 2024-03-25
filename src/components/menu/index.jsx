import Dish from "../dish/index.jsx";

const Menu = ({menu}) => {
    if(!menu?.length){
        return null;
    }

    return (<div>
        <h3>Меню</h3>
        <ul>
            {menu.map(i =>
                <li>
                    <Dish name={i.name}/>
                </li>
            )}
        </ul>
    </div>)
}

export default Menu;
