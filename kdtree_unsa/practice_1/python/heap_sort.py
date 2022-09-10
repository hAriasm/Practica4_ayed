# -*- coding: utf-8 -*-
"""
Created on Mon Jun 21 22:10:18 2021

@author: User
"""

import glob
import json
import re
from timeit import default_timer
from heapq import heappop, heappush


def heap_sort(array):
    inicio = default_timer()
    heap = []
    for element in array:
        heappush(heap, element)

    ordered = []

    # While we have elements left in the heap
    while heap:
        ordered.append(heappop(heap))

    fin = default_timer()
    # print(fin-inicio)
    return (fin - inicio) * 1000


lista_archivos_prueba = [f for f in glob.glob("./practice_1/python/Bases_Datos_Numeros/*.txt")]

evaluation_result_json = "./practice_1/python/evaluation_time.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
# print(evaluation_results_dict)

evaluation_results_dict["heap_sort"] = {}

for i in lista_archivos_prueba:
    my_file = open(i, "r")
    content_list = my_file.readlines()
    listas = []
    for j in content_list:
        listas.append(int(j))
    # print(i)  
    Calculado = heap_sort(listas)
    # print(i)
    valor_actual = re.findall('\d+', i)
    print(valor_actual[1])
    print(Calculado)
    evaluation_results_dict["heap_sort"][str(valor_actual[1])] = Calculado
    print("********")

with open(evaluation_result_json, 'w') as outfile:
    json.dump(evaluation_results_dict, outfile)
