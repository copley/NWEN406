https://github.com/kdelfour/cloud9-docker
https://github.com/dotnet/dotnet-docker-samples/tree/master/aspnetapp
```console
cd aspnetapp
docker build -t aspnetapp .
docker run -it --rm -p 8000:80 --name aspnetcore_sample aspnetapp
```
