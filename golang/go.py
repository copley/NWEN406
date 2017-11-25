  
  
import requests

from requests_futures.sessions import FuturesSession


headers = { 'x-api-key': "8yWy3YfRRs1n2U08IVSPv5ntrouJ7cd61gJKaJVvuc"}  

rea = [] 

uturesSession = FuturesSession(max_workers=100)

fs = []
    
for i in range (100) :
       
    fs.append(uturesSession.get("https://mx8xkhlbp7.execute-api.us-east-1.amazonaws.com/prod/key-128",headers = headers))
    
for  i  in range  (100 )  :
    re  = fs[i].result()
 
    if re.status_code != 200 :
       
        print ( re.status_code)
    else :
      
        rea.append (re.json())
    
print (rea)
