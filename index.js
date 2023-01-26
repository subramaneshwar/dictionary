const input = document.getElementById("input")
const audio = document.getElementById("audio")
const def = document.getElementById("def")
let audioref = ""
async function search(){
    const searchValue = input.value;
    console.log(searchValue)
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchValue}?key=2a542a23-67f0-48dd-bae9-35aaa8d0113b`)
    // console.log(response);
    const data = await response.json();
    let audioref = await data[0].hwi.prs[0].sound.audio;
    // console.log(aud)
    const mean = data[0].shortdef[0]
    def.innerHTML=mean
    let a = input.value.charAt(0)
    let dir =""
    console.log(a);
    if(/^[0-9]+$/.test(a)==true){
        console.log("not a number");
        dir= "number"
    }
    else{
        dir=a
    }
    audio.src =`https://media.merriam-webster.com/audio/prons/en/us/mp3/${dir}/${audioref}.mp3`
}


