"""

"""
# 3rd party modules
from flask import make_response, abort

import pickle
import numpy as np
import sklearn
import json
from json import JSONEncoder

class NumpyArrayEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)

def run(insurance):
    """
    :param driver_quality:
    :param this_car_cost:
    :param prop_cost:
    :param other_car_cost:
    :return:
    """
    #print(driver_quality)
    #print(this_car_cost)
    #print(prop_cost)
    #print(other_car_cost)
    #print(insurance)
    try:
        modelo_salvo = pickle.load(open('modelo.sav', 'rb'))
        test_record = [[int(insurance['driver_quality']),\
                        int(insurance['this_car_cost']),\
                        int(insurance['prop_cost']),\
                        int(insurance['other_car_cost'])]]
        test_record = np.asarray(test_record)
        answer = modelo_salvo.predict(test_record)
        numpyData = {"response": answer}
        encodedNumpyData = json.dumps(numpyData, cls=NumpyArrayEncoder)
        return encodedNumpyData, 200
    except Exception as e:
        print(e)
        return make_response('Erro interno no servidor', 503)
