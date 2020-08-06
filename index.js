///creem lista de elemente carora le vom da append
const like = 4;
const dislike = 4;
let count = 0;

const listContainer = document.querySelector(".list-container");
///aici creem lista si dupa dam append in functie de ce vrea userul
const actualList = document.createElement('ul');


const likeBtn = document.querySelector(".like-btn");
const dislikeBtn = document.querySelector('.dislike-btn');
const introList = document.createElement('h1');
introList.textContent = "Lista preferinte! Enjoy ;)"
introList.classList.add("intro-text");


const outroList = document.createElement("h1");
outroList.textContent = "This was it ;) ";
outroList.classList.add("end-msg");

///lista de obiecte cu preferinte
const preferinte = [
    "I like programming",
    "I like sports",
    "I love dogs",
    "I like chocolate ;)"
]

const chestiiNaspa = [
    "I don't like cats",
    "I don't like spiders",
    "I don't like brocolli. Yuck",
    "I don't like insects"
]

let pListLike = [];
let pListDislike = [];



function likeAction()
{
 if (count === 0)
 {
    
    let text ;
     count++;
     listContainer.insertAdjacentElement('beforebegin',introList);
    ///iteram lista de preferinte, creem o lista cu elemente de tip paragraph 
    /// care vor avea in interior continutul
    pListLike  = preferinte.map((elem)=>{
        text = elem;
        elem = document.createElement("li");
        elem.classList.add('like-item');
        elem.textContent = text;
        return elem;
    }); 
    pListDislike  = chestiiNaspa.map((elem)=>{
        text = elem;
        elem = document.createElement("li");
        elem.classList.add('dislike-item');
        elem.textContent = text;
        return elem;
    }); 
    ///adaugam ca primul child ul-ul
    listContainer.appendChild(actualList);
    ///vom da append la lista la restul elementelor
    actualList.appendChild(pListLike.pop());
    
    
 }
 else{
     
    ///aicea suntem in unul dintre cazurile unde doar trebuie sa adaugam la ul elementul
    actualList.appendChild(pListLike.pop());
    count++
}
  if(count===8)
 {
    ///adaugam elementul la finalul listei
    listContainer.insertAdjacentElement('afterend',outroList);
    ///dezactivam butonul si ii adaugam alta clasa
    likeBtn.removeEventListener('click',likeAction);
    likeBtn.classList.toggle('like-btn');
    likeBtn.setAttribute('class','disabled');
    

 }
  if(pListLike.length===0){
    ///aici este cazul in care am epuizat lista
    ///scoatem eventul de pe buton si ii dam clasa disabled
    likeBtn.removeEventListener('click',likeAction);
    likeBtn.classList.toggle('like-btn');
    likeBtn.setAttribute('class','disabled');
 }
 

}

function dislikeAction()
{
    
        
    if (count === 0)
 {
    
    let text ;
     count++;
     listContainer.insertAdjacentElement('beforebegin',introList);
    ///iteram lista de preferinte, creem o lista cu elemente de tip paragraph 
    /// care vor avea in interior continutul
    pListLike  = preferinte.map((elem)=>{
        text = elem;
        elem = document.createElement("li");
        elem.classList.add('like-item');
        elem.textContent = text;
        return elem;
    }); 
    pListDislike  = chestiiNaspa.map((elem)=>{
        text = elem;
        elem = document.createElement("li");
        elem.classList.add('dislike-item');
        elem.textContent = text;
        return elem;
    }); 
    ///adaugam ca primul child ul-ul
    listContainer.appendChild(actualList);
    ///vom da append la lista la restul elementelor
    actualList.appendChild(pListDislike.pop());
    
    
 }
 else{
     
    ///aicea suntem in unul dintre cazurile unde doar trebuie sa adaugam la ul elementul
    actualList.appendChild(pListDislike.pop());
    count++
}
  if(count===8)
 {
    ///adaugam elementul la finalul listei
    listContainer.insertAdjacentElement('afterend',outroList);
    ///dezactivam butonul si ii adaugam alta clasa
    dislikeBtn.removeEventListener('click',dislikeAction);
    dislikeBtn.classList.toggle('dislike-btn');
    dislikeBtn.setAttribute('class','disabled');
    

 }
  if(pListDislike.length===0){
    ///aici este cazul in care am epuizat lista
    ///scoatem eventul de pe buton si ii dam clasa disabled
    dislikeBtn.removeEventListener('click',dislikeAction);
    dislikeBtn.classList.toggle('dislike-btn');
    dislikeBtn.setAttribute('class','disabled');
 }
 
}

likeBtn.addEventListener('click',likeAction);
dislikeBtn.addEventListener('click',dislikeAction);