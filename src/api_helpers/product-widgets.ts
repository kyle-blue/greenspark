import Axios, { AxiosResponse } from 'axios'
import config from '../config'

export enum WidgetColor {
    BLUE = 'blue',
    GREEN = 'green',
    BEIGE = 'beige',
    WHITE = 'white',
    BLACK = 'black',
}

export enum ProductType {
    CARBON = 'carbon',
    PLASTIC_BOTTLE = 'plastic bottles',
    TREES = 'trees',
}

export enum ProductAction {
    COLLECTS = 'collect',
    PLANTS = 'plants',
    OFFSETS = 'offsets',
}

export interface ProductWidgetDTO {
    id: number,
    type: ProductType,
    amount: number,
    action: ProductAction,
    active: boolean,
    linked: boolean,
    selectedColor: WidgetColor
}

export class ProductWidgets {
    static async get(): Promise<AxiosResponse<ProductWidgetDTO[]>> {
        return Axios.get(`${config.apiUrl}/v2/016d11e8/product-widgets`)
    }
}
