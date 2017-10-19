
#!flask/bin/python
from flask import Flask,jsonify
import requests







from requests_futures.sessions import FuturesSession








def prime_number_lambda(maxi, loops , times, mb , isConcurrent ) :  
    re_arr  = []
    #load_url("https://a4i8lwlp90.execute-api.us-west-2.amazonaws.com/prod/eratosthenes-"+str(mb)+'?max='+str(maxi)+'&loops='+ str(loops)  ) 
    session = FuturesSession()
    rst = 'https://a4i8lwlp90.execute-api.us-west-2.amazonaws.com/prod/eratosthenes-'+str(mb)+'?max='+str(maxi)+'&loops='+ str(loops)
    if  isConcurrent is not True :
        
        for i in range (times) :
            rt = requests.get(rst)
            print (rst)
            re.append (rt)
        print (re)
        return re
    
    else :
    
        for i in range (times) :
    
            sg = session.get(rst)
            resp  = sg.result ()
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
    objects = prime_number_lambda(maxi, loops,int(times) ,mb ,True )
    return jsonify( {'json' :objects}), 201







from flask import render_template

@app.route('/lambda/')
@app.route('/lambda/<name>')
def hello(name=None):
    return render_template('lambda.html', name="a")



if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

