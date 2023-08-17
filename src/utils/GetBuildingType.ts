export const GetBuildingType = (index: number) => {
  switch (index) {
    case 1:
      return 'Farm'
    case 2:
      return 'Academy'
    case 3:
      return 'Headquarters'
    case 4:
      return 'LumberMill'
    case 5:
      return 'Barracks'
  }
}
