#include<iostream>
#include <ctime> 
using namespace std;

string insertionSort(int arr[], int size){
	unsigned t0, t1;
	t0=clock();
	    int i, key, j;
	    for (i = 1; i < size; i++){
	        key = arr[i];
	        j = i - 1;
	        while (j >= 0 && arr[j] > key){
	            arr[j + 1] = arr[j];
	            j = j - 1;
	        }
	        arr[j + 1] = key;
	    }
	    /*for(i=0; i<size; i++)
	        cout<<arr[i]<<",";
	    cout<<endl;*/
	t1 = clock();
	//double time = (double(t1-t0)/CLOCKS_PER_SEC);
	//double time = 1000L*(double(t1-t0)/CLK_TCK);
	double time = (double(t1-t0)/CLK_TCK);
	std::ostringstream sstream;
	sstream << time;
	string time_ = sstream.str();
	cout << "Execution Time insertionSort: " << size <<": "<< time_ << endl;
	return time_;
}
