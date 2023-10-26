/*local storage================================================================== */

const input= document.querySelector(".fachap")
const button= document.querySelector('.buto')
const lista= document.querySelector('.list')
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter =>{
    displayList(chapter);
})

button.addEventListener('click', ()=>{
    if(input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
}) 
    function displayList(item){
        let li = document.createElement('li');
        let delbutton = document.createElement('button');
        li.textContent= item;
        delbutton.textContent= 'X';
        delbutton.classList.add('delete');
        li.append(delbutton);
        lista.append(li);
        delbutton.addEventListener('click',()=>{
            lista.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        })
        console.log('Esta bien esto')
    }

    function setChapterList(){
        localStorage.setItem("myfavorite", JSON.stringify(chaptersArray));

    }
    function getChapterList(){
        return JSON.parse(localStorage.getItem('myfavorite'))

    }
    function deleteChapter(chapter){        
    chapter= chapter.slice(0, chapter.length-1);
    chaptersArray= chaptersArray.filter((item) => item !== chapter);
    }
    

/*================================================================================== */