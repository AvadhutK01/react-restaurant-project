import React from 'react'
import HeaderComponent from '../../UI/Headers/HeaderComponent'
import SummeryComponent from '../../UI/Summery/SummeryComponent'
import MealsListComponent from '../../Meals/MealsLIst/MealsListComponent'
import ModalComponent from '../../UI/Modal/ModalComponent'

const MainComponent = () => {
    return (
        <div>
            <ModalComponent />
            <HeaderComponent />
            <SummeryComponent />
            <MealsListComponent />
        </div>
    )
}

export default MainComponent