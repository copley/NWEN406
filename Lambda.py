
#!flask/bin/python
from __future__ import print_function
from flask import Flask,jsonify
from flask_cors import CORS, cross_origin
import requests
import os
#os.getenv('PORT','5000')
#os.getenv('IP','0.0.0.0')

from requests_futures.sessions import FuturesSession

log = open("xmb.log", "w")
def prime_number_lambda(maxi, loops , times, mb  , isConcurrent , last4  ) :
    headers = {
        'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJ"+last4,   #Vvuc
    }
    re_arr  = []
    session = FuturesSession(max_workers=100)


  #   # log = open("xmb.log", "w")


    rst =  'https://nx106w1z0e.execute-api.us-west-2.amazonaws.com/prod/'+ str(mb) +'mb' + '?max='+str(maxi)+'&loops='+ str(loops)
    
    
    print('sending the lambda url  : {0}'.format(rst))
    if  isConcurrent == "off":
        #print (" nonConcurrentmode")
        for i in range (times) :
            #rt = requests.get(rst).json()
            resp = requests.get(rst, headers = headers, verify=False)
            rt = resp.json()
    
            if resp.status_code != 200 :
                print ("resp.status_code")
                #print (rt)
                return resp.status_code
            else :
                #print (rt)
                re_arr.append (rt)
        print (re_arr, file = log)
        return re_arr

    else :
        print (" Concurrentmode")
        sgl = []
        for i in range (times) :
            ##sgl.append(session.get(rst))
            sgl.append(session.get(rst,headers = headers  ,verify=False))
            
        for  i  in range  (times )  :
            resp  = sgl[i].result()
            print (resp.status_code)
            #print('response one status: {0}'.format(resp.status_code))
            if resp.status_code != 200 :
                #re_arr.append (resp.status_code)
                return resp.status_code
            else :
                #print(resp.content)
                re_arr.append (resp.json())

        print (re_arr, file = log)
        return re_arr



app = Flask(__name__)
CORS(app)
@app.route('/getMB',methods= ['GET'])
def getMB():  #Varying the Lambda memory settings: 128MB, 256MB, 512MB and 1024MB.
    print ("getMX")
    off = []
    on = []
    print (" nonCon", file = log)
    for i in  [128,256,512,1024] :
        off.append (prime_number_lambda(100, 1, 10 ,i   ,"off"  , "Vvuc" ))
        # on.append (prime_number_lambda(100, 1, 10 ,i ,"on"  , "Vvuc" ))
    print (" Concu", file = log)
    for i in  [128,256,512,1024] :
        on.append (prime_number_lambda(100, 1, 10 ,i ,"on"  , "Vvuc" ))
    return   jsonify({'task':[off, on ]})   #calling_lamdba(100, 1 , 20)


@app.route('/getXLoops',methods= ['GET'])
def getXLoops():   #Varying the time taken to do a computation while holding memory static: 2x, 3x, 4x and 5x.
    print ("xloops")
    off = []
    on = []
    print (" nonCon" , file = log)
    for j in [128,256,512,1024] :
        for i in  [2,3,4,5]    :
            off.append (prime_number_lambda(100, i, 10 ,j   ,"off"  , "Vvuc" ))  #(maxi, loops , times, mb   , isConcurrent , last4  )
            #on.append (prime_number_lambda(100, i, 10 ,j ,"on"  , "Vvuc" ))
    print (" Concur", file = log)
    for j in [128,256,512,1024] :
        for i in  [2,3,4,5]    :
            #off.append (prime_number_lambda(100, i, 10 ,j   ,"off"  , "Vvuc" ))  #(maxi, loops , times, mb   , isConcurrent , last4  )
            on.append (prime_number_lambda(100, i,10 ,j ,"on"  , "Vvuc" ))

    return   jsonify({'task':[off, on ]})   #calling_lamdba(100, 1 , 20)


@app.route('/getSatisfactory',methods= ['GET'])
def getSatisfactory():  # cost and performance scaled linearly with memory
    print ("getSatifactory log", file = log) 
    off = []
    for i in  [1024 ,  256 , 512, 128] :
        off.append (prime_number_lambda(10, 1, 1 , i  ,"off"  , "Vvuc" ))

    return   jsonify({'task':[off]})   #calling_lamdba(100, 1 , 20)

















if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
    # app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))
