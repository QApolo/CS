#include <bits/stdc++.h>

using namespace std;
const int k = 2;

const int MOD = k*k; //k^(2*r)
bool condition(int i, int j)
{
    if( (j == k*i % MOD) || j == ((k*i +1) % MOD) )
        return true;
    return false;
}

int main()
{

    vector <vector <int>> M(4, vector <int>(4));
    cout << "Matrix adj" << endl;
    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4; j++)
        {
            if(condition(i, j))
                M[i][j] = 1;
            else 
                M[i][j] = 0;
        }
    }

    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4; j++)
            cout << M[i][j] <<" ";
        cout << endl;
    }

    string binary [4]= {"00", "01", "10", "11"};
    cout << endl << "labels" << endl;

    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4; j++)
        {   
            if(binary[i][1] == binary[j][0])
            {
                cout << i << " " << j << endl;
                cout << binary[i] << " . " << binary[j] << " = " << binary[i][0] << binary[i][1] << binary[j][1] << " = ";        
            }
        }
    }

    cout << endl << endl;
    const int rules[6] = {15, 22, 30, 54, 90, 110};

    for(int rule: rules)
    {
        cout << "Regla: " << rule << endl;
        bitset<8> current(rule);
        //cout << current.to_string() << endl;
        for(int i = 0; i < 4; i++)
        {
            for(int j = 0; j < 4; j++)
            {   
                if(binary[i][1] == binary[j][0])
                {
                    cout << i << " " << j << endl;
                    cout << binary[i] << " . " << binary[j] << " = " << binary[i][0] << binary[i][1] << binary[j][1] << " = ";        
                    
                    int representation = (binary[j][1]-48) + (binary[i][1]-48) * 2 + (binary[i][0]-48)*4;
                    //cout <<"rep: "<< representation << endl;
                    cout << current[representation] << endl;
                }
            }
        }
    }

    return 0;
}