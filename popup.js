const getTitleBtn=document.getElementById("getTitle");
const titleName = document.getElementById("titleName");

getTitleBtn.addEventListener('click', async()=>{
    let [tab]= await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(tab);
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function : pickTitle
    }, async (tabresults)=>{
        const [data]=tabresults;
        if(data.result){
            titleName.innerText=data.result;
        }
        // const title =
    })
     
})

function pickTitle(){
    return document.title;
}