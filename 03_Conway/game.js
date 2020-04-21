var cellSize = 8;
var cellSizeBordered = cellSize + 1;

class Automaton {
    constructor(width, height, prob = 0.0, time = 1000) {

        var movs =
			[
				[0,1],[1,0],
				[-1,0],[0,-1],
				[1,1],[1,-1],
				[-1,1],[-1,-1]
			];
        this.movs = movs;
        var matrix = [];
        this.matrix = matrix;
        
        for(var i = 0; i < width; i++)
        {
           this.matrix[i] = new Array(height);

        }
        
        this.width = width;
        this.height = height;
        this.prob = prob;
        var totalOnes = Math.floor(this.width * prob);
        for(var i = 0; i < height; i++) {
            for(var j = 0; j < totalOnes; j++)
                this.matrix[i][j] = 1;
        }

        for(var i = 0; i < height; i++) {
            for(var j = totalOnes; j < width; j++)
                this.matrix[i][j] = 0;
            shuffle(this.matrix[i]);
        }

        for(var i = 0; i < width; i++) {
            for(var j = 0; j < height; j++) {
                
                if(this.matrix[i][j] == 1)
                    setColor();
                else
                    context.fillStyle = "white";
                
                context.fillRect(cellSizeBordered*j, cellSizeBordered*i, cellSize, cellSize);
            }
        }

        
    }
    valid(y, x) {
        if(y < 0 || y >= this.height || x < 0 || x >= this.width)
            return false;
        return true;
    }
    countLivingNeighbours(y, x, mirrorNeigh = true) {
        var cont = 0;
        for(var i = 0; i < 8; i++) {
            var auxY = (this.movs[i][0] + y);
            var auxX = (this.movs[i][1] + x);

            if(mirrorNeigh) {
                 auxY = auxY % this.height;
                 auxX = auxX % this.width;
            }   
            if( this.valid(auxY, auxX) ) {                              
                if(this.matrix[auxY][auxX] == 1) {
                    cont++;
                }
            }
        }
        return cont;

    }
    routine(evt) {        
        var me = this
        var waitTime = 50;
        if(this.size >= 500)
            waitTime = 0;
        var drawGrid = function(me) {

            var states = [];
            var count_ones = 0;
            for(var i = 0; i < me.width; i++) {
                count_ones = 0;
                for(var j = 0; j < me.height; j++) {                
                    if(me.matrix[i][j] == 1)
                    {
                        count_ones++;
                        var count = me.countLivingNeighbours(i, j);
                        if(!(count == 2 || count == 3)) {
                            states.push([i, j, 0]);
                        }
                    }
                    else if(me.matrix[i][j] == 0) {
                        var count = me.countLivingNeighbours(i, j);
                        if( count == 3 ) {
                            states.push([i, j, 1]);
                        }
                    }
                }
                //myChart.options.data.push(count_ones);
            }
            for(var i = 0; i < states.length; i++) {        
                me.matrix[states[i][0]][states[i][1]] = states[i][2];
                if(states[i][2] == 1)
                    setColor();
                else
                    context.fillStyle = "white";
                context.fillRect(cellSizeBordered * states[i][1], cellSizeBordered*states[i][0], cellSize, cellSize);
            }
            time--;
            if(time >= 0 && document.getElementById("file").disabled == false) {
                setTimeout(drawGrid, waitTime, me);
            }       
        };
        drawGrid(me);
    }
    setLivingCell(x, y) {
        
        if(!this.valid(y, x))
            return
        this.matrix[y][x] = 1;
    }

    setValueCell(x, y, val) {
        
        if(!this.valid(y, x))
            return
        this.matrix[y][x] = val;
    }

    getConfiguration() {
        var configuration = ""
        configuration += this.width+"\n";
        configuration += "1" +" " +this.prob+"\n";
        configuration += time+"\n";
        for(var i = 0; i < this.height; i++)
        {
            for(var j = 0; j < this.width; j++)
            {
                configuration += this.matrix[i][j];
            }
            configuration += "\n";
        }
        return configuration;
    }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    //return a;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function setColor()
{
    context.fillStyle = "#"+document.getElementById("colorChooser").value;
}
var myCanvas = document.querySelector("canvas");
var size_param = document.getElementById("size_param");
var prob_param = document.getElementById("probability_param");
var prob = prob_param.value;
var size = size_param.value;

prob_param.oninput = function() {
    if( prob_param.value >= 0 && prob_param.value <= 1) {
        prob = prob_param.value;
        automaton = new Automaton(size, size, prob);
    }
}


size_param.oninput = function()
{
    if(size_param.value >= 10 && size_param.value <= 1000) {
        size = size_param.value;

        cellSize = Math.ceil(1000 / size);
        cellSizeBordered = cellSize + 1;

        myCanvas.width = size * cellSizeBordered;
        myCanvas.height = size * cellSizeBordered;


        automaton = new Automaton(size, size, prob);
    }

}
var context = myCanvas.getContext("2d");
setColor();

startButton = document.getElementById("start");
startButton.onclick = function(evt)
{
    size = size_param.value;
    prob = prob_param.value;
    myCanvas.width = size * cellSizeBordered;
    myCanvas.height = size * cellSizeBordered;
    //automaton = new Automaton(size, size, prob);
    automaton.routine(evt);
};


myCanvas.onmousemove = function(evt) {
    var mousePos = getMousePos(myCanvas, evt);
    
    var tmp = context.fillStyle;
    setColor();

    var currX = Math.floor(Math.floor(mousePos.x / cellSizeBordered) * cellSizeBordered);
    var currY = Math.floor(Math.floor(mousePos.y / cellSizeBordered) * cellSizeBordered);
    if(evt.shiftKey) {
        automaton.setLivingCell(Math.floor(currX / cellSizeBordered), Math.floor(currY/cellSizeBordered));
        context.fillRect(currX, currY, cellSize, cellSize);
        context.fillStyle = tmp;
        //console.log( Math.floor(currX / cellSizeBordered)+ " "+ Math.floor(currY/cellSizeBordered));
    }
};


var fileInput = document.getElementById('file');
var data = undefined;

fileInput.onchange = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function() {
        data = reader.result;
    };
    upload.style.visibility = "visible";
    reader.readAsText(input.files[0]);
};
 var upload = document.getElementById('upload');

 upload.onclick = function(evt) {
    //console.log(data);

    splitted = data.split("\n");
    size = parseInt(splitted[0]);

    cellSize = Math.ceil(1000 / size);
    cellSizeBordered = cellSize + 1;

    size_param.value = size;
    prob_param.value = prob;

    myCanvas.width = size * cellSizeBordered;
    myCanvas.height = size * cellSizeBordered;
    
    var is_prob = splitted[1].split(" ")[0] == '1';

    if(is_prob) {
        prob = parseFloat(splitted[1].split(" ")[1]);
        console.log(prob);
        automaton = new Automaton(size, size, prob);
        return;
    }
    var time = splitted[2];
    automaton = new Automaton(size, size, 0);
    for(var i = 3; i < size+3; i++)
    {
        for(var j = 0; j < size; j++)
        {
            if(splitted[i][j] === '1') {
                automaton.setValueCell(j, i-3, 1);
                setColor();
                context.fillRect(j*cellSizeBordered, (i-3)*cellSizeBordered, cellSize, cellSize);                
            }
            else {
                context.fillStyle = "white";
                context.fillRect(j*cellSizeBordered, (i-3)*cellSizeBordered, cellSize, cellSize);
                automaton.setValueCell(j, i-3, 0);
            }
        }            
    }

 };

 
 function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

//var splited = data.split("\n");

myCanvas.width = size * cellSizeBordered;
myCanvas.height = size * cellSizeBordered;
var automaton = new Automaton(size, size, prob, time = 100000);
upload.style.visibility = "hidden";
//upload.onclick = false;

var saver = document.getElementById("save");
saver.onclick = function(event) {

    var config = automaton.getConfiguration();
    download(config, "configuration.txt", "txt");
};