
/*Palette Class*/
class Palette {
    constructor(name){
        this.name = name;
        this.colors = [
            `rgb(255,0,0)`,
            `rgb(255,165,0)`,
            `rgb(255,255,0)`,
            `rgb(0,255,0)`,
            `rgb(0,0,255)`];
        this.numColors = 5;
    }
    get getPalette(){
        return this.colors;
    }
    set setPalette(palette){  
        palette.forEach((element,index) => {
            this.colors[index] = element;
        });
    }
    get getName(){
        return this.name;
    }
    empty(){
        this.colors.splice(0,this.colors.length);
        this.numColors = 0;
    }
    add(color){
        if(this.numColors >= 5){
            console.log("Your palette is full!");
            return;
        }
        this.colors.push(color);
        this.numColors++;
    }
    remove(index){
        console.log("removing color");
        if(this.numColors <= 0){
            console.log("Your palette is empty!");
            return;
        }
        this.colors.splice(index,1);
        this.numColors--;
    }
    getColor(index){
        console.log(this.colors[index]);
        return this.colors[index];
    }
    swapColor(index,color){
        this.colors[index] = color;
    }
    
}

/**
 * Returns the color at a particular index in the users palette
 * Used for updating css
 * @param {*} index 
 * @returns 
 */
function getUserPaletteColor(index){
    return userPalette.getColor(index);
}

/**
 * Takes in the name of a palette class and updates its css
 * @param {*} name 
 * @param {*} palette 
 */
function updatePaletteCSS(name,palette){
    updateCSS(`.${name} .item1`,"background",palette[0]);
    updateCSS(`.${name} .item2`,"background",palette[1]);
    updateCSS(`.${name} .item3`,"background",palette[2]);
    updateCSS(`.${name} .item4`,"background",palette[3]);
    updateCSS(`.${name} .item5`,"background",palette[4]);
}

/**
 * Called when user presses the "Add to Palette button"
 * Sets the user palette to be the same as that palette
 */
 function setUserPalette(palette){
    userPalette.setPalette = palette;
    updatePaletteCSS(userPalette.getName,palette);
}

/**
 * Updates the random palette object and its css
 * @param {*} palette 
 */
function updateRandom(palette){
    random = palette;
    updatePaletteCSS('random-palette',palette);
}

/**
 * 
 * @param {*} palette 
 * @returns An array with properly formulated rgb values
 */
function formatRGB(palette){
    return [
        `rgb(${palette[0][0]},${palette[0][1]},${palette[0][2]})`,
        `rgb(${palette[1][0]},${palette[1][1]},${palette[1][2]})`,
        `rgb(${palette[2][0]},${palette[2][1]},${palette[2][2]})`,
        `rgb(${palette[3][0]},${palette[3][1]},${palette[3][2]})`,
        `rgb(${palette[4][0]},${palette[4][1]},${palette[4][2]})`
    ];
}

/**
 * Makes request to colormind API to get a random color palette

function getRandomColorPalette(){
    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
        input : ["N","N","N","N","N"]
    }

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var palette = formatRGB(JSON.parse(http.responseText).result);
            updateRandom(palette);
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
} */

/*const updateColorUIError = function(error){
    console.log("Error");
    console.log(error);
}

const updateColorUISuccess = function(data){
    console.log("Success");
    console.log(data);
    console.log("palette");
    let palette = JSON.parse(data);
    console.log(palette);
}*/

const responseMethod = function(httpRequest, succeed, fail) {
    if(http.readyState == 4){
        if( http.status == 200){
            succeed(httpRequest.responseText);
        } else{
            fail(httpRequest.status + ':' + httpRequest.responseText);
        }
    }
}


//createRequest using XML Request
const createRequest = function(url, succeed, fail) {
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest,succeed, fail));
    httpRequest.open('GET', url);
    httpRequest.send();
};

/**
 * 
 * @param {*} response Catches response errors
 * @returns Returns json response

const handleErrors = function(response) {
    if(!response.ok){
        throw new Error(JSON.parse(response.status) + ': ' + JSON.parse(response.statusText))
    }
    return response;
} */

/**
 * 
 * @param {*} url  URL to make request to
 * @param {*} succeed Code if request succeeds
 * @param {*} fail Code if request fails
const createRequest = function(url, succeed, fail) {
    fetch(url)
        .then((response) => handleErrors(response))
        .then((data) => succeed(data))
        .catch((error) => fail(error));
/
}*/

function getRandomColorPalette(){
    const url = "http://colormind.io/api/";
    let data = {
        model : "default",
        input : ["N","N","N","N","N"]
    }

    /*const palette = createRequest(url, updateColorUISuccess, updateColorUIError);
    console.log(palette);*/
    //updateRandom(palette);
    
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var palette = formatRGB(JSON.parse(http.responseText).result);
            updateRandom(palette);
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
}