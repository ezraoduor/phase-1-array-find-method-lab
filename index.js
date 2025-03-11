function superbowlWin(record){
    const year = record.find(item => item.year === "2015")
    if(year){
        return year.year
    }else{
        return undefined
    }
}
