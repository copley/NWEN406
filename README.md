sudo ng serve -p 8080 -H 0.0.0.0 --public-host ng5-adrianng.c9users.io
http://35.163.140.165:1114/
http://ng5-adrianng.c9users.io/NWEN406/angularjs/index.html#/rawsql

#  AWS  Lamda project
## demo url :  http://52.10.250.199:5000/project2/
## author :  Adrian Ng  (beaconwarden@gmail.com)
## setup env:
### 1.  launch Amazon Linux AMI 2017.09.0 (HVM) in EC2
### 2.  chmod 400 pem.pem
### 3.  sudo ssh -i nwen406.pem ec2-user@ec2-35-163-140-165.us-west-2.compute.amazonaws.com
### 4.  sudo pip install flask
### 5.  sudo pip install requests-futures   pip install -U flask-cors
### 6.  sudo yum install git 
### 6.  sudo yum install golang
### 7.  go get -u github.com/gorilla/mux  
### 8. #nohup python Lambda.py >> xmb.log &  get log file 
### https://pypi.python.org/pypi/Flask-Cors
## Run the Web APP :   python Lambda.py    http://52.39.107.48:5000/lambda/
## Run the Web APP :   go run 406.go    http://52.39.107.48:8000/edit/
## requiremnt :  
## reference : https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
## http://www.chartjs.org/docs/latest/getting-started/usage.html
## http://flask.pocoo.org/docs/0.12/quickstart/#rendering-templates
## http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html
## https://github.com/jconning/lambda-cpu-cost
## https://gist.github.com/Daniel-Hug/7273430

ssh -i nwen406.pem ec2-user@ec2-34-236-109-188.compute-1.amazonaws.com


pip install awscli --upgrade --user
~/.local/bin/aws configure
~/.local/bin/aws  lambda invoke --function-name="eratosthenes-1024" --payload='{ "queryStringParameters": { "max": 1000000, "loops": 1 } }' ./log.txt

Copyright © Victoria University of Wellington, New Zealand


$ git config credential.helper store
$ git push https://github.com/repo.git

Username for 'https://github.com': <USERNAME>
Password for 'https://USERNAME@github.com': <PASSWORD>



https://groups.google.com/forum/#!topic/golang-nuts/qTk0QG00lTI


# git branching 

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
 .
 
 http://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html#use-ecr
 http://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html
 
 To install the AWS CLI and Docker and for more information on the steps below, visit the ECR documentation page.
1) Retrieve the docker login command that you can use to authenticate your Docker client to your registry: 
Note: 
If you receive an "Unknown options: --no-include-email" error, install the latest version of the AWS CLI. Learn more
aws ecr get-login --no-include-email --region us-west-2

2) Run the docker login command that was returned in the previous step. 
Note: 
If you are using Windows PowerShell, run the following command instead.
Invoke-Expression -Command (aws ecr get-login --no-include-email --region us-west-2)

3) Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here. You can skip this step if your image is already built:
docker build -t ecs1 .

4) After the build completes, tag your image so you can push the image to this repository:
docker tag ecs1:latest 322772852843.dkr.ecr.us-west-2.amazonaws.com/ecs1:latest
docker pull beaconwarden/ecs1

sudo docker tag ecs1:latest beaconwarden/ecs1:latest


5) Run the following command to push this image to your newly created AWS repository:
docker push 322772852843.dkr.ecr.us-west-2.amazonaws.com/ecs1:latest



https://docs.docker.com/engine/examples/dotnetcore/#create-a-dockerfile-for-an-aspnet-core-application