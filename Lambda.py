
#!flask/bin/python
from flask import Flask,jsonify
import requests

def prime_number_lambda(maxi, loops , times, mb  ) :  
    re  = []
    #load_url("https://a4i8lwlp90.execute-api.us-west-2.amazonaws.com/prod/eratosthenes-"+str(mb)+'?max='+str(maxi)+'&loops='+ str(loops)  ) 
    for i in range (times) :
        rst = 'https://a4i8lwlp90.execute-api.us-west-2.amazonaws.com/prod/eratosthenes-'+str(mb)+'?max='+str(maxi)+'&loops='+ str(loops)
        rt = requests.get(rst)
        print (rst)
        re.append (rt.json())
    print (re)
    return re



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
    objects = prime_number_lambda(maxi, loops,int(times) ,mb )
    return jsonify( {'json' :objects}), 201







from flask import render_template

@app.route('/lambda/')
@app.route('/lambda/<name>')
def hello(name=None):
    return render_template('lambda.html', name="a")



if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')

