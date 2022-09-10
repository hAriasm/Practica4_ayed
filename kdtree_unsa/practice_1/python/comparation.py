import sys
import os.path as op
import time
import json
import numpy as np

sys.path.append(op.dirname(op.dirname(op.dirname(op.abspath(__file__)))))
workspace = op.dirname(op.dirname(op.dirname(op.abspath(__file__))))

from practice_1.python.utils import calculate_cpp_json_exection_time
import pandas as pd
import json
import matplotlib.pyplot as plt
import glob

# calculate_cpp_json_exection_time()

evaluation_result_json = "./practice_1/python/evaluation_time_cpp_jhon_mac.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
df = pd.DataFrame.from_dict(evaluation_results_dict)

# df_python = pd.DataFrame.from_dict(evaluation_results_dict["python"])
# df_python.index = list(map(int, df_python.index))
# df_python = df_python.sort_index()
# print(df_python)
#
# df_cpp = pd.DataFrame.from_dict(evaluation_results_dict["c++"])
# df_cpp.index = list(map(int, df_cpp.index))
# df_cpp = df_cpp.sort_index()
# print(df_cpp)
#
# # algo_l = ["bubble_sort"]
# algo_l = list(evaluation_results_dict["python"].keys())
# df_algo = pd.DataFrame()
# for algo in algo_l:
#     df_algo[algo + "_python"] = df_python[algo]
#     df_algo[algo + "_cpp"] = df_cpp[algo]
#     print(df_algo)
#     ax = df_algo.plot(logy=True, sort_columns=True, legend=True)
#     ax.set_xlabel("# Numbers to sort")
#     ax.set_ylabel("MiliSeconds - Execution Time")
#     plt.show()
#     df_algo = pd.DataFrame()


# DRAW COMPARATION

ax = df.plot(logy=True, sort_columns=True, legend=True)
ax.set_xlabel("# Numbers to sort")
ax.set_ylabel("MiliSeconds - Execution Time")
plt.show()
