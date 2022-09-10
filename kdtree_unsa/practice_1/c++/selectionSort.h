#include<iostream>
#include <ctime> 
using namespace std;


void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}
 
string selectionSort(int arr[], int n)
{
	unsigned t0, t1; //inicializamos valores de tiempo
	t0=clock();

    int i, j, min_idx;
 
    // Límite de movimiento uno por uno del subarreglo sin clasificar
    for (i = 0; i < n-1; i++)
    {
		
        // Encuentramos el elemento mínimo en un array  sin clasificar
        min_idx = i;
        for (j = i+1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Intercambiamos el elemento mínimo encontrado con el primer elemento
        swap(&arr[min_idx], &arr[i]);
    }

	//hacemos calculo del tiempo que toma el algoritmo
	t1 = clock();
	//double time = (double(t1-t0)/CLOCKS_PER_SEC);
	//double time = 1000L*(double(t1-t0)/CLK_TCK);
    double time = (double(t1-t0)/CLK_TCK);
	std::ostringstream sstream;
	sstream << time;
	string time_ = sstream.str();
	cout << "Execution Time selection sort " << n <<": "<< time_ << endl;
	return time_;
}
 
