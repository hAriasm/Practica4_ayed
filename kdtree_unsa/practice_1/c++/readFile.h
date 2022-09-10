
#include <math.h>
#include <vector>
#include <errno.h>
#include <sstream>
#include <stdio.h>
#include <string>
#include <stdlib.h>
#include <fstream>
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;
int readFiles(int size){
	stringstream ss;
	ss <<size;
	string nameFile =ss.str() + "-numeros.txt";
	cout<<"nameFile: " << nameFile << " ";
	ifstream file(nameFile.c_str());
	string linea;
	char buffer[10];
	int count=0;
	
	
	if(size==100){
		arrayData100 = new int[size];
		while (getline(file, linea)) {
			arrayData100[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==500){
		arrayData500 = new int[size];
		while (getline(file, linea)) {
			arrayData500[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==1000){
		arrayData1000 = new int[size];
		while (getline(file, linea)) {
			arrayData1000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==2000){
		arrayData2000 = new int[size];
		while (getline(file, linea)) {
			arrayData2000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==3000){
		arrayData3000 = new int[size];
		while (getline(file, linea)) {
			arrayData3000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==4000){
		arrayData4000 = new int[size];
		while (getline(file, linea)) {
			arrayData4000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==5000){
		arrayData5000 = new int[size];
		while (getline(file, linea)) {
			arrayData5000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==6000){
		arrayData6000 = new int[size];
		while (getline(file, linea)) {
			arrayData6000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==7000){
		arrayData7000 = new int[size];
		while (getline(file, linea)) {
			arrayData7000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==8000){
		arrayData8000 = new int[size];
		while (getline(file, linea)) {
			arrayData8000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==9000){
		arrayData9000 = new int[size];
		while (getline(file, linea)) {
			arrayData9000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==10000){
		arrayData10000 = new int[size];
		while (getline(file, linea)) {
			arrayData10000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==20000){
		arrayData20000 = new int[size];
		while (getline(file, linea)) {
			arrayData20000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==30000){
		arrayData30000 = new int[size];
		while (getline(file, linea)) {
			arrayData30000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==40000){
		arrayData40000 = new int[size];
		while (getline(file, linea)) {
			arrayData40000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==50000){
		arrayData50000 = new int[size];
		while (getline(file, linea)) {
			arrayData50000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==60000){
		arrayData60000 = new int[size];
		while (getline(file, linea)) {
			arrayData60000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==70000){
		arrayData70000 = new int[size];
		while (getline(file, linea)) {
			arrayData70000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==80000){
		arrayData80000 = new int[size];
		while (getline(file, linea)) {
			arrayData80000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==90000){
		arrayData90000 = new int[size];
		while (getline(file, linea)) {
			arrayData90000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}else if(size==100000){
		arrayData100000 = new int[size];
		while (getline(file, linea)) {
			arrayData100000[count]=atoi(strcpy(buffer, linea.c_str()));
			//cout<<arrayData100[count]<<endl;
		    count++;
		}
		//cout  << endl;
		cout << "size: " << count << endl;
		return count;
	}
	return 0;
}


