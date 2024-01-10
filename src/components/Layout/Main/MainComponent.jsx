import React from 'react'
import HeaderComponent from '../../UI/Headers/HeaderComponent'
import SummeryComponent from '../../UI/Summery/SummeryComponent'
import MealsListComponent from '../../Meals/MealsLIst/MealsListComponent'

const MainComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <SummeryComponent />
            <MealsListComponent />
        </div>
    )
}

export default MainComponent