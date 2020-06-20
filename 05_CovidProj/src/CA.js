class State {
    constructor(I, S, R) {
        this.I = I;
        this.S = S;
        this.R = R;
    }
};

class Node {
    constructor(index, s, p) {
        this.index = index;
        this.s = s;
    }
};
//edgeList = {(Weight, Node, Node)};
class Graph {
    constructor(edgeList, n) {
        this.edgeList = edgeList;
        this.adjList = {};
        V = new map();
        for(var i = 0; i < edgeList.length; i++) {
            u = edgeList[i][1][0];
            v = edgeList[i][1][1];
            w = edgeList[i][0];
            V.set(u.index, u);
            V.set(v.index, v);
            this.adjList[u.index].push([v.index, w]);
            this.adjList[v.index].push([u.index, w]);
        }
    }
    getNeighbours(u) {

        return this.adjList[u];
    }
    getP() {
        P = 0
        for (const [key, value] of this.V.entries()) {
            P = max(P, this.adjList[key].p);//console.log(key, value);
        }
        return P;
    }    
};
class CellularAutomaton {
    //G Graph class
    constructor(G) {
        this.G = G;
        this.V = G.V;

        this.N = new map();
        for(var i = 0; i < this.V.length; i++) {
            N.set(i, this.adjList[i]);
        }
    }
    f_transition(u) {
        neigh = this.N[u];
    }

};
/**
class CellularAutomaton {
    constructor(graph) {
        this.graph = graph;
    }
    routine(time) {

        for(var t = 0; t < time; t++) {
            next = this.graph;
            for(let u of this.graph.V){
                sn = this.f_transition(this.graph.getNeighbours(u));
                vn = Node(u.index, sn);
                
                //next.adjList[u];
            }

        }
    }
    f_transition(neighours) {

    }

};
 */
g = new Graph();
ca = new CellularAutomaton(g);