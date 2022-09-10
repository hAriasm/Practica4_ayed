#include <stdio.h>      
#include <stdlib.h>     
#include <time.h>       
#include <iostream>
#include <fstream>
#include<string>  
using namespace std;
int main ()
{
	int listaCantidades[]={100,500,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,20000,30000,40000,50000,60000,70000,80000,90000,100000};
 	int cant=100;
  	int randomGenerate; 	
	
	
	int cantidadLista=sizeof listaCantidades/sizeof listaCantidades[0];
	cout<<"cantidadLista "<< cantidadLista<<endl;
	
	for(int i=0;i<cantidadLista;i+=1)
    {
	std::string cantidad = std::to_string(listaCantidades[i]);
	ofstream outfile (cantidad+"-numeros.txt");
	srand (time(NULL));// initialize random seed: 
	int c=0;
    while(c<listaCantidades[i])
	{
		randomGenerate = rand() % listaCantidades[i] + 1;// generate  random number 
		//cout<<"numero: "<< c<<" "<<randomGenerate<<endl;	
		outfile << randomGenerate << std::endl;	
		c++;	
	}
	outfile.close();
    } 
  return 0;
}
