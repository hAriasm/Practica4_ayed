# counting sort algorithm

import sys
import os.path as op
import time
import json

sys.path.append(op.dirname(op.dirname(op.dirname(op.abspath(__file__)))))
workspace = op.dirname(op.dirname(op.dirname(op.abspath(__file__))))

from practice_1.python.utils import get_data_experiments_dict


# this implementation http://opendatastructures.org/ods-python/11_2_Counting_Sort_Radix_So.html

def count_sort(my_list=None):
    c = []
    # b = [0 for i in range(len(my_list))]
    for _ in range(max(my_list) + 1):
        c.append(0)

    for i in range(len(my_list)):
        c[my_list[i]] = c[my_list[i]] + 1

    # for j in range(1, len(my_list) + 1):
    #     c[my_list[j]] = c[my_list[j]] + 1

    for i in range(1, max(my_list) + 1):
        c[i] = c[i] + c[i - 1]

    b = [0 for i in range(len(my_list))]
    for i in range(len(my_list)):
        jp = len(my_list) - 1 - i
        c[my_list[jp]] = c[my_list[jp]] - 1
        b[c[my_list[jp]]] = my_list[jp]

    return b


# single evaluation

ll = [3, 1, 8, 9, 11, 8, 343]
print(max(ll))
print(count_sort(ll))

## WHOLE EVALUATION

tests_dict = get_data_experiments_dict()

evaluation_result_json = "./practice_1/python/evaluation_time.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
print(evaluation_results_dict)

evaluation_results_dict["counting_sort"] = {}
for exp in tests_dict.keys():
    evaluation_list = tests_dict[exp]
    start_time = time.time()
    count_sort(evaluation_list)
    execution_time_ms = (time.time() - start_time) * 1000
    print(f"Experiment: {exp}, execution_time {execution_time_ms} miliseconds")
    evaluation_results_dict["counting_sort"][exp] = execution_time_ms

with open(evaluation_result_json, 'w') as outfile:
    json.dump(evaluation_results_dict, outfile)
