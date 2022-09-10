# -*- coding: utf-8 -*-
"""
Created on Fri Jun 18 21:59:50 2021

@author: User
"""

import glob
import json
import re
from timeit import default_timer


def Bubble_Sort(arr):
    inicio = default_timer()
    band = False
    while band == False:
        band = True
        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                aux = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = aux
                band = False

    fin = default_timer()
    # print(fin-inicio)
    return (fin - inicio) * 1000


lista_archivos_prueba = [f for f in glob.glob("./practice_1/python/Bases_Datos_Numeros/*.txt")]

evaluation_result_json = "./practice_1/python/evaluation_time.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
# print(evaluation_results_dict)

evaluation_results_dict["Bubble_sort"] = {}

for i in lista_archivos_prueba:
    my_file = open(i, "r")
    content_list = my_file.readlines()
    listas = []
    for j in content_list:
        listas.append(int(j))
    # print(i)  
    Calculado = Bubble_Sort(listas)
    # print(i)
    valor_actual = re.findall('\d+', i)
    print(valor_actual[1])
    print(Calculado)
    evaluation_results_dict["bubble_sort"][str(valor_actual[1])] = Calculado
    print("********")

with open(evaluation_result_json, 'w') as outfile:
    json.dump(evaluation_results_dict, outfile)

# "bubble_sort": {
#     "100": 2.603700000001652,
#     "1000": 347.3988999999946,