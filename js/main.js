/*Const Palettes*/
let random = ['rgb(255,0,0)','rgb(255,165,0)','rgb(255,255,0)','rgb(0,255,0)','rgb(0,0,255)'];
const berry = ['#92a8d1','#034f84','#f7cac9','#f7786b','#ffffff'];
const ocean = ['#d5f4e6','#80ced6','#fefbd8','#ffffff','#618685'];
const rainbow = ['rgb(255,0,0)','rgb(255,165,0)','rgb(255,255,0)','rgb(0,255,0)','rgb(0,0,255)'];

/*Global variables for the random palette and the user palette*/
let userPalette = new Palette("user-palette");
let randomPalette = new Palette("random-palette");
let userFonts = new FontList("user-fonts");

/*console.log(JSON.parse(JSON.stringify(randomPalette)));*/

(() => {
    updatePaletteCSS('berry-palette',berry);
    updatePaletteCSS('ocean-palette',ocean);
})();

/**
 * Custom Navigation Menu: Function to show or hide the css of each page
 * @param {*} cssClass 
 */
function togglePage(cssClass){
    let page1 = document.querySelector(`.try-it-page`);
    let page2 = document.querySelector(`.colors-page`);
    let page3 = document.querySelector(`.fonts-page`);
    let navs = document.querySelectorAll(".nav-btn");
    navs.forEach((item) => {
        item.classList.remove("active-btn");
    });
    switch(cssClass) {
        case '.try-it-page':
            page2.style.display = 'none';
            page3.style.display = 'none';
            page1.style.display = 'block';
            document.querySelector(".btn2").classList.add("active-btn");
          break;
        case '.colors-page':
            page1.style.display = 'none';
            page3.style.display = 'none';
            page2.style.display = 'block';
            document.querySelector(".btn1").classList.add("active-btn");
          break;
        case '.fonts-page':
            page2.style.display = 'none';
            page1.style.display = 'none';
            page3.style.display = 'block';
            document.querySelector(".btn0").classList.add("active-btn");
            break;
        default:
            page2.style.display = 'none';
            page3.style.display = 'none';
            page1.style.display = 'block';
            document.querySelector(".btn2").classList.add("active-btn");
      }
}

/**
 * 
 * @param {*} cssClass specific css class to target
 * @param {*} cssProperty specific css property to update
 * @param {*} newValue new value for css property
 */
 function updateCSS(cssClass, cssProperty, newValue){
    //Get the element
    let elements = document.querySelectorAll(`${cssClass}`);

    // update the elements css
    elements.forEach(function(item) {
        item.style.setProperty(`${cssProperty}`, `${newValue}`);
    });
}

/**
 * 
 * @param {*} cssClass css class to hide or unhide
 */
function toggleVisibility(cssClass, displayValue){
    let element = document.querySelector(`${cssClass}`);
    element.style.display === "none" ? element.style.display = displayValue : element.style.display = "none";
}


function toggleToolKit(){
    let menu = document.querySelector('.side-menu');
    let main = document.querySelector('.maincontent');
    if(menu.style.width === "0vmin"){
        menu.style.width = "40vmin"; 
        main.style.marginRight = "40vmin";
    }else{
        menu.style.width = "0vmin";
        main.style.marginRight = "0vmin";
    }
}
