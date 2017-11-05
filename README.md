


#  AWS  Lamda project
## demo url :  http://52.10.250.199:5000/project2/
## author :  Adrian Ng  (beaconwarden@gmail.com)
## setup env:
### 1.  launch Amazon Linux AMI 2017.09.0 (HVM) in EC2
### 2.  chmod 400 pem.pem
### 3.  ssh -i nwen406.pem ec2-user@ec2-35-163-140-165.us-west-2.compute.amazonaws.com
### 4.  sudo pip install flask
### 5.  sudo pip install requests-futures
### 6.  sudo yum install git 
### 6.  sudo yum install golang
### 7.  go get -u github.com/gorilla/mux  
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
 
 git clone -b a  https://github.com/AdrianNg/NWEN406.git
 
 
 sudo ssh -i nwenkey.pem ec2-user@ec2-34-236-109-188.compute-1.amazonaws.com
 
 
 http://docs.aws.amazon.com/cli/latest/userguide/installing.html
 .
 
 http://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html#use-ecr
 
 
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
 
 docker push beaconwarden/ecs1:latest
 
 
 docker login -u AWS -p eyJwYXlsb2FkIjoib1JMenMvZCtFVGsvSVVSS0dEUnEvM2ZJL29EcERsUkxNRFNXSXFTclB4NmFwZW53MXBoTTE1U0lCNWpqV29yOWxuNDcwT1cyMEFxUlNEL0lwa0k4bm5yL3VrQWZobjhKMVpvSE9PRGVQOXVFQnJHR1g4YTM3cmFDMyt0bkM2RHp1TjZwUEhwTVFOd0FPYmtlbkJ1TUtvZDJjR1p3SEVQaFQvMFMxUEtPTmxjWHZDNytteThKMFQzL3BrN0l4YWdRTXNTRzJFa3lQc0lrcmQrTzl5WFJGanUvM3JrcVFHbVN6YUI4SjBRTU96THd4ZzMzSzZJalQzYUl3TVJMRlJPY281bmVvUWhRZFJFTlVRYndVSjY3RWZadkduVHRINE9DUzk5Lzk1bEt2bnBBUEhTdjA0U1JvdU5CMGlpZjloY28ybVdScFYvN3ZlVlBkem1OTmlRQ2hKSjJiYTBlZG1nWC8yZlM1R0JNQXVXRmpTR3hjT3lFNG5yRGMycCtGT2RzZHY0V3FvclVUdHowelRnT3RVdTdiKzZvZFV4dGRSVjNkbkZDYnVRdERMVmtlbGtJMmZUOHlybGE1aDMwQU4vamZXR0YxbXM5N1hSWWd3QUc1QyszRHNBYlRZVUkxVWI0N21YeElYT1FDRHZuTXRBNitHZnVoSmNDc2lMamkvTFFtNU9wMEMybUJFRU9QR3J3ajVveXUvRkFQU0FwaHkxWDFwdWtqUlBxcUtTVG5TY0R5RmYvRWc5bjFaVGF0bHpTOWJJc3c2dmptODhhU2taOWZqd3NXdXpROVNsL1JqVUJMc3doZVVub3lwK09BcHhtaFJjRjdHWWdMTEFBOEk5RElYOWI5TkpvdDVNakZnN2JSbVMzZUZQdll6QW44Um04eVNLNkFuRWx5SSt3cVFUNnRTTW5IQlI1azk4eHFBR0kzV3NuV1hESi8zUlBrUGsrT2k4cnkyOHpFV2hVV2dueGZWVWgwTkRacjJxWXdIc2pFdm1WTGs4Y0xYeHZ3U2gwZW8xRHlIQVNOV2tVRGtubDArNGx5aFdFS2JIYVdJdnJqVTlVazd3TjVnSFlyUVJpRFRndGJDblV1KzJDemEzdTRMSTRNeCtINVJtTnpsWkVoRVZmQy9pV0RiL045U0dqN3hQNkpNSHEwOVRnYXU4NFFVQ2ZrQXFrUGkwTk9nbEx2VmZVK09wM2REd25xRWx5YlpLd0srcVVMcStOV3ZBTUtUOVlEMUM4emxuZ3NoMnFlem84Nm9WN0ZBZTZ1N1VsSVl4RStYL2pyL1dyS0VHOUZJMmhPSkt5SU5UQTBYRGpFemNLMld4K3F5WE9VMk8zVk5zMFJhN3ZuSGw3UG40eVJrR0tLWDQxUWlPUHk3YTF5QVhqZ2x2MFd4TjB0a1VxTlFYaXN4dFROQWpUT01jZGJDQ2ZZTWNCUUR5dlk4OHE0dWhVV2s0U1R6dDFXQjE4YzRTMVFkZmUiLCJkYXRha2V5IjoiQVFFQkFIajZsYzRYSUp3LzdsbjBIYzAwRE1lazZHRXhIQ2JZNFJJcFRNQ0k1OEluVXdBQUFINHdmQVlKS29aSWh2Y05BUWNHb0c4d2JRSUJBREJvQmdrcWhraUc5dzBCQndFd0hnWUpZSVpJQVdVREJBRXVNQkVFRE4xNlI2SHFPYmRsQTN5WTFnSUJFSUE3a3FkSUFiMW15SzhoN05HS2dxdzVxTGExL1hZVE9UdHVFeVU3TjBlR2V3NDYvMnN0K1Z5YTF0RnEvaEwrM1duaDRxNE9uTGR0cmJVUlV5ST0iLCJ2ZXJzaW9uIjoiMiIsInR5cGUiOiJEQVRBX0tFWSIsImV4cGlyYXRpb24iOjE1MDk4ODEwMDZ9 https://322772852843.dkr.ecr.us-west-2.amazonaws.com