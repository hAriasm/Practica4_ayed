# quick sort algorithm

import sys
import os.path as op
import time
import json

sys.path.append(op.dirname(op.dirname(op.dirname(op.abspath(__file__)))))
workspace = op.dirname(op.dirname(op.dirname(op.abspath(__file__))))

from practice_1.python.utils import get_data_experiments_dict


# this implementation https://www.researchgate.net/figure/Quicksort-Pseudocode_fig21_2361704

def quick_sort(my_list, s, e):
    if (s < e):
        p = partitioning(my_list, s, e)

        quick_sort(my_list, s, p - 1)
        quick_sort(my_list, p + 1, e)


def partitioning(my_list, s, e):
    pvt_ix = s
    pivot = my_list[pvt_ix]

    while s < e:
        while s < len(my_list) and my_list[s] <= pivot:
            s = s + 1
        while my_list[e] > pivot:
            e = e - 1
        if s < e:
            my_list[s], my_list[e] = my_list[e], my_list[s]
    my_list[e], my_list[pvt_ix] = my_list[pvt_ix], my_list[e]

    return e


ll = [3, 1, 8, 9, 11, 8, 343, 17]
quick_sort(ll, 0, len(ll) - 1)

print(ll)

## WHOLE EVALUATION

tests_dict = get_data_experiments_dict()

evaluation_result_json = "./practice_1/python/evaluation_time.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
# print(evaluation_results_dict)

evaluation_results_dict["quick_sort"] = {}
for exp in tests_dict.keys():
    evaluation_list = tests_dict[exp]
    start_time = time.time()
    quick_sort(evaluation_list, 0, len(evaluation_list) - 1)
    execution_time_ms = (time.time() - start_time) * 1000
    print(f"Experiment: {exp}, execution_time {execution_time_ms} miliseconds")
    evaluation_results_dict["quick_sort"][exp] = execution_time_ms

with open(evaluation_result_json, 'w') as outfile:
    json.dump(evaluation_results_dict, outfile)
