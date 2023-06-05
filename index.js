function orderFood(list) {
    let mealList = {}

    for (let i = 0; i < list.length ; i++) {
        if (!mealList.hasOwnProperty(list[i].meal)) {
            mealList[list[i].meal] = 1
        } else {
            mealList[list[i].meal]++
        }
    }
    return mealList
}