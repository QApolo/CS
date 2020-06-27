#include <vector>
#include <set>
#include <map>

using namespace std;
const double r = 0.6; //recover rate
const double p = 0.5; //rate transmission
const double n_u = 0.6; //portion of moved susceptible individuals from u to neighbours

class Edge {
    public:
        int u, v, w;
        Edge() {
            u = v = w = 0;
        }
        Edge(int u, int v, int w) {
            this->u = u;
            this->v = v;
            this->w = w;
        }
};
class State {
    public:
        double S, I, R;
        State(double S, double I, double R) {
            this->S = S;
            this->I = I;
            this->R = R;
        }
        State() {

        }
};

class CellularAutomata {
    private:
        vector <pair<int, int>> adjList[32];
        set <int> V;
        map <int, State> S;
        map <int, int> P;
        int P_max;
    public:
        CellularAutomata(vector <Edge> Edges, vector <pair<int, State>> states) {
            for(auto edge: Edges) {
                adjList[edge.u].push_back({edge.v, edge.w});
                adjList[edge.v].push_back({edge.u, edge.w});
                V.insert(edge.u);
                V.insert(edge.v);
            }
            for(auto s: states) {
                S[s.first] = s.second;
            }
        }
        CellularAutomata(){}
         void setPopulation(map <int, int> P) {
            this->P = P;
            for(auto p: P) {
                P_max = max(P_max, p.second);
            }
        }
        double fI(vector <pair<int, int>> neighbours, int u) {
            
            State s = S[u];
            double next_infe = (1.0 - r) * s.I + p * (1.0 - n_u) * s.S * s.I;
            
            double s1 = 0.0, s2 = 0.0;

            for(auto v: neighbours)                
                s1 += (P[v.first] / P_max) * v.second * S[v.first].I;

            for(auto v: neighbours)
                s2 += (1.0 - v.second) * n_u * S[v.first].I; //substitue n_u with n_uv

            next_infe += p * (1.0 -  n_u) * s.S * s1 + p * s.S * s2;
            return next_infe;
        }
        double fS(int u) {
            double next_susc = 0.0;

            return next_susc;
        }   

        void routine(int time)
        {
            for(int t = 0; t < time; ++t) {
                
                for(auto v: V) {
                    State Sv(fS(v)  ,fI(adjList[v], v), S[v].R + r*S[v].I);                    
                    //State Sv = 
                }
            }
        }
};

int main()
{
    CellularAutomata ca;
    ca.routine(1000);

    return 0;
}