#include <iostream>
#include <bits/stdc++.h>
#include<gmp.h>
using namespace std;

int furthestBuilding(vector<int> &heights, int bricks, int ladders)
{
    int n = heights.size();
    int i = 0;
    while (i < n - 1 && (bricks >= 0 || ladders >= 0))
    {
        if (heights[i + 1] <= heights[i])
        {
            i++;
        }
        else if(heights[i + 1] > heights[i])
        {
            int heightDiff = heights[i + 1] - heights[i];
            if (bricks >= heightDiff)
            {
                bricks -= heightDiff;
            }
            else if (ladders > 0)
            {
                ladders--;
            }else{
                break;
            }
          i++;
        }
    }
    return i;
}

int main()
{ // heights = [14,3,19,3], bricks = 17, ladders = 0
    // heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
    // heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
    vector<int> v;
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        v.push_back(x);
    }
    int brick, ladder;
    cin >> brick >> ladder;
    int ans = furthestBuilding(v, brick, ladder);
    cout << ans;
    return 0;
}