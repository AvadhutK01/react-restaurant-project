// MealsListComponent.js
import React from 'react';
import './MealsList.css';

const MealsListComponent = () => {
    // Dummy Indian meals list with images
    const mealsList = [
        { Id: 1, name: 'Butter Chicken', description: 'Creamy and flavorful chicken curry', price: 'र250', image: 'Butter_chicken.jpg' },
        { Id: 2, name: 'Vegetable Biryani', description: 'Fragrant rice with mixed vegetables', price: 'र180', image: 'Veg_biryani.jpg' },
        { Id: 3, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: 'र250', image: 'paneer_tikka.jpg' },
        { Id: 4, name: 'Chicken Biryani', description: 'Spiced rice with tender chicken pieces', price: 'र200', image: 'chicken_biryani.jpg' },
    ];

    return (
        <div className="meals-list">
            {mealsList.map((meal, index) => (
                <div key={meal.Id} className="meal-item">
                    <div className="meal-header">
                        <h3>{meal.name}</h3>
                        <p className="price">{meal.price}</p>
                    </div>
                    <img src={meal.image} alt={meal.name} className="meal-image" />
                    <p className="description">{meal.description}</p>
                </div>
            ))}
        </div>
    );
};

export default MealsListComponent;
