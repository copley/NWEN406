
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


    print('request lambda url  : {0}'.format(rst), file = log)
    if  isConcurrent == "off":
        print (" non Concurrent  mode")
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
        print (re_arr, file = log)
        return re_arr

    else :
        print (" Concurrent  mode")
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

        print (re_arr, file = log)
        return re_arr



app = Flask(__name__)

@app.route('/getMB',methods= ['GET'])
def getMB():  #Varying the Lambda memory settings: 128MB, 256MB, 512MB and 1024MB.
    print ("getMX")
    off = []
    on = []
    for i in  [128,256,512,1024] :
        off.append (prime_number_lambda(100, 1, 10 ,i   ,"off"  , "Vvuc" ))
        on.append (prime_number_lambda(100, 1, 10 ,i ,"on"  , "Vvuc" ))

    return   jsonify({'task':[off, on ]})   #calling_lamdba(100, 1 , 20)


@app.route('/getXLoops',methods= ['GET'])
def getXLoops():   #Varying the time taken to do a computation while holding memory static: 2x, 3x, 4x and 5x.
    print ("xloops")
    off = []
    on = []
    for j in [128,256,512,1024] :
        for i in  [2,3,4,5]    :
            off.append (prime_number_lambda(100, i, 10 ,j   ,"off"  , "Vvuc" ))  #(maxi, loops , times, mb   , isConcurrent , last4  )
            #on.append (prime_number_lambda(100, i, 10 ,j ,"on"  , "Vvuc" ))

    for j in [128,256,512,1024] :
        for i in  [2,3,4,5]    :
            #off.append (prime_number_lambda(100, i, 10 ,j   ,"off"  , "Vvuc" ))  #(maxi, loops , times, mb   , isConcurrent , last4  )
            on.append (prime_number_lambda(100, i,10 ,j ,"on"  , "Vvuc" ))

    return   jsonify({'task':[off, on ]})   #calling_lamdba(100, 1 , 20)


@app.route('/getSatisfactory',methods= ['GET'])
def getSatisfactory():  # cost and performance scaled linearly with memory
    print ("getSatifactory log") 
    off = []
    for i in  [128,256,512,1024] :
        off.append (prime_number_lambda(1000000, 1, 1 , i  ,"off"  , "Vvuc" ))

    return   jsonify({'task':[off]})   #calling_lamdba(100, 1 , 20)




from flask import request
@app.route('/post', methods=['POST'])
def post():
    maxi =request.json['maxi']
    loops = request.json['loops']
    times = request.json['times']
    mb =  request.json['mb']
    conc =  request.json['conc']
    last4 =  request.json['l4']
    objects = prime_number_lambda(maxi, loops,int(times) ,mb , conc  , last4 )  # maxi, loops , times, mb , x , mbORx  , isConcurrent , last4

    if objects == 403  :
        return jsonify( {'json' :objects}), 403
    else :
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
