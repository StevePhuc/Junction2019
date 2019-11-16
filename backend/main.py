from flask import Flask
from flask import request
from utils.correlation_matrix import CorrelationMatrix

app = Flask(__name__)

@app.route("/correlation")
def correlation():
    correlation = CorrelationMatrix()
    from_station = request.args.get('from')
    to_station = request.args.get('to')
    time_start = request.args.get('start')
    time_finish = request.args.get('finish')

    if from_station and to_station:
        if time_start and time_finish:
            return correlation.find_in_range(from_station, to_station, time_start, time_finish)
        return correlation.matrix[from_station][to_station]
    return correlation.matrix

if __name__ == "__main__":
    app.run(debug=True)
