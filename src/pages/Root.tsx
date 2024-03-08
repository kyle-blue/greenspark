import React, { useEffect, useState } from 'react'
import { MainContainer } from './RootStyles'
import { ProductWidgetDTO, ProductWidgets } from '../api_helpers/product-widgets'
import ProductWidget from '../components/ProductWidget'

function Root(): React.ReactElement {
    const [productWidgets, setProductWidgets] = useState<ProductWidgetDTO[]>([])
    useEffect(() => {
        const fetchProductWidgets = async () => {
            const response = await ProductWidgets.get()
            if (response.status === 200) {
                setProductWidgets(response.data)
            }
        }
        fetchProductWidgets()
    }, [])

    return (
        <MainContainer>
            {
                productWidgets.map((productWidget, index) => (
                    <ProductWidget
                        key={productWidget.id}
                        productWidget={productWidget}
                        setLinked={(isLinked) => {
                            const newProductWidgets = [...productWidgets]
                            newProductWidgets[index].linked = isLinked
                            setProductWidgets(newProductWidgets)
                        }}
                        setActive={(isActive) => {
                            const newProductWidgets = productWidgets
                                .map((value) => ({ ...value, active: false }))
                            newProductWidgets[index].active = isActive
                            setProductWidgets(newProductWidgets)
                        }}
                        setColor={(color) => {
                            const newProductWidgets = [...productWidgets]
                            newProductWidgets[index].selectedColor = color as any
                            setProductWidgets(newProductWidgets)
                        }}
                    />
                ))
            }
        </MainContainer>
    )
}

export default Root
