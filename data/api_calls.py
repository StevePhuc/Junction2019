# Requires aiohttp
# Requires aiodns

import requests
import pandas as pd


def import_hypercell(starttime, stoptime):
    url = "https://api.hypr.cl/raw/"
    headers = {
        'x-api-key': "iQ0WKQlv3a7VqVSKG6BlE9IQ88bUYQws6UZLRs1B",
        'time_start': starttime,
        'time_stop': stoptime,
        'Accept': "*/*",
        'Cache-Control': "no-cache", 'Host': "api.hypr.cl",
        'Accept-Encoding': "gzip, deflate",
        'Content-Length': "0", 'Connection': "keep-alive",
        'cache-control': "no-cache"}
    response = requests.request("POST", url, headers=headers)
    df = pd.DataFrame(response.json())
    for k in df["raw"][0].keys():
        df[k] = df["raw"].apply(lambda x: x[k])
    df = df.drop("raw", axis=1)
    return df
