import React, { useState } from 'react'
import HeaderComponent from '../../UI/Headers/HeaderComponent'
import SummeryComponent from '../../UI/Summery/SummeryComponent'
import MealsListComponent from '../../Meals/MealsLIst/MealsListComponent'
import ModalComponent from '../../UI/Modal/ModalComponent'

const MainComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = (value) => {
        setIsModalOpen(value)
    }

    return (
        <div>
            {
                isModalOpen && (
                    <ModalComponent handleModal={handleModal} />
                )
            }
            <HeaderComponent handleModal={handleModal} />
            <SummeryComponent />
            <MealsListComponent />
        </div>
    )
}

export default MainComponent