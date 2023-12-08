void plusMinus(vector<int> arr,int n) {
    float post=0,neg=0,neu=0,posr=0,negr=0,neur=0;
    for(int i=0;i<n;i++)
    {
        if(arr[i]>0){
             post=post+1;
        }
        else if(arr[i]<0){
             neg=neg+1;
        }
        else
        {
             neu=neu+1;
        }
    }
    posr=post/n;
    negr=neg/n;
    neur=neu/n;
    //posr=6;negr=7;
    cout<<setprecision(6)<<posr<<endl<<negr<<endl<<neur;
}