# Architect overview:  Ng5 is running on Nodejs server hosted on C9.io  and it is marking REST API call to the .NET core and Python Flask API web servers which both are hosted on EC2 docker containers. 
## This is a headless web application which means fully RESTful and no views are returning from C# or python codes, instead, views are rendered by the Ng5 SPA. The front end and back end communicate only through REST API endpoint JSON data traffic. 
### Python is in docker-flask-postgres folder. start the NG app in C9 via sudo ng serve -p 8080 -H 0.0.0.0 --public-host headless-adrianng.c9users.io
### .NET is in dockernet folder. 
### Augular5 is in Ng406 folder. 

















#  AWS  Lamda project
demo url :  http://52.10.250.199:5000/project2/  
author :  Adrian Ng  (beaconwarden@gmail.com)  
setup env:  
1.  launch Amazon Linux AMI 2017.09.0 (HVM) in EC2  
2.  chmod 400 pem.pem  
3.  sudo ssh -i nwen406.pem ec2-user@ec2-35-163-140-165.us-west-2.compute.amazonaws.com  
4.  sudo pip install flask  
5.  sudo pip install requests-futures   pip install -U flask-cors  
6.  sudo yum install git   
6.  sudo yum install golang  
7.  go get -u github.com/gorilla/mux    
8. #nohup python Lambda.py >> xmb.log &  get log file   
https://pypi.python.org/pypi/Flask-Cors  
Run the Web APP :   python Lambda.py    http://52.39.107.48:5000/lambda/  
Run the Web APP :   go run 406.go    http://52.39.107.48:8000/edit/  
requiremnt :    
reference : https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask  
http://www.chartjs.org/docs/latest/getting-started/usage.html  
http://flask.pocoo.org/docs/0.12/quickstart/#rendering-templates  
http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html  
https://github.com/jconning/lambda-cpu-cost  
https://gist.github.com/Daniel-Hug/7273430  

ssh -i nwen406.pem ec2-user@ec2-34-236-109-188.compute-1.amazonaws.com


pip install awscli --upgrade --user
~/.local/bin/aws configure
~/.local/bin/aws  lambda invoke --function-name="eratosthenes-1024" --payload='{ "queryStringParameters": { "max": 1000000, "loops": 1 } }' ./log.txt

Copyright © Victoria University of Wellington, New Zealand






https://groups.google.com/forum/#!topic/golang-nuts/qTk0QG00lTI


# git  

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
 
git config credential.helper store  
git push https://github.com/repo.git  

git clone -b a  https://github.com/AdrianNg/NWEN406.git  
 
# Docker on EC2 AMI :
sudo yum update -y  
sudo yum install -y docker  
sudo service docker start  
sudo usermod -a -G docker ec2-user  
reboot instance   
docker run --rm -p 5000:5000 beaconwarden/ecs1:latest    
docker build -t ecs1 .  
docker images --filter reference=ecs1    
docker run -p 5000:5000 beaconwarden/ecs1    
docker tag bb38976d03cf beaconwarden/ecs1:latest    
docker commit containerID  beaconwarden/ecs1:latest  
docker push beaconwarden/ecs1   
docker ps   
docker images   
## C9 container
https://hub.docker.com/r/kdelfour/cloud9-docker/      
docker pull kdelfour/cloud9-docker      
docker run -it -d -p 80:80 -v /home/ec2-user/:/workspace/ kdelfour/cloud9-docker     
https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html  

 
 
 https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html
 sudo ssh -i nwenkey.pem ec2-user@ec2-34-236-109-188.compute-1.amazonaws.com
 
 
# installl java 8
 sudo wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie"  "http://download.oracle.com/otn-pub/java/jdk/8u151-b12/e758a0de34e24606bca991d704f6dcbf/jre-8u151-linux-x64.tar.gz" 
 http://www.techoism.com/install-java-8-on-centosrhel-65/
replace jdk with jre
sudo alternatives --install /usr/bin/jar jar /opt/jre1.8.0_151/bin/jar 2
sudo alternatives --install /usr/bin/javac javac /opt/jre1.8.0_151/bin/javac 2
sudo alternatives --install /usr/bin/javaws javaws /opt/jre1.8.0_151/bin/javaws 2
sudo alternatives --set jar /opt/jre1.8.0_151/bin/jar
sudo alternatives --set javac /opt/jre1.8.0_151/bin/javac
 

# installin jenkins 
 http://linuxtechlab.com/install-jenkins-on-centos-rhel-7/
sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo
sudo rpm --import http://pkg.jenkins-ci.org/redhat-stable/jenkins-ci.org.key 
 sudo yum install jenkins
 sudo service jenkins start
 
 
 http://docs.aws.amazon.com/cli/latest/userguide/installing.html
 
 
 



https://docs.docker.com/engine/examples/dotnetcore/#create-a-dockerfile-for-an-aspnet-core-application