#include <algorithm>
#include <iostream>
#include <sstream>
#include <fstream>
#include <vector>
#include <ctime> 
using namespace std;

string countingSort(int array[], int size) {
	unsigned t0, t1;
	t0=clock();
		int output[size]; //Salida
		int count[size]; //Contador
		int max = array[0]; //Maximo
		// Encuentra el elemento mas grande del array
		for (int i = 1; i < size; i++) {
			if (array[i] > max)
			max = array[i];
		}
		// Inicializa la matriz de conteo en 0
		for (int i = 0; i <= max; ++i) {
			count[i] = 0;
		}
		// Almacena el recuento de cada elemento
		for (int i = 0; i < size; i++) {
			count[array[i]]++;
		}
		// Almacena el acululado del array
		for (int i = 1; i <= max; i++) {
			count[i] += count[i - 1];
		}
		for (int i = size - 1; i >= 0; i--) {
			output[count[array[i]] - 1] = array[i];
			count[array[i]]--;
		}
	  	/*for(int i=0; i<size; i++)
			cout<<output[i]<<",";
		cout<<endl;*/
  	t1 = clock();
  	double time = (double(t1-t0)/CLK_TCK);
	//double time = 1000L*(double(t1-t0)/CLK_TCK);
	//double time = (double(t1-t0)/CLOCKS_PER_SEC);
	std::ostringstream sstream1;
	sstream1 << time;
	string time_ = sstream1.str();
	cout << "Execution Time countingSort" << size <<": "<< time_ << endl;
	return time_;
}
