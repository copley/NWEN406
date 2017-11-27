from __future__ import print_function
import time
from flask import Flask, render_template, flash, redirect, request, url_for,jsonify
from flask_sqlalchemy import SQLAlchemy#,sessionmake
from sqlalchemy import text
import sys
from flask_cors import CORS, cross_origin

import requests
import os
from requests_futures.sessions import FuturesSession
DBUSER = 'marco'
DBPASS = 'foobarbaz'
DBHOST = 'database'
DBPORT = '5432'
DBNAME = 'testdb'


log = open("xmb.log", "w")
def prime_number_lambda(maxi, loops , times, mb  , isConcurrent , last4  ) :
    headers = {
        'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJ"+last4,   #Vvuc
    }
    re_arr  = []
    session = FuturesSession(max_workers=100)
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
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.sqlite3'
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = \
    'postgresql+psycopg2://{user}:{passwd}@{host}:{port}/{db}'.format(
        user=DBUSER,
        passwd=DBPASS,
        host=DBHOST,
        port=DBPORT,
        db=DBNAME)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'foobarbaz'


db = SQLAlchemy(app)


class students(db.Model):
    id = db.Column('student_id', db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    city = db.Column(db.String(50))
    addr = db.Column(db.String(200))

    def __init__(self, name, city, addr):
        self.name = name
        self.city = city
        self.addr = addr


def database_initialization_sequence():
    db.create_all()
    test_rec = students(
            'John Doe',
            'Los Angeles',
            '123 Foobar Ave')

    db.session.add(test_rec)
    db.session.rollback()
    db.session.commit()


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        if not request.form['name'] or not request.form['city'] or not request.form['addr']:
            flash('Please enter all the fields', 'error')
        else:
            student = students(
                    request.form['name'],
                    request.form['city'],
                    request.form['addr'])

            db.session.add(student)
            db.session.commit()
            flash('Record was succesfully added')
            return redirect(url_for('home'))
    return render_template('show_all.html', students=students.query.all())
    
    
    
@app.route ('/sql',methods=['POST'])
def sql_lab ():
    sqlstring =  request.json['sqlStatement']
    print ("sqlstring",file=sys.stderr)
    print (sqlstring,file=sys.stderr)#sql = text('select * from students')
    sql = text (sqlstring )
    result = db.engine.execute(sql)
    table = []
    #print('This query  output:', file=sys.stderr) #   print ('result : ')
    print (result, file=sys.stderr)
    i=0
    for row in result:
        table_row = {} 
        i= i+1 
        r = {} 
        rstring = ""
        for column in row :
            print ("column", file=sys.stderr)
            print (column, file=sys.stderr)
            rstring = rstring + '|'+ str(column)
            r['row']= rstring
        table_row[str(i)] = r 
        table.append(r)
    print (table,file=sys.stderr)
    return jsonify( table)
    
@app.route ('/get',methods=['GET'])
def get ():

    sql = text('select * from students')
    #sql = text (sqlstring )
    result = db.engine.execute(sql)
    table = []
    #print('This query  output:', file=sys.stderr) #   print ('result : ')
    print (result)
    for row in result:
        table_row = {} 
        for column in row :
            table_row['c1']=column
        table.append(table_row)
    #print (table,file=sys.stderr)
    return jsonify( table)






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
    return   jsonify([off, on ])   #calling_lamdba(100, 1 , 20)


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

    return   jsonify([off, on ])   #calling_lamdba(100, 1 , 20)


@app.route('/getSatisfactory',methods= ['GET'])
def getSatisfactory():  # cost and performance scaled linearly with memory
    print ("getSatifactory log", file = log) 
    off = []
    for i in  [1024 ,  256 , 512, 128] :
        off.append (prime_number_lambda(10, 1, 1 , i  ,"off"  , "Vvuc" ))

    return   jsonify(off)   #calling_lamdba(100, 1 , 20)
    
    
    
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
        return jsonify( objects), 403
    else :
        return jsonify( objects), 201
        
        

    
if __name__ == '__main__':
    dbstatus = False
    while dbstatus == False:
        try:
            db.create_all()
        except:
            time.sleep(2)
        else:
            dbstatus = True
    database_initialization_sequence()
    app.run(debug=True, host='0.0.0.0')

