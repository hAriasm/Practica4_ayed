# -*- coding: utf-8 -*-
"""
Created on Mon Jun 21 22:36:14 2021

@author: User
"""

import pandas as pd
import json
import matplotlib.pyplot as plt

evaluation_result_json = "evaluation_time.json"
evaluation_results_dict = json.load(open(evaluation_result_json, "rb"))
# print(evaluation_results_dict)

df = pd.DataFrame.from_dict(evaluation_results_dict)
df.index = list(map(int, df.index))
df = df.sort_index()


## DRAW COMPARATION
print(df)
ax = df["counting_sort"].plot(logy=True, sort_columns=True, legend=True)
ax.set_xlabel("# Numbers to sort")
ax.set_ylabel("MiliSeconds - Execution Time")
plt.show()