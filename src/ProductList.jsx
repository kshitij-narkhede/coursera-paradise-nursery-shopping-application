import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CreatSlice';
import './ProductList.css';

function ProductList({ onViewCartClick }) {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));
    const [addedToCart, setAddedToCart] = useState({});

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true
        }));
    };

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "₹350"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "₹502"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "₹408"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "₹440"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "₹437"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "₹244"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "₹1650"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "₹1485"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "₹1237"
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "₹990"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "₹1155"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Beautiful flowering plant known for its fragrance.",
                    cost: "₹1815"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "Oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "Contains compounds that can deter certain insects.",
                    cost: "₹825"
                },
                {
                    name: "Marigold",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "₹660"
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "₹1650"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "₹742"
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "₹1650"
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "₹1072"
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "₹1155"
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "₹1320"
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "₹1072"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "₹1155"
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "₹1237"
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "₹990"
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/31/16/44/zz-plant-5967767_1280.jpg",
                    description: "Thrives in low light and requires little watering.",
                    cost: "₹1485"
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2022/03/23/08/47/ivy-7085790_1280.jpg",
                    description: "Low light and low water needs, grows quickly.",
                    cost: "₹1320"
                },
                {
                    name: "Sansevieria",
                    image: "https://cdn.pixabay.com/photo/2020/06/16/21/14/sansevieria-5305715_1280.jpg",
                    description: "Tolerates neglect and purifies the air.",
                    cost: "₹1568"
                },
                {
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/18/16/20/succulent-1834245_1280.jpg",
                    description: "Requires little watering and is easy to care for.",
                    cost: "₹825"
                },
                {
                    name: "Dracaena",
                    image: "https://cdn.pixabay.com/photo/2019/08/01/19/56/dracaena-4379368_1280.jpg",
                    description: "Low light, low water plant that grows easily.",
                    cost: "₹1650"
                },
                {
                    name: "Cactus",
                    image: "https://cdn.pixabay.com/photo/2018/07/02/08/25/cactus-3510078_1280.jpg",
                    description: "Requires minimal water, survives in dry conditions.",
                    cost: "₹1072"
                }
            ]
        }
    ];

    return (
        <div>
            <div className="navbar">
                <div className="luxury">
                    <img src="https://clipart-library.com/new_gallery/362-3623212_the-faraway-tree-day-nursery-logo-tree-black.png" alt="Logo" style={{width:70,borderRadius:40,marginRight:20}} />
                    <a href="https://ioborin22.github.io/coursera-paradise-nursery-shopping-application" style={{ textDecoration: 'none' }}>
                        <h3 style={{ color: 'white' }}>Knark Nursery</h3>
                        <i style={{ color: 'white' }}>Keep Green, Make Beautiful</i>
                    </a>
                </div>
                <div className="cart-container" onClick={onViewCartClick}>
                    <a href="#" style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                            <rect width="256" height="256" fill="none"></rect>
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        <span className="cart-count">{cartItemsCount}</span>
                    </a>
                </div>
            </div>

            <div className="product-grid">
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h2 className="plantname_heading">{category.category}</h2>
                        <div className="product-list">
                            {category.plants.map((plant, plantIndex) => (
                                <div key={plantIndex} className="product-card">
                                    <img className="product-image" src={plant.image} alt={plant.name} />
                                    <h3 className="product-title">{plant.name}</h3>
                                    <p className="product-description">{plant.description}</p>
                                    <p className="product-price">{plant.cost}</p>
                                    <button
                                        className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                                        onClick={() => handleAddToCart(plant)}
                                        
                                    >
                                        {addedToCart[plant.name] ? 'Add More to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
