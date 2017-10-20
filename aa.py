import requests


def calling_lamdba(maxi , loops  , times ) :

    for i in range (times) :
        r = requests.get('https://ap67kllfq6.execute-api.us-east-1.amazonaws.com/prod/eratosthenes-128?max='+str(maxi)+'&loops='+ str(loops))
        print (r.json())



calling_lamdba(1000000 , 1  , 100 )
