# -*- coding: utf-8 -*-
"""
Created on Mon Jun 21 22:29:41 2021

@author: User
"""

import sys
import glob
import json
import re
from timeit import default_timer


def selection_sort(A):
    # Traverse through all array elements
    for i in range(len(A)):

        # Find the minimum element in remaining
        # unsorted array
        min_idx = i
        for j in range(i + 1, len(A)):
            if A[min_idx] > A[j]:
                min_idx = j

        # Swap the found minimum element with
        # the first element       
        A[i], A[min_idx] = A[min_idx], A[i]

    # Driver code to test above
    listado_resultado = []
    for i in range(len(A)):
        listado_resultado.append(A[i])
    return listado_resultado


def orden_selection_sort(listado):
    inicio = default_timer()
    result2 = selection_sort(listado)
    fin = default_timer()
    return (fin - inicio) * 1000


lista_archivos_prueba = [f for f in glob.glob("./practice_1/python/Bases_Datos_Numeros/*.txt")]

evaluation_result_json = "./practice_1/python/evaluation_time.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
# print(evaluation_results_dict)

evaluation_results_dict["selection_sort"] = {}

for i in lista_archivos_prueba:
    my_file = open(i, "r")
    content_list = my_file.readlines()
    listas = []
    for j in content_list:
        listas.append(int(j))
    # print(i)  
    Calculado = orden_selection_sort(listas)
    # print(i)
    valor_actual = re.findall('\d+', i)
    print(valor_actual[1])
    print(Calculado)
    evaluation_results_dict["selection_sort"][str(valor_actual[1])] = Calculado
    print("********")

with open(evaluation_result_json, 'w') as outfile:
    json.dump(evaluation_results_dict, outfile)
