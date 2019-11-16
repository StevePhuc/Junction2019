from flask import Flask
from flask import request
from utils.correlation_matrix import CorrelationMatrix
from utils.routes_matrix import RoutesMatrix

app = Flask(__name__)

@app.route("/correlation_and_routes")
def correlation():
    correlation_matrix = CorrelationMatrix()
    routes_matrix = RoutesMatrix()

    base_station = request.args.get('serial')
    time_frame = request.args.get('time')

    station_keys = correlation_matrix.get_station_keys(time_frame)
    time_keys = routes_matrix.get_time_keys()

    if base_station and time_frame:
        if not base_station in station_keys:
            raise ValueError('no data for this identifier')
        if not time_frame in time_keys:
            raise ValueError('no data for this file')

        correlation_tuples = correlation_matrix.find_correlations(base_station, time_frame)
        routes_tuples = routes_matrix.find_routes(base_station, time_frame)

        keys_list = [key for key in correlation_tuples if key != base_station]

        return {
            'data': [{
                'serial': serial,
                'correlation': correlation_tuples[serial],
                'moveForward': routes_tuples[serial]['moveForward'],
                'moveBackwards': routes_tuples[serial]['moveBackward'],
                } for serial in keys_list],
            'base_station': base_station,
            'time_frame': time_frame
        }

if __name__ == "__main__":
    app.run(debug=True, host= '0.0.0.0')
