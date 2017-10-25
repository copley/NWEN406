


#  AWS  Lamda project
## demo url :  http://52.10.250.199:5000/project2/
## author :  Adrian Ng  (beaconwarden@gmail.com)
## setup env:
### 1.  launch Amazon Linux AMI 2017.09.0 (HVM) in EC2
### 2.  chmod 400 pem.pem
### 3.  ssh -i nwen406.pem ec2-user@ec2-52-39-107-48.us-west-2.compute.amazonaws.com
### 4.  sudo pip install flask
### 5.  sudo pip install requests-futures
### 6.  sudo yum install git 
## Run the Web APP :   python Lambda.py

## requiremnt :  
## reference : https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
## http://www.chartjs.org/docs/latest/getting-started/usage.html
## http://flask.pocoo.org/docs/0.12/quickstart/#rendering-templates
## http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html
## https://github.com/jconning/lambda-cpu-cost
## https://gist.github.com/Daniel-Hug/7273430




pip install awscli --upgrade --user
~/.local/bin/aws configure
~/.local/bin/aws  lambda invoke --function-name="eratosthenes-1024" --payload='{ "queryStringParameters": { "max": 1000000, "loops": 1 } }' ./log.txt

Copyright © Victoria University of Wellington, New Zealand



#nohup python Lambda.py >> xmb.log &
rm -r mydir

https://groups.google.com/forum/#!topic/golang-nuts/qTk0QG00lTI




-git checkout -b adrian
 -git push --set-upstream origin adrian
 +##### git checkout -b bb
 +##### git push --set-upstream origin bb
 +
 +##### git add .
 +##### git commit -m 'msg'
 +##### git push
 +##### git checkout master
 +##### git merge adrian
 +##### git push
 
 git clone -b my-branch https://git@github.com/username/myproject.git