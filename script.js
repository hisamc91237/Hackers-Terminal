const randomDelay = async () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

const addItem = async (item) => {
    await randomDelay()
    let div = document.createElement("div")
    div.innerHTML = item
    document.body.append(div)
}


async function main (){

    let t = setInterval(() => {
        let last = document.getElementsByTagName("div")
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else{
            last.innerHTML = last.innerHTML + "."
        }
    }, 500);

    let text = ["Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]
    
    for (const item of text) {
       await addItem(item)   
    }

    await randomDelay()
    clearInterval(t)
}

let body = document.querySelector("body")
body.classList.add("light")
body.classList.remove("dark")

let btn = document.querySelector(".btn")

let currMode = "light"

btn.addEventListener("click", () => {
    if(currMode == "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
})

let hackerBtn = document.querySelector(".hack")
hackerBtn.addEventListener("click", async () => {
     await main()
})
