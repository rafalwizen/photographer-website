import CardItem from "./CardItem.jsx";
import './Cards.css';
import img1 from '../../public/images/img-test-1.jpg';
import img2 from '../../public/images/img-test-2.jpg';
import img3 from '../../public/images/img-test-3.jpg';
import img4 from '../../public/images/img-test-4.jpg';
import img5 from '../../public/images/img-test-5.jpg';

const Cards = () => {
    return (
        <div className={'cards'}>
            <h1>Ultrices euismod adipiscing augue nullam dolor</h1>
            <div className={'cards__container'}>
                <div className={'cards__wrapper'}>
                    <ul className={'cards__items'}>
                        <CardItem
                            src={img1}
                            text='Na razie każdy link przenosi do galerii'
                            label='Galeria'
                            path='/gallery'
                        />
                        <CardItem
                            src={img2}
                            text='Mógłby do podgalerii czy czegoś tego typu'
                            label='Excepteur'
                            path='/gallery'
                        />
                    </ul>
                    <ul className={'cards__items'}>
                        <CardItem
                            src={img3}
                            text='Neque porro quisquam est qui'
                            label='Ut enim'
                            path='/gallery'
                        />
                        <CardItem
                            src={img4}
                            text='Quia dolor sit amet, consectetur'
                            label='Deserunt'
                            path='/gallery'
                        />
                        <CardItem
                            src={img5}
                            text='Phasellus id nunc vulputate ut'
                            label='Conubia'
                            path='/gallery'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;