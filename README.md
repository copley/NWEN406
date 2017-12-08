# AWS EC2 setup env:  
1.  launch Amazon Linux AMI 2017.09.0 (HVM) in EC2    
2.  chmod 400 pem.pem    
3.  sudo ssh -i nwen406.pem ec2-user@ec2-52-64-15-213.ap-southeast-2.compute.amazonaws.com  
4.  sudo yum install git   

# git  
git checkout -b adrian  
git push --set-upstream origin adrian  
git checkout -b adrian    
git push --set-upstream origin adrian    
git add .  
git commit -m 'msg'  
git push  
git checkout master  
git merge adrian  
git push  
sudo git config credential.helper store    
sudo git push https://github.com/repo.git    

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

docker rm $(docker ps -a -q)
docker rmi $(docker images | grep "^<none>" | awk "{print $3}")



## C9 container
https://hub.docker.com/r/kdelfour/cloud9-docker/      
docker pull kdelfour/cloud9-docker      
docker run -it -d -p 80:80 -v /home/ec2-user/:/c9workspace/ kdelfour/cloud9-docker     

## reference : 
https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask    
http://www.chartjs.org/docs/latest/getting-started/usage.html    
http://flask.pocoo.org/docs/0.12/quickstart/#rendering-templates    
http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html    
https://github.com/jconning/lambda-cpu-cost    
https://gist.github.com/Daniel-Hug/7273430  
http://docs.aws.amazon.com/cli/latest/userguide/installing.html  
https://docs.docker.com/engine/examples/dotnetcore/#create-a-dockerfile-for-an-aspnet-core-application  
https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html     