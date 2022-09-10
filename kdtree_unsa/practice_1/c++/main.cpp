
#define	CLOCKS_PER_SEC	((clock_t)1000)
#define	CLK_TCK		CLOCKS_PER_SEC

#include<math.h>
#include <vector>
#include <errno.h>
#include <sstream>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <string>
#include <iostream>
#include <sstream>
#include <fstream>
int sizeFile100, sizeFile500,sizeFile1000,sizeFile2000,sizeFile3000,sizeFile4000,sizeFile5000,sizeFile6000,sizeFile7000,sizeFile8000,sizeFile9000,
 sizeFile10000, sizeFile20000,sizeFile30000,sizeFile40000,sizeFile50000, sizeFile60000, sizeFile70000,sizeFile80000,sizeFile90000,sizeFile100000;
 
int *arrayData100,*arrayData500,*arrayData1000,*arrayData2000,*arrayData3000,*arrayData4000,*arrayData5000,*arrayData6000,*arrayData7000,*arrayData8000,*arrayData9000,
 *arrayData10000,*arrayData20000,*arrayData30000,*arrayData40000,*arrayData50000,*arrayData60000,*arrayData70000,*arrayData80000,*arrayData90000,*arrayData100000; 

#include "readFile.h"
#include "bubbleSort.h"
#include "countingSort.h"
#include "heapSort.h"
#include "insertionSort.h"
#include "mergeSort.h"
#include "quickSort.h"
#include "selectionSort.h"

using namespace std;
void menuAlgorithm();
void menu(void);
void readTotalFiles();
void callOfstreamBubbleSort();
void callOfstreamCountingSort();
void callOfstreamHeapSort();
void callOfstreamInsertionSort();
void callOfstreamMergeSort();
void callOfstreamQuicksort();
void callOfstreamSelectionSort();
void callpila();

void readTotalFiles(){
	sizeFile100=readFiles(100);
	sizeFile500=readFiles(500);
	sizeFile1000=readFiles(1000);
	sizeFile2000=readFiles(2000);
	sizeFile3000=readFiles(3000);
	sizeFile4000=readFiles(4000);
	sizeFile5000=readFiles(5000);
	sizeFile6000=readFiles(6000);
	sizeFile7000=readFiles(7000);
	sizeFile8000=readFiles(8000);
	sizeFile9000=readFiles(9000);
	sizeFile10000=readFiles(10000);
	sizeFile20000=readFiles(20000);
	sizeFile30000=readFiles(30000);
	sizeFile40000=readFiles(40000);
	sizeFile50000=readFiles(50000);
	sizeFile60000=readFiles(60000);
	sizeFile70000=readFiles(70000);
	sizeFile80000=readFiles(80000);
	sizeFile90000=readFiles(90000);
	sizeFile100000=readFiles(100000);
}
int main(){
	readTotalFiles();
	menuAlgorithm();
}

void menuAlgorithm(){
	int  opc=0;
    printf("================================\n");
    printf("select option\n");
    printf("================================\n");
    printf("1)bubbleSort \n");
    printf("2)countingSort\n");
    printf("3)heapSort\n");
    printf("4)insertionSort\n");
    printf("5)mergeSort\n");
    printf("6)quickSort\n");
    printf("7)selectionSort\n");
    printf("8)stack\n");
    printf("=================================\n");
    scanf("%d",&opc);
    printf("=================================\n");
    switch(opc){
    case 1: //buuble sort
    	try {
    		callOfstreamBubbleSort();
    		menuAlgorithm();
    	}catch (...) {cout << "Error";}
    break;  
    case 2: // counting sort
    	try {
    		callOfstreamCountingSort();
    		menuAlgorithm();
		}catch (...) {cout << "Error";}
    break;
    case 3:// heap sort
    	try {
    		callOfstreamHeapSort();
    		menuAlgorithm();
    	}catch (...) {cout << "Error";}
    break;
    case 4: //insertion sort
    	try {
    		callOfstreamInsertionSort();
    		menuAlgorithm();
    	}catch (...) {cout << "Error";}
    break;
    case 5: //merge sort
    	try {
    		callOfstreamMergeSort();
    		menuAlgorithm();
    	}catch (...) {cout << "Error";}
    break;
    case 6: //quick sort
    	try {
    		callOfstreamQuicksort();
    		menuAlgorithm();
    	}catch (...) {
		  cout << "Error";
		}
    break;
    case 7: //Selection sort
    	try {
    		callOfstreamSelectionSort();
    		menuAlgorithm();
    	}catch (...) {
		  cout << "Error";
		}
    break;
	   case 8: //pila
    	try {
    		callpila();
    		menuAlgorithm();
    	}catch (...) {
		  cout << "Error";
		}
    break;
    }
}
class Pila {
private:
    class Nodo {
		public:
			int info;
			Nodo *sig;
    };
    Nodo *raiz;
public:
    Pila();
    ~Pila();
    void insertar(int x);
    int extraer();
    void imprimir();
};
Pila::Pila(){raiz = NULL;}
void Pila::insertar(int x){
    Nodo *nuevo;
    nuevo = new Nodo();
    nuevo->info = x;
    if (raiz == NULL){
        raiz = nuevo;
        nuevo->sig = NULL;
    }else{
        nuevo->sig = raiz;
        raiz = nuevo;
    }
}
void Pila::imprimir(){
    Nodo *reco = raiz;
    cout << "Listado de todos los elementos de la pila.\n";
    while (reco != NULL){
        cout << reco->info << "-";
        reco = reco->sig;
    }
    cout << "\n";
}
int Pila::extraer(){
    if (raiz != NULL){
        int informacion = raiz->info;
        Nodo *bor = raiz;
        raiz = raiz->sig;
        delete bor;
        return informacion;
    }else{
        return -1;
    }
}
Pila::~Pila(){
    Nodo *reco = raiz;
    Nodo *bor;
    while (reco != NULL){
        bor = reco;
        reco = reco->sig;
        delete bor;
    }
}
void callpila(){
	Pila *pila1;
    pila1= new Pila();
    pila1->insertar(10);
    pila1->insertar(40);
    pila1->insertar(3);
	pila1->insertar(5);
	pila1->insertar(9);
    pila1->imprimir();
    cout<<"Extraemos de la pila:" <<pila1->extraer()<<"\n";
    pila1->imprimir();
    delete pila1;
}
void callOfstreamBubbleSort(){
	std::ofstream outfile ("bubble_sort.txt");
	string tiempo=bubbleSort(arrayData100,sizeFile100);
	outfile << "100,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData500,sizeFile500);
	outfile << "500,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData1000,sizeFile1000);
	outfile << "1000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData2000,sizeFile2000);
	outfile << "2000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData3000,sizeFile3000);
	outfile << "3000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData4000,sizeFile4000);
	outfile << "4000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData5000,sizeFile5000);
	outfile << "5000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData6000,sizeFile6000);
	outfile << "6000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData7000,sizeFile7000);
	outfile << "7000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData8000,sizeFile8000);
	outfile << "8000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData9000,sizeFile9000);
	outfile << "9000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData10000,sizeFile10000);
	outfile << "10000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData20000,sizeFile20000);
	outfile << "20000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData30000,sizeFile30000);
	outfile << "30000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData40000,sizeFile40000);
	outfile << "40000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData50000,sizeFile50000);
	outfile << "50000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData60000,sizeFile60000);
	outfile << "60000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData70000,sizeFile70000);
	outfile << "70000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData80000,sizeFile80000);
	outfile << "80000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData90000,sizeFile90000);
	outfile << "90000,"+tiempo<< std::endl;
	tiempo=bubbleSort(arrayData100000,sizeFile100000);
	outfile << "100000,"+tiempo<< std::endl;
	outfile.close();
}
void callOfstreamCountingSort(){
	std::ofstream outfile2 ("counting_sort.txt");
	string tiempo=countingSort(arrayData100,sizeFile100);
	outfile2 << "100,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData500,sizeFile500);
	outfile2 << "500,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData1000,sizeFile1000);
	outfile2 << "1000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData2000,sizeFile2000);
	outfile2 << "2000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData3000,sizeFile3000);
	outfile2 << "3000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData4000,sizeFile4000);
	outfile2 << "4000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData5000,sizeFile5000);
	outfile2 << "5000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData6000,sizeFile6000);
	outfile2 << "6000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData7000,sizeFile7000);
	outfile2 << "7000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData8000,sizeFile8000);
	outfile2 << "8000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData9000,sizeFile9000);
	outfile2 << "9000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData10000,sizeFile10000);
	outfile2 << "10000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData20000,sizeFile20000);
	outfile2 << "20000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData30000,sizeFile30000);
	outfile2 << "30000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData40000,sizeFile40000);
	outfile2 << "40000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData50000,sizeFile50000);
	outfile2 << "50000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData60000,sizeFile60000);
	outfile2 << "60000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData70000,sizeFile70000);
	outfile2 << "70000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData80000,sizeFile80000);
	outfile2 << "80000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData90000,sizeFile90000);
	outfile2 << "90000,"+tiempo<< std::endl;
	tiempo=countingSort(arrayData100000,sizeFile100000);
	outfile2 << "100000,"+tiempo<< std::endl;
	outfile2.close();
}
void callOfstreamHeapSort(){
	std::ofstream outfile ("heap_sort.txt");
	string tiempo=heapSort(arrayData100,sizeFile100);
	outfile << "100,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData500,sizeFile500);
	outfile << "500,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData1000,sizeFile1000);
	outfile << "1000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData2000,sizeFile2000);
	outfile << "2000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData3000,sizeFile3000);
	outfile << "3000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData4000,sizeFile4000);
	outfile << "4000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData5000,sizeFile5000);
	outfile << "5000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData6000,sizeFile6000);
	outfile << "6000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData7000,sizeFile7000);
	outfile << "7000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData8000,sizeFile8000);
	outfile << "8000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData9000,sizeFile9000);
	outfile << "9000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData10000,sizeFile10000);
	outfile << "10000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData20000,sizeFile20000);
	outfile << "20000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData30000,sizeFile30000);
	outfile << "30000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData40000,sizeFile40000);
	outfile << "40000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData50000,sizeFile50000);
	outfile << "50000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData60000,sizeFile60000);
	outfile << "60000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData70000,sizeFile70000);
	outfile << "70000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData80000,sizeFile80000);
	outfile << "80000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData90000,sizeFile90000);
	outfile << "90000,"+tiempo<< std::endl;
	tiempo=heapSort(arrayData100000,sizeFile100000);
	outfile << "100000,"+tiempo<< std::endl;
	outfile.close();
}
void callOfstreamInsertionSort(){
	std::ofstream outfile3 ("insertion_sort.txt");
	string tiempo=insertionSort(arrayData100,sizeFile100);
	outfile3 << "100,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData500,sizeFile500);
	outfile3 << "500,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData1000,sizeFile1000);
	outfile3 << "1000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData2000,sizeFile2000);
	outfile3 << "2000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData3000,sizeFile3000);
	outfile3 << "3000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData4000,sizeFile4000);
	outfile3 << "4000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData5000,sizeFile5000);
	outfile3 << "5000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData6000,sizeFile6000);
	outfile3 << "6000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData7000,sizeFile7000);
	outfile3 << "7000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData8000,sizeFile8000);
	outfile3 << "8000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData9000,sizeFile9000);
	outfile3 << "9000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData10000,sizeFile10000);
	outfile3 << "10000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData20000,sizeFile20000);
	outfile3 << "20000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData30000,sizeFile30000);
	outfile3 << "30000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData40000,sizeFile40000);
	outfile3 << "40000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData50000,sizeFile50000);
	outfile3 << "50000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData60000,sizeFile60000);
	outfile3 << "60000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData70000,sizeFile70000);
	outfile3 << "70000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData80000,sizeFile80000);
	outfile3 << "80000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData90000,sizeFile90000);
	outfile3 << "90000,"+tiempo<< std::endl;
	tiempo=insertionSort(arrayData100000,sizeFile100000);
	outfile3 << "100000,"+tiempo<< std::endl;
	outfile3.close();
}
void callOfstreamMergeSort(){
	std::ofstream outfile ("merge_sort.txt");
	string tiempo=mergeSort(arrayData100,0,sizeFile100);
	outfile << "100,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData500,0,sizeFile500);
	outfile << "500,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData1000,0,sizeFile1000);
	outfile << "1000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData2000,0,sizeFile2000);
	outfile << "2000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData3000,0,sizeFile3000);
	outfile << "3000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData4000,0,sizeFile4000);
	outfile << "4000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData5000,0,sizeFile5000);
	outfile << "5000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData6000,0,sizeFile6000);
	outfile << "6000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData7000,0,sizeFile7000);
	outfile << "7000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData8000,0,sizeFile8000);
	outfile << "8000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData9000,0,sizeFile9000);
	outfile << "9000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData10000,0,sizeFile10000);
	outfile << "10000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData20000,0,sizeFile20000);
	outfile << "20000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData30000,0,sizeFile30000);
	outfile << "30000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData40000,0,sizeFile40000);
	outfile << "40000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData50000,0,sizeFile50000);
	outfile << "50000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData60000,0,sizeFile60000);
	outfile << "60000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData70000,0,sizeFile70000);
	outfile << "70000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData80000,0,sizeFile80000);
	outfile << "80000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData90000,0,sizeFile90000);
	outfile << "90000,"+tiempo<< std::endl;
	tiempo=mergeSort(arrayData100000,0,sizeFile100000);
	outfile << "100000,"+tiempo<< std::endl;
	outfile.close();
}
void callOfstreamQuicksort(){
	unsigned t0, t1;
	double time;
	std::string tiempo ;
	std::ofstream outfile4 ("quick_sort.txt");	
	
	t0=clock();
		quicksort(arrayData100,0,sizeFile100-1);
	t1 = clock();
	//time = (double(t1-t0)/CLOCKS_PER_SEC);
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile100<< " Execution Time quickSort 100: "<< time << endl;
	std::ostringstream strs;
	strs << time; 
	outfile4 << "100,"+strs.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData500,0,sizeFile500-1);
	t1 = clock();
	//time = (double(t1-t0)/CLOCKS_PER_SEC);
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile500<< " Execution Time quickSort 500: "<< time << endl;
	std::ostringstream strs1;
	strs1 << time; 
	outfile4 << "500,"+strs1.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData1000,0,sizeFile1000-1);
	t1 = clock();
	//time = (double(t1-t0)/CLOCKS_PER_SEC);
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile1000<< " Execution Time quickSort 1000: "<< time << endl;
	std::ostringstream strs2;
	strs2 << time; 
	outfile4 << "1000,"+strs2.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData2000,0,sizeFile2000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile2000<< " Execution Time quickSort 2000: "<< time << endl;
	std::ostringstream strs3;
	strs3 << time; 
	outfile4 << "2000,"+strs3.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData3000,0,sizeFile3000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile3000<< " Execution Time quickSort 3000: "<< time << endl;
	std::ostringstream strs4;
	strs4 << time; 
	outfile4 << "3000,"+strs4.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData4000,0,sizeFile4000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile4000<< " Execution Time quickSort 4000: "<< time << endl;
	std::ostringstream strs5;
	strs5 << time; 
	outfile4 << "4000,"+strs5.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData5000,0,sizeFile5000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile5000<< " Execution Time quickSort 5000: "<< time << endl;
	std::ostringstream strs6;
	strs6 << time; 
	outfile4 << "5000,"+strs6.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData6000,0,sizeFile6000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile6000<< " Execution Time quickSort 6000: "<< time << endl;
	std::ostringstream strs7;
	strs7 << time; 
	outfile4 << "6000,"+strs7.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData7000,0,sizeFile7000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile7000<< " Execution Time quickSort 7000: "<< time << endl;
	std::ostringstream strs8;
	strs8 << time; 
	outfile4 << "7000,"+strs8.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData8000,0,sizeFile8000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile8000<< " Execution Time quickSort 8000: "<< time << endl;
	std::ostringstream strs9;
	strs9 << time; 
	outfile4 << "8000,"+strs9.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData9000,0,sizeFile9000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile9000<< " Execution Time quickSort 9000: "<< time << endl;
	std::ostringstream strs10;
	strs10 << time; 
	outfile4 << "9000,"+strs10.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData10000,0,sizeFile10000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile10000<< " Execution Time quickSort 10000: "<< time << endl;
	std::ostringstream strs11;
	strs11 << time; 
	outfile4 << "10000,"+strs11.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData20000,0,sizeFile20000-1);
	t1 = clock();
	time =(double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile20000<< " Execution Time quickSort 20000: "<< time << endl;
	std::ostringstream strs12;
	strs12 << time; 
	outfile4 << "20000,"+strs12.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData30000,0,sizeFile30000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile30000<< " Execution Time quickSort 30000: "<< time << endl;
	std::ostringstream strs13;
	strs13 << time; 
	outfile4 << "30000,"+strs13.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData40000,0,sizeFile40000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile40000<< " Execution Time quickSort 40000: "<< time << endl;
	std::ostringstream strs14;
	strs14 << time; 
	outfile4 << "40000,"+strs14.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData50000,0,sizeFile50000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);	
	cout << "Size: " <<sizeFile50000<< " Execution Time quickSort 50000: "<< time << endl;
	std::ostringstream strs15;
	strs15 << time; 
	outfile4 << "50000,"+strs15.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData60000,0,sizeFile60000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile60000<< " Execution Time quickSort 60000: "<< time << endl;
	std::ostringstream strs16;
	strs16 << time; 
	outfile4 << "60000,"+strs16.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData70000,0,sizeFile70000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile70000<< " Execution Time quickSort 70000: "<< time << endl;
	std::ostringstream strs17;
	strs17 << time; 
	outfile4 << "70000,"+strs17.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData80000,0,sizeFile80000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile80000<< " Execution Time quickSort 80000: "<< time << endl;
	std::ostringstream strs18;
	strs18 << time; 
	outfile4 << "80000,"+strs18.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData90000,0,sizeFile90000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile90000<< " Execution Time quickSort 90000: "<< time << endl;
	std::ostringstream strs19;
	strs19 << time; 
	outfile4 << "90000,"+strs19.str()<< std::endl;
	
	t0=clock();
		quicksort(arrayData100000,0,sizeFile100000-1);
	t1 = clock();
	time = (double(t1-t0)/CLK_TCK);
	cout << "Size: " <<sizeFile100000<< " Execution Time quickSort 100000: "<< time << endl;
	std::ostringstream strs20;
	strs20 << time; 
	outfile4 << "100000,"+strs20.str()<< std::endl;
	
	outfile4.close();
}
void callOfstreamSelectionSort(){
	std::ofstream outfile ("selection_sort.txt");
	string tiempo=selectionSort(arrayData100,sizeFile100);
	outfile << "100,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData500,sizeFile500);
	outfile << "500,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData1000,sizeFile1000);
	outfile << "1000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData2000,sizeFile2000);
	outfile << "2000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData3000,sizeFile3000);
	outfile << "3000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData4000,sizeFile4000);
	outfile << "4000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData5000,sizeFile5000);
	outfile << "5000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData6000,sizeFile6000);
	outfile << "6000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData7000,sizeFile7000);
	outfile << "7000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData8000,sizeFile8000);
	outfile << "8000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData9000,sizeFile9000);
	outfile << "9000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData10000,sizeFile10000);
	outfile << "10000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData20000,sizeFile20000);
	outfile << "20000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData30000,sizeFile30000);
	outfile << "30000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData40000,sizeFile40000);
	outfile << "40000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData50000,sizeFile50000);
	outfile << "50000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData60000,sizeFile60000);
	outfile << "60000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData70000,sizeFile70000);
	outfile << "70000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData80000,sizeFile80000);
	outfile << "80000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData90000,sizeFile90000);
	outfile << "90000,"+tiempo<< std::endl;
	tiempo=selectionSort(arrayData100000,sizeFile100000);
	outfile << "100000,"+tiempo<< std::endl;
	outfile.close();
}

