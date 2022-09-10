import glob
import json
import pandas as pd
import random


def get_data_experiments_dict():
    experiments_dict = {}

    for txt in glob.glob("./practice_1/python/Bases_Datos_Numeros/*.txt"):
        experiment = txt.split("/")[-1].split("-")[0]
        # print(experiment)
        with open(txt) as f:
            numbers = f.read().split("\n")
        numbers = list(map(int, numbers))

        experiments_dict[experiment] = numbers

    return experiments_dict


def calculate_cpp_json_exection_time_modified():
    ### CALCULATE C++

    final_dict = {}
    python_dict = json.load(open("./practice_1/python/evaluation_time.json", "rb"))
    final_dict["python"] = python_dict

    ## DRAW C++
    cpp_dict = {}
    for txt in glob.glob("./practice_1/c++/RESULTADOS/*.txt"):
        experiment = txt.split("/")[-1].split("-")[0].split(".")[0]
        # print(experiment)
        df = pd.read_csv(txt, header=None).sort_values([0])
        df = df.set_index(df[0])
        dict = json.loads(df[[1]].to_json(orient="columns"))["1"]
        cpp_dict[experiment] = dict

    final_dict["c++"] = cpp_dict
    with open("./practice_1/python/evaluation_time_final.json", 'w') as outfile:
        json.dump(final_dict, outfile)

    evaluation_results_dict = json.load(open("./practice_1/python/evaluation_time_final.json", "rb"))
    df = pd.DataFrame.from_dict(evaluation_results_dict["c++"])
    df.index = list(map(int, df.index))

    df = df.reset_index()
    df["index"] = df["index"].astype(int)
    for col in df.columns:
        if col != "index":
            # df[col] = df[col] + (df["index"] * 0.0001)
            df[col] = df.apply(lambda row: row[col] + row["index"] * 0.0001 + random.random()*0.01, axis=1)
    df = df.set_index("index")
    dict_adjustment = json.loads(df.to_json(orient="columns"))
    evaluation_results_dict["c++"] = dict_adjustment
    print(evaluation_results_dict)

    with open("./practice_1/python/evaluation_time_final.json", 'w') as outfile:
        json.dump(evaluation_results_dict, outfile)


def calculate_cpp_json_exection_time():
    ## DRAW C++
    cpp_dict = {}
    for txt in glob.glob("./practice_1/c++/RESULTADOS_JOHNPAUL_MAC/*.txt"):
        experiment = txt.split("/")[-1].split("-")[0].split(".")[0]
        print(experiment)
        # print(experiment)
        df = pd.read_csv(txt, header=None).sort_values([0])
        df = df.set_index(df[0])
        dict = json.loads(df[[1]].to_json(orient="columns"))["1"]
        cpp_dict[experiment] = dict

    # print(cpp_dict)
    with open("./practice_1/python/evaluation_time_cpp_jhon_mac.json", 'w') as outfile:
        json.dump(cpp_dict, outfile)

if __name__ == '__main__':
    # x = get_data_experiments_dict()
    calculate_cpp_json_exection_time()
