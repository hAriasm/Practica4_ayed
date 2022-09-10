# -*- coding: utf-8 -*-
"""
Created on Mon Jun 21 22:22:57 2021

@author: User
"""
import glob
import json
import re
from timeit import default_timer


def mergesort(A):
    if (len(A) <= 1):
        return A;

    izq = [];
    der = [];
    medio = int(len(A) / 2);

    for i in range(0, medio):
        izq.append(A[i]);
    for i in range(medio, len(A)):
        der.append(A[i]);

    izq = mergesort(izq);
    der = mergesort(der);

    resultado = merge(izq, der)

    return resultado


def merge(izq, der):
    arreglo = [];
    i = 0;
    j = 0;
    while (i < len(izq) and j < len(der)):
        if (izq[i] <= der[j]):
            arreglo.append(izq[i]);
            i = i + 1;
        else:
            arreglo.append(der[j]);
            j = j + 1;
    while (i < len(izq)):
        arreglo.append(izq[i]);
        i = i + 1;
    while (j < len(der)):
        arreglo.append(der[j]);
        j = j + 1;

    return arreglo;


def orden_merge_sort(listado):
    inicio = default_timer()
    result2 = mergesort(listado)
    fin = default_timer()
    return (fin - inicio) * 1000


lista_archivos_prueba = [f for f in glob.glob("./practice_1/python/Bases_Datos_Numeros/*.txt")]

evaluation_result_json = "./practice_1/python/evaluation_time.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
# print(evaluation_results_dict)

evaluation_results_dict["mergesort"] = {}

for i in lista_archivos_prueba:
    my_file = open(i, "r")
    content_list = my_file.readlines()
    listas = []
    for j in content_list:
        listas.append(int(j))
    # print(i)  
    Calculado = orden_merge_sort(listas)
    # print(i)
    valor_actual = re.findall('\d+', i)
    print(valor_actual[1])
    print(Calculado)
    evaluation_results_dict["merge_sort"][str(valor_actual[1])] = Calculado
    print("********")

with open(evaluation_result_json, 'w') as outfile:
    json.dump(evaluation_results_dict, outfile)
