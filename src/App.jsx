import {Footer} from "./modules/Footer/Footer.jsx";
import {Header} from "./modules/Header/Header.jsx";
import {Goods} from "./modules/Goods/Goods.jsx";
import {Hero} from "./modules/Hero/Hero.jsx";
import {Filter} from "./modules/Filter/Filter.jsx";
import {Subscribe} from "./modules/Subscribe/Subscribe.jsx";
import {Order} from "./modules/Order/Order.jsx";
import {OrderFinish} from "./modules/OrderFinish/OrderFinish.jsx";

export const App = () => {
    return (
        <>
            <Header/>

            <main>
                <Hero/>

                <Filter/>

                <Goods/>

                <Subscribe/>
            </main>

            <Footer/>

            <Order />

            <OrderFinish />
        </>
    )
}

