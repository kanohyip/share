async function setValue(labelName,value){
    return new Promise(async(resolve, reject)=>{
        const filterContainerArr = [...document.querySelectorAll('div.Filter-filterContainer')].filter(x=>x.innerText.includes(labelName))
        if(!filterContainerArr.length) 
            throw new Error(`${labelName} no found`)
        const parentEle = filterContainerArr[0]
        
        if(value === -1){
            let clearButton = parentEle.querySelector('button[aria-label="Clear"]')
            clearButton && clearButton.click()
            resolve()
        }
        else{
            let pulldownButton = parentEle.querySelector('button[aria-label="Open"]')
            pulldownButton.click()
            await delay(1);
            if(typeof value === 'string'){
                let liArr = [...document.querySelector('div.MuiAutocomplete-popper').querySelectorAll('li')].filter(x=>x.innerText==value)
                if(!liArr.length)
                    throw new Error(`${value} no found`)
                liArr[0].click()
            }
            else if(typeof value === 'number'){
                if(value < 100)
                    document.querySelector('div.MuiAutocomplete-popper').querySelectorAll('li')[value].click()
                else if(value === 100)
                    document.querySelector('div.MuiAutocomplete-popper').querySelectorAll('li[aria-selected="false"]')[0].click()
            }
            
            resolve()
        }

        
    })
 
}
function delay(n) {
    return new Promise(function(resolve) {
        setTimeout(resolve, n * 1000);
    });
}

const missionList = [
    '入力',
    '変更',
    'クリア']

function createTask(labelName,mission){
    if('入力状態' === mission){
        setValue(labelName,0)
    }
    else if('未入力状態' === mission){
        setValue(labelName,-1)
    }
}

async function runTask(taskStr){
    let taskArr = taskStr.split(',')

    //契約拠点
    //対象日
    //企業グループ
    //上位企業
    //通貨
    //スキームグループ
    //スキーム
    
}