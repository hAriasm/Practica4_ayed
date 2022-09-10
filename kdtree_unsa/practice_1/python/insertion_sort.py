# insertion sort algorithm

import sys
import os.path as op
import time
import json

sys.path.append(op.dirname(op.dirname(op.dirname(op.abspath(__file__)))))
workspace = op.dirname(op.dirname(op.dirname(op.abspath(__file__))))

from practice_1.python.utils import get_data_experiments_dict


# this implementation https://www.chegg.com/homework-help/questions-and-answers/1-java-implement-method-sort-given-array-using-insertion-sort-algorithm-pseudocode-given---q26224054

def insertion_sort(my_list):
    for j in range(1, len(my_list)):
        key = my_list[j]
        i = j - 1
        while i >= 0 and my_list[i] > key:
            my_list[i + 1] = my_list[i]
            i = i - 1
        my_list[i + 1] = key

    return my_list


# evaluate

ll = [3, 1, 8, 9, 11, 8, 343, 17]
print(insertion_sort(ll))

## WHOLE EVALUATION

tests_dict = get_data_experiments_dict()

evaluation_result_json = "./practice_1/python/evaluation_time.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
print(evaluation_results_dict)

evaluation_results_dict["insertion_sort"] = {}
for exp in tests_dict.keys():
    evaluation_list = tests_dict[exp]
    start_time = time.time()
    insertion_sort(evaluation_list)
    execution_time_ms = (time.time() - start_time) * 1000
    print(f"Experiment: {exp}, execution_time {execution_time_ms} miliseconds")
    evaluation_results_dict["insertion_sort"][exp] = execution_time_ms

with open(evaluation_result_json, 'w') as outfile:
    json.dump(evaluation_results_dict, outfile)
