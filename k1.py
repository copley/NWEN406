
#!flask/bin/python
from __future__ import print_function
from flask import Flask,jsonify
import requests

from requests_futures.sessions import FuturesSession



lambdawebapp = Flask(__name__)

from flask import request
@lambdawebapp.route('/k1post', methods=['POST'])
def k1post():
  
    returnobj = call_aws_lambda(request.json['maxi'], request.json['loops']   ,int( request.json['times']) ,request.json['mb']  , request.json['conc']  , request.json['l4'] ) 

    if returnobj == 403  :
        return jsonify( {'response' :returnobj}), 403
    else :
        return jsonify( {'response' :returnobj}), 201


from flask import render_template

@lambdawebapp.route('/k1/')

def k1():
    return render_template('k1.html')



if __name__ == '__main__':
    lambdawebapp.run(debug=True,host='0.0.0.0')





def non_concurent_call (times, rs ,apikey , arrr  ,l  ):
    
    for i in range (times) :
    
        responses = requests.get(rs, headers = {'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJ"+ apikey})
        rt = responses.json()
        if responses.status_code != 200 :
         
            return responses.status_code
        else :
           
            arrr.append (rt)
    print (arrr, file = l)
    return arrr    
    
    

def Concurrent_call  (times, rs ,apikey  , arrr ,fs,  l) :
   
    return_a = []
    for i in range (times) :
      
        return_a.append(fs.get(rs,headers = {'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJ"+ apikey}))

    for  i  in range  (times )  :
        responses  = return_a[i].result()
     
        if responses.status_code != 200 :
        
            return responses.status_code
        else :
        
            arrr.append (responses.json())

    print (arrr, file = l)
    return arrr    
    
    


def call_aws_lambda(maxi, loops , times, mb  , concurrent_MODE , apikey  ) :

    arrr    = []
    fu_session = FuturesSession(max_workers=100)

    logf = open("xmb.log", "w")

    request_string  =  'https://nx106w1z0e.execute-api.us-west-2.amazonaws.com/prod/'+ str(mb) +'mb'+ '?max='+str(maxi)+'&loops='+ str(loops)

    print(' lambda address  : {0}'.format(request_string), file = logf)
    if  concurrent_MODE == "on":
        Concurrent_call (times ,request_string  , apikey   ,   arrr  , fu_session ,logf )  
    else :
        non_concurent_call (times , request_string , apikey ,  arrr ,logf ) 

    return  arrr
    
    






