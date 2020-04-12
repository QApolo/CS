
var cellSize = 100;
var cellSizeBordered = cellSize + 1;

class Automaton {
    constructor(width, height, prob = 0.0) {

        var movs =
			[
				[0,1],[1,0],
				[-1,0],[0,-1],
				[1,1],[1,-1],
				[-1,1],[-1,-1]
			];
        this.movs = movs
        var matrix = [];
        this.matrix = matrix;
        
        for(var i = 0; i < width; i++)
        {
           this.matrix[i] = new Array(height);

        }
        
        this.width = width;
        this.height = height;

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
                
                context.fillRect(cellSizeBordered*i, cellSizeBordered*j, cellSize, cellSize);
            }
        }

        
    }
    valid(y, x) {
        if(y < 0 || y >= this.height || x < 0 || x >= this.width)
            return false;
        return true;
    }
    countLivingNeighbours(y, x) {
        var cont = 0;
        for(var i = 0; i < 8; i++) {
            var auxY = this.movs[i][0] + y;
            var auxX = this.movs[i][1] + x;
            if( this.valid(auxY, auxX) ) {                              
                if(this.matrix[auxY][auxX] == 1) {
                    cont++;
                }
            }
        }
        return cont;

    }
    routine(time) {        
        var me = this
        var drawGrid = function(me) {

            var states = [];
  
            for(var i = 0; i < me.width; i++) {
                for(var j = 0; j < me.height; j++) {                
                    if(me.matrix[i][j] == 1)
                    {
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
            }
            for(var i = 0; i < states.length; i++) {        
                me.matrix[states[i][0]][states[i][1]] = states[i][2];
                if(states[i][2] == 1)
                    setColor();
                else
                    context.fillStyle = "white";
                context.fillRect(cellSizeBordered*states[i][0], cellSizeBordered*states[i][1], cellSize, cellSize);
            }
            time--;
            if(time >= 0) {
                setTimeout(drawGrid, 50, me);
            }       
        };
        drawGrid(me);
    }
    setLivingCell(x, y) {
        
        if(!this.valid(y, x))
            return
        this.matrix[y][x] = 1;
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
    var colorChooser = document.getElementById("colorChooser");
    context.fillStyle = "#"+colorChooser.value;
}
var myCanvas = document.querySelector("canvas");
myCanvas.width = 3 * cellSizeBordered;
myCanvas.height = 3 * cellSizeBordered;
var context = myCanvas.getContext("2d");
setColor();

startButton = document.getElementById("start");
startButton.onclick = function()
{
    automaton.routine(10000);
};


var automaton = new Automaton(myCanvas.width, myCanvas.height, 0.5);

myCanvas.onmousemove = function(evt) {
    var mousePos = getMousePos(myCanvas, evt);
    
    var tmp = context.fillStyle;
    setColor();

    var currX = Math.floor(Math.floor(mousePos.x / cellSizeBordered) * cellSizeBordered);
    var currY = Math.floor(Math.floor(mousePos.y / cellSizeBordered) * cellSizeBordered);
    automaton.setLivingCell(Math.floor(currX / cellSizeBordered), Math.floor(currY/cellSizeBordered));
    context.fillRect(currX, currY, cellSize, cellSize);
    context.fillStyle = tmp;
};







