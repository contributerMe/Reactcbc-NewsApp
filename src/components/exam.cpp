#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int findJudge(int n, vector<vector<int>>& trust);
int main()
{
    int ju ;
    ju = findJudge()
    return 0;
}
    int findJudge(int n, vector<vector<int>>& trust) {
        if (trust.empty()) {
            return -1; // No judge if trust is empty
        }
        
        int Ju = trust[0][1];
        bool isJ = true;
        
        // Check if trust[i][1] is the same for all i from 0 to n-1
        for (int i = 0; i < n; i++) {
            if (trust[i][1] != Ju) {
                isJ = false;
                break;
            }
        }
        
        // Check if trust[i][0] is not equal to Ju
        for (int i = 0; i < n; i++) {
            if (trust[i][0] == Ju) {
                isJ = false;
                break;
            }
        }
        
        if (isJ) {
            return Ju;
        }
        
        return -1; // No judge found
    }

