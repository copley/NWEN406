FROM alpine:3.5






LABEL "com.example.vendor"="ACME Incorporated"
LABEL com.example.label-with-value="foo"
LABEL version="1.0"
LABEL description="This text illustrates \
that label-values can span multiple lines."


RUN apk add --no-cache bash git nginx uwsgi uwsgi-python py2-pip \
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

CMD [ "lam.py" ]

