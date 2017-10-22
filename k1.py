
#!flask/bin/python
from flask import Flask,jsonify
import requests

from requests_futures.sessions import FuturesSession

def prime_number_lambda(maxi, loops , times, mb  , isConcurrent , last4  ) :
    headers = {
        'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJ"+last4,   #Vvuc
    }
    re_arr  = []
    session = FuturesSession(max_workers=100)
    print (session)


    rst =  'https://nx106w1z0e.execute-api.us-west-2.amazonaws.com/prod/'+ str(mb) +'mb'+ '?max='+str(maxi)+'&loops='+ str(loops)


    print('request lambda url  : {0}'.format(rst))
    if  isConcurrent == "off":
        print (" non Concurrent  mode")
        for i in range (times) :

            resp = requests.get(rst, headers = headers)
            rt = resp.json()
            if resp.status_code != 200 :

                return resp.status_code
            else :

                re_arr.append (rt)
        print (re_arr)
        return re_arr

    else :
        print (" Concurrent  mode")
        sgl = []
        for i in range (times) :

            sgl.append(session.get(rst,headers = headers))

        for  i  in range  (times )  :
            resp  = sgl[i].result()

            if resp.status_code != 200 :

                return resp.status_code
            else :

                re_arr.append (resp.json())

        print (re_arr)
        return re_arr



app = Flask(__name__)


from flask import request
@app.route('/post', methods=['POST'])
def post():
    maxi =request.json['maxi']
    loops = request.json['loops']
    times = request.json['times']
    mb =  request.json['mb']
    conc =  request.json['conc']
    last4 =  request.json['l4']
    objects = prime_number_lambda(maxi, loops,int(times) ,mb , conc  , last4 )

    if objects == 403  :
        return jsonify( {'json' :objects}), 403
    else :
        return jsonify( {'json' :objects}), 201


from flask import render_template

@app.route('/k1/')

def render_lambda():
    return render_template('k1.html')





if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
