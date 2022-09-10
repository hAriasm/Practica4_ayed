#include <iostream>
#include <sstream>
#include <fstream>
#include <ctime> 
using namespace std;

void merge(int array[], int const left, int const mid, int const right)
{
    int subArrayOne = mid - left + 1;
    int subArrayTwo = right - mid;
 
    // Creamos temp arrays
    int *leftArray = new int[subArrayOne],
         *rightArray = new int[subArrayTwo];
 
    // Copiamos la data de temp arrays leftArray[] y  rightArray[]
    for (int i = 0; i < subArrayOne; i++)
        leftArray[i] = array[left + i];
    for (int j = 0; j < subArrayTwo; j++)
        rightArray[j] = array[mid + 1 + j];
 
    int indexOfSubArrayOne = 0, // inizializamos indice del primer sub-array
        indexOfSubArrayTwo = 0; // inizializamos indice del segundo sub-array
    int indexOfMergedArray = left; // Inizializamos index de merged array
 
    // juntamos los arrays temporales [left..right]
    while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {
        if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo]) {
            array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
        }
        else {
            array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
        }
        indexOfMergedArray++;
    }
    // Copiamos los elementos restantes
    // left[], si hay alguno para modificar
    while (indexOfSubArrayOne < subArrayOne) {
        array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
        indexOfSubArrayOne++;
        indexOfMergedArray++;
    }
    // Copiamos los elementos restantes
    // left[], si hay alguno para modificar
    while (indexOfSubArrayTwo < subArrayTwo) {
        array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
        indexOfSubArrayTwo++;
        indexOfMergedArray++;
    }
}
 
// begin es para el indice izquierdo y end es para el derecho
void mergeSortV(int array[], int const begin, int const end)
{
    if (begin >= end)
        return; // Returna recursividad
 
    int mid = begin + (end - begin) / 2;
    mergeSortV(array, begin, mid);
    mergeSortV(array, mid + 1, end);
    merge(array, begin, mid, end);
}


string mergeSort(int array[], int const begin, int const end)
{
	unsigned t0, t1;//inicializamos valores de tiempo
	t0=clock();

	mergeSortV( array, begin,  end);
    //hacemos calculo del tiempo que toma el algoritmo
	t1 = clock();
	//double time = (double(t1-t0)/CLOCKS_PER_SEC);
	//double time = 1000L*(double(t1-t0)/CLK_TCK);
    double time = (double(t1-t0)/CLK_TCK);
	std::ostringstream sstream9;
	sstream9 << time;
	string time_ = sstream9.str();
	cout << "Execution Time MergeSort" << end <<": "<< time_ << endl;
	return time_;
}

