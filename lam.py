
#!flask/bin/python
from __future__ import print_function
from flask import Flask,jsonify
import requests

from requests_futures.sessions import FuturesSession

log = open("xmb.log", "w")
def prime_number_lambda(maxi, loops , times, mb  , isConcurrent , last4  ) :
    headers = {
        'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJ"+last4,   #Vvuc
    }
    re_arr  = []
    session = FuturesSession(max_workers=100)


  #  log = open("xmb.log", "w")


    rst =  'https://nx106w1z0e.execute-api.us-west-2.amazonaws.com/prod/'+ str(mb) +'mb'+ '?max='+str(maxi)+'&loops='+ str(loops)
    print (rst)
    print (headers) 
    print (isConcurrent)
    print(' calling the aws  lambda api endpint  : {0}'.format(rst), file = log)
    if  isConcurrent == "off":
        print (" nonConcurrentmode")
        for i in range (times) :
            #rt = requests.get(rst).json()
            resp = requests.get(rst, headers = headers)
            rt = resp.json()
            if resp.status_code != 200 :
                #print ("resp.status_code")
                #print (rt)
                return resp.status_code
            else :
                #print (rt)
                re_arr.append (rt)
        print (re_arr)
        return re_arr

    else :
        print (" Concurrentmode")
        sgl = []
        for i in range (times) :
            ##sgl.append(session.get(rst))
            sgl.append(session.get(rst,headers = headers))

        for  i  in range  (times )  :
            resp  = sgl[i].result()
            #print('response one status: {0}'.format(resp.status_code))
            if resp.status_code != 200 :
                #re_arr.append (resp.status_code)
                return resp.status_code
            else :
                #print(resp.content)
                re_arr.append (resp.json())

        print (re_arr)
        return re_arr



app = Flask(__name__)






from flask import request
@app.route('/postlamb', methods=['POST'])
def post():
    print ('postingg here')
    maxi =request.json['maxi']
    loops = request.json['loops']
    times = request.json['times']
    mb =  request.json['mb']
    conc =  request.json['conc']
    last4 =  request.json['last4']
    print (last4)
    objects = prime_number_lambda(maxi, loops,int(times) ,mb , conc  , last4 )  # maxi, loops , times, mb , x , mbORx  , isConcurrent , last4

    if objects == 403  :
        return jsonify( {'json' :objects}), 403
    else :
        return jsonify( {'json' :objects}), 200


from flask import render_template

@app.route('/lamb/')

def render_lambda():
    return render_template('lam.html')





if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
