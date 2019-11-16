import json
from random import seed, random
from datetime import datetime, timedelta

class CorrelationMatrix:

    def __init__(self):
        seed(1)
        self.matrix = self._create_matrix()

    def _create_matrix(self):
        data = {}
        now = datetime.now()
        for i in range (25):
            data[f'station_{i}'] = {}
            for j in range(25):
                data[f'station_{i}'][f'station_{j}'] = {}
                for k in range(10):
                    date = _to_date_string_format(now + timedelta(hours=k))
                    data[f'station_{i}'][f'station_{j}'][date] = random()
        return data

    def find_in_range(self, station_from, station_to, start, finish):
        values_range = {}
        data = self.matrix[station_from][station_to]
        start_date = _to_date_date_format(start)
        finish_date = _to_date_date_format(finish)

        dates = data.keys()
        keys_to_return = []
        for item in dates:
            item_date = _to_date_date_format(item)
            if start_date < item_date and finish_date > item_date:
                keys_to_return.append(item)

        for key in keys_to_return:
            values_range[key] = data[key]
        return values_range


def _to_date_string_format(stamp):
    return stamp.strftime(date_format)

def _to_date_date_format(stamp):
    return datetime.strptime(stamp, date_format)

date_format = '%Y-%m-%d %H:%M:%S'
