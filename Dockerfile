FROM alpine:3.5

ARG DOCKER_GID=993

RUN groupadd -g ${DOCKER_GID} docker 

RUN useradd -m -d /home/jenkins -s /bin/sh jenkins \
  && usermod -aG docker jenkins

RUN apk add --no-cache bash git  uwsgi uwsgi-python py2-pip \
	&& pip2 install --upgrade pip \
	&& pip2 install flask \
	&& pip2 install requests-futures
#RUN apk add update  && \
#    apt add  python-pip python-dev
# https://runnable.com/docker/python/dockerize-your-flask-application
# We copy just the requirements.txt first to leverage Docker cache

#COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

#RUN pip install -r requirements.txt
#RUN pip install requests-futures
COPY . /app

ENTRYPOINT [ "python" ]

CMD [ "Lambda.py" ]
