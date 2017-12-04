# Basic flask container

FROM alpine:3.7


ADD ./app /home/app/
WORKDIR /home/app/
RUN apk add --no-cache postgresql-dev gcc python3 python3-dev musl-dev py-pip nginx uwsgi uwsgi-python py2-pip && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    rm -r /root/.cache && \
    pip install -U flask-cors && \
    pip install --upgrade pip && \
    pip2 install requests && \
    pip3 install requests && \
    pip install requests-futures && \
    pip2 install requests-futures && \
    pip3 install requests-futures && \
    pip2 install --upgrade pip && \
    pip3 install flask && \
    pip3 install flask-sqlalchemy && \
    pip3 install psycopg2 && \
    pip3 install flask-cors 
    
    
 
    
EXPOSE 5000

ENTRYPOINT ["python3", "app.py"]
