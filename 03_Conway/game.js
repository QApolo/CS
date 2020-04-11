
var cellSize = 8;
class Automaton {
    constructor(width, height) {

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


        for(var i = 0; i < width; i++) {
            for(var j = 0; j < height; j++) {
                var val = Math.floor(Math.random() * 2);
                //console.log(val);
                this.matrix[i][j] = val//new Cell(val, i, j);                
                if(val == 1) {
                    context.fillStyle = "black";
                }
                else {
                    context.fillStyle = "white";
                }
                context.fillRect((cellSize+1)*i, (cellSize+1)*j, cellSize, cellSize);
            }
        }
       
        
    }
    valid(y, x)
    {
        if(y < 0 || y >= this.height || x < 0 || x >= this.width)
            return false;
        return true;
    }
    countLivingNeighbours(y, x) {
        var cont = 0;
        for(var i = 0; i < 8; i++)
        {
            var auxY = this.movs[i][0] + y;
            var auxX = this.movs[i][1] + x;
            if( this.valid(auxY, auxX) )
            {                              
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
  
            for(var i = 0; i < me.width; i++)
            {
                for(var j = 0; j < me.height; j++)
                {                
                    if(me.matrix[i][j] == 1)
                    {
                        var count = me.countLivingNeighbours(i, j);
                        if(!(count == 2 || count == 3))
                        {
                            states.push([i, j, 0]);
                        }
                    }
                    else if(me.matrix[i][j] == 0)
                    {
                        var count = me.countLivingNeighbours(i, j);
                        if( count == 3 )
                        {
                            states.push([i, j, 1]);
                        }
                    }
                }
            }
            for(var i = 0; i < states.length; i++)
            {        
                me.matrix[states[i][0]][states[i][1]] = states[i][2];
                if(states[i][2] == 1)
                    context.fillStyle = "black";
                else
                    context.fillStyle = "white";
                context.fillRect((cellSize+1)*states[i][0], (cellSize+1)*states[i][1], cellSize, cellSize);
            }
            time--;
            if(time >= 0)
            {
                setTimeout(drawGrid, 100, me);
            }       
        };
        drawGrid(me);
    }
}


var myCanvas = document.querySelector("canvas");
var context = myCanvas.getContext("2d");
context.fillStyle = "black";

automaton = new Automaton(100, 100);
automaton.routine(10000);




