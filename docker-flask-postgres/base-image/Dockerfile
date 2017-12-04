# Base image for flask REST api tutorial

FROM alpine:3.70

ADD requirements.txt /home/app/
WORKDIR /home/app/


RUN apk add --update --no-cache postgresql>10.1-r1 gcc python3 python3-dev musl-dev && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    rm -r /root/.cache && \
    pip3 install -U flask-cors && \
    pip2 install --upgrade pip && \
    pip2 install requests-futures && \
    pip3 install -r requirements.txt
