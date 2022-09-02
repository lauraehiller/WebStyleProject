/*FontList Class*/
class FontList {
    constructor(){
        this.fontArray = [];
        this.size = 0;
        this.message = "Choose some fonts to get started!";
    }
    /*Getters and Setters*/
    get getFontArray(){
        return this.fontArray;
    }
    get getSize() {
        return this.size;
    }
    get getMessage(){
        return this.message;
    }
    set setMessage(msg){
        this.message = msg;
    }
    /*Class Methods*/
    increaseSize(){
        ++this.size;
    }

    decreaseSize(){
        --this.size;
    }

    changeMessage(msg){
        this.setMessage = msg;
        let message = document.querySelector('.toolkit-message'); 
        message.innerText = this.getMessage;
    }

    containsDuplicates(newFont) {
        let array = this.getFontArray;
        const result = array.some(element => {
          if(element === newFont){
            this.changeMessage("That font is already in your list!");
            return true;
          }
          this.changeMessage("");
          return false;
        });
        return result;
    }

    add(newFont){
        this.changeMessage("");
        if(this.getSize > 9){
            this.changeMessage("Your font list is full!");
            return;
        }
        if(!this.containsDuplicates(newFont)){
            this.fontArray.push(newFont);
            this.increaseSize(); 
        }
    }

    remove(index){
        this.changeMessage("");
        if(this.getSize < 1){
            this.changeMessage("Your font list is empty!");
            return;
        }
        this.fontArray.splice(index,1);   
        this.decreaseSize();
    }
}

function clearHTMLOne(className){
    document.querySelector(className).innerHTML = "";
}

function clearHTMLAll(className){
    let items = document.querySelectorAll(className);
    items.forEach((element) =>{
        element.innerHTML = "";
    });
}

function renderList(){
    clearHTMLOne(".fonts-container");
    let listContainer = document.querySelector('.fonts-container');
    userFonts.getFontArray.forEach((element,index) => {
        let font = document.createElement("div");
        font.classList.add('font-item');
        
        let p = document.createElement("p");
        p.classList.add(`font-item-text`);
        p.innerText = element;
        p.style.fontFamily = `var(--${element})`;
        
        let b = document.createElement("button");
        b.innerText = "X";
        b.classList.add('font-item-btn');
        b.onclick = (() => removeFromFontList(index));
 
        listContainer.append(font);
        font.append(p);
        font.append(b);
    });
}

function renderMenus(){
    clearHTMLAll(".select-options");
    let options = document.querySelectorAll('.select-options');
    options.forEach((menu) => {
        userFonts.getFontArray.forEach((element) => {
            let option= document.createElement("option");
            option.classList.add('selector-font');
            option.innerText = element;
            option.style.fontFamily = `var(--${element})`;
            menu.append(option);
        });
    })
}

function addToFontList(newFont) {
    userFonts.add(newFont);
    renderList();
    renderMenus();
    console.log("Added font successfully!");
}

function removeFromFontList(index) {
    userFonts.remove(index);
    renderList();
    renderMenus();
    console.log("Removed font successfully!");
}