import time
from flask import Flask, render_template, flash, redirect, request, url_for,jsonify
from flask_sqlalchemy import SQLAlchemy#,sessionmake
from sqlalchemy import text
import sys
from flask_cors import CORS, cross_origin

DBUSER = 'marco'
DBPASS = 'foobarbaz'
DBHOST = 'database'
DBPORT = '5432'
DBNAME = 'testdb'


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
def delete ():

    sqlstring =  request.json['sqlStatement']
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
        r = [] 
        for column in row :
            print ("column", file=sys.stderr)
            print (column, file=sys.stderr)
            r.append (column)
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

