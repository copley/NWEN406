import requests
from requests_futures.sessions import FuturesSession

def call_awsl(maxi, loops , mb    ) :
    headers = {
        'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJVvuc"
    }
    re_arr  = []
    session = FuturesSession(max_workers=100)
    print (session)


    rst =  'https://ap67kllfq6.execute-api.us-east-1.amazonaws.com/prod/eratosthenes-'+ str(mb) + '?max='+str(maxi)+'&loops='+ str(loops)


    print('request lambda url  : {0}'.format(rst))

    sgl = []
    for i in range (2) :
        ##sgl.append(session.get(rst))
        sgl.append(session.get(rst,headers = headers))

    for  i  in range  (2 )  :
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



#app = Flask(__name__)



##if __name__ == '__main__':
    ##app.run(debug=True,host='0.0.0.0')
call_awsl(100, 1 ,128    )
