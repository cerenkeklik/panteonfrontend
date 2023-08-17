export type AddConfigFormType = {
    BuildingType: number,
    BuildingCost: number,
    ConstructionTime: number
    BuildingTypeError: string | null,
    BuildingCostError: string | null,
    ConstructionTimeError: string | null
}

export type AuthFormType = {
    Username: string,
    Email: string,
    Password: string
}

export type Building = {
    buildingType: number,
    buildingCost: number,
    constructionTime: number
}