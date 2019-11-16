import json
import csv
from random import seed, random
from datetime import datetime, timedelta

class CorrelationMatrix:

    def __init__(self):
        seed(1)
        self.matrix = {}
        self.time_keys = self.get_time_keys()
        for time in self.time_keys:
            file_name = f'correlations_{time}.csv'
            self.matrix[time] = self._create_matrix(file_name)

    def _create_matrix(self, file_name):
        matrix = {}

        with open(f'../data/{file_name}', mode='r') as csv_file:
            reader = csv.reader(csv_file, delimiter=',')
            stations = []
            for row_index, row in enumerate(reader):
                if not row_index:
                    stations = row
                else:
                    matrix[row[0]] = {}
                    for column_index, value in enumerate(row):
                        if column_index:
                            matrix[row[0]][stations[column_index]] = value
        return matrix

    def find_correlations(self, base_station, time_frame):
        return self.matrix[time_frame][base_station]

    def get_time_keys(self):
        return ['m', 'n', 'e']

    def get_station_keys(self, time):
        return [key for key in self.matrix[time]]
