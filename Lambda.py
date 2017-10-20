
#!flask/bin/python
from flask import Flask,jsonify
import requests

from requests_futures.sessions import FuturesSession

def prime_number_lambda(maxi, loops , times, mb , isConcurrent ) :
    headers = {
        'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJVvuc",
    }
    re_arr  = []
    session = FuturesSession(max_workers=100)

    #rst =  'https://a4i8lwlp90.execute-api.us-west-2.amazonaws.com/prod/eratosthenes-'+str(mb)+'?max='+str(maxi)+'&loops='+ str(loops)
    rst = 'https://nx106w1z0e.execute-api.us-west-2.amazonaws.com/prod/lambda-'+str(mb)+'?max='+str(maxi)+'&loops='+ str(loops)
    print('request lambda url  : {0}'.format(rst))
    if  isConcurrent == "off":
        print (" non Concurrent  mode")
        for i in range (times) :
            #rt = requests.get(rst).json()
            rt = requests.get(rst, headers = headers).json()
            print (rt)
            re_arr.append (rt)
        print (re_arr)
        return re_arr

    else :
        print (" Concurrent  mode")
        sgl = []
        for i in range (times) :
            sgl.append(session.get(rst))
            #sgl.append(session.get(rst,headers = headers))

        for  i  in range  (times )  :
            resp  = sgl[i].result ()
            print('response one status: {0}'.format(resp.status_code))
            print(resp.content)
            re_arr.append (resp.content)
        print (re_arr)
        return re_arr



app = Flask(__name__)

@app.route('/get',methods= ['GET'])
def get():

    return   jsonify({'task':''})   #calling_lamdba(100, 1 , 20)




from flask import request
@app.route('/post', methods=['POST'])
def post():
    maxi =request.json['maxi']
    loops = request.json['loops']
    times = request.json['times']
    mb =  request.json['mb']
    conc =  request.json['conc']
    objects = prime_number_lambda(maxi, loops,int(times) ,mb ,conc )
    return jsonify( {'json' :objects}), 201







from flask import render_template

@app.route('/lambda/')

def render_lambda():
    return render_template('lambda.html')

@app.route('/project2/')

def project2():
    return render_template('project2.html')




if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
