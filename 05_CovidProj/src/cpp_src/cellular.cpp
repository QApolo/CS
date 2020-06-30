#include <vector>
#include <set>
#include <map>

using namespace std;
const double r = 0.6; //recover rate
const double p = 0.5; //rate transmission
const double n_u = 0.6; //portion of moved susceptible individuals from u to neighbours

class Edge {
    public:
        int u, v, h;
        Edge() {
            u = v = h = 0;
        }
        Edge(int u, int v, int h) {
            this->u = u;
            this->v = v;
            this->h = h;
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
        State() { }
};

class CellularAutomata {
    private:
        vector <pair<int, int>> adjList[32];
        set <int> V;
        map <int, State> S;
        map <int, int> P;
        int P_max, h_max;
    public:
        CellularAutomata(vector <Edge> Edges, vector <pair<int, State>> states) {
            for(auto edge: Edges) {
                adjList[edge.u].push_back({edge.v, edge.h});
                adjList[edge.v].push_back({edge.u, edge.h});
                h_max = max(edge.h, h_max);
                V.insert(edge.u);
                V.insert(edge.v);
            }
            for(auto s: states) {
                S[s.first] = s.second;
            }
            P_max = 0;
        }
        CellularAutomata(){}
         void setPopulation(map <int, int> P) {
            this->P = P;
            for(auto p: P) {
                P_max = max(P_max, p.second);
            }
        }
        double fI(int u) {
            vector <pair<int, int>> neighbours = adjList[u]; 
            State s = S[u];

            double s1 = 0.0, s2 = 0.0;

            for(auto v: neighbours) {                
                s1 += (P[v.first] / P_max) * (v.second / h_max) * S[v.first].I;
                s2 += (1.0 - (v.second / h_max)) * n_u * S[v.first].I; //replace n_u with n_uv
            }  

            double next_infe = (1.0 - r) * s.I + p * (1.0 - n_u) * s.S * s.I;
            next_infe += p * (1.0 - n_u) * s.S * s1 + p * s.S * s2;

            return next_infe;
        }
        double fS(int u) {
            vector <pair<int, int>> neighbours = adjList[u]; 
            State s = S[u];

            double s1 = 0.0, s2 = 0.0, s3 = 0.0;

            for(auto v: neighbours) {                
                s1 += (P[v.first] / P_max) * (v.second / h_max) * S[v.first].I;
                s2 += (1.0 - (v.second / h_max)) * n_u * S[v.first].I; //replace n_u with n_uv
            }   

            double next_susc = s.S - p * (1.0 - n_u) * s.S * s.I - p * (1.0 - n_u) * s.S * s1;
            next_susc -= p * s.S * s2;

            return next_susc;
        }  
        double fR(int u) {
            return S[u].R + r * S[u].I;
        }

        void routine(int time) {
            for(int t = 0; t < time; ++t) {
                map <int, State> S2;    
                for(auto v: V) {
                    State Sv(fS(v) ,fI(v), fR(v)); //fR equiv S[v].R + r * S[v].I
                    S2[v] = Sv;
                }
                S = S2;
            }
        }
};

int main()
{
    CellularAutomata ca;
    ca.routine(100);
    //ca.routine(1000);

    return 0;
}