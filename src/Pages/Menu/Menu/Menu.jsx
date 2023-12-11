import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            <Cover img={menuImg} title="OUR MENU" subTitle="Would you like to try a dish?"></Cover>
            {/*Main cover*/}
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            {/*Offered menu items*/}
            <MenuCategory items={offered}></MenuCategory>
            {/*Desserts menu items*/}
            <MenuCategory
                items={desserts}
                title="desserts "
                subTitle="Desserts are the sweetest finale to any meal, a symphony of flavors from comforting classics to avant-garde creations. Life's too short—indulge in the delicious finale!"
                img={dessertImg}></MenuCategory>
            {/*Pizza menu items*/}
            <MenuCategory
                items={pizza}
                title="pizza"
                subTitle="
                Pizza, the iconic comfort food. Crispy crust, melty cheese, endless toppings—each bite is a flavor celebration. Classic or creative, pizza is pure happiness on a plate!"
                img={pizzaImg}></MenuCategory>
            {/*Salad menu items*/}
            <MenuCategory
                items={salad}
                title="salad"
                subTitle="
               
Salads: a colorful medley of crisp freshness, from classic Caesar to trendy kale blends. Each bite is a celebration of flavor and well-being. Eat your greens, feel the goodness!"
                img={saladImg}></MenuCategory>
            {/*Soup menu items*/}
            <MenuCategory
                items={soup}
                title="soup"
                subTitle="
               

                Soup: a liquid hug for your soul. Whether it's hearty chicken noodle or comforting ramen, it's warmth in a bowl. Sip away worries, savor the goodness, one spoonful at a time!"
                img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;