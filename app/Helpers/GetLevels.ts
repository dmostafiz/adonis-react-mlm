import Level from "App/Models/Level"

export default async function GetLevels(myId){
    var levels: any = {
        levelOne: 0,
        levelTwo: 0,
        levelThree: 0,
        levelFour: 0,
        levelFive: 0,
        levelSix: 0,
        levelSeven: 0
    }

    const myLevels = await Level.query()
        .where('user_id', myId)


    myLevels.map((lvl: any) => {

        if(lvl.level == 1){
            levels = {...levels, levelOne: levels.levelOne + 1}
        }
        
        else if(lvl.level == 2){
            levels = {...levels, levelTwo: levels.levelTwo + 1}
        }
        
        else if(lvl.level == 3){
            levels = {...levels, levelThree: levels.levelThree + 1}
        }
        
        else if(lvl.level == 4){
            levels = {...levels, levelFour: levels.levelFour + 1}
        }
        
        else if(lvl.level == 5){
            levels = {...levels, levelFive: levels.levelFive + 1}
        }
        
        else if(lvl.level == 6){
            levels = {...levels, levelSix: levels.levelSix + 1}
        }
        
        else if(lvl.level == 7){
            levels = {...levels, levelSeven: levels.levelSeven + 1}
        }
        
    })

    return levels
}