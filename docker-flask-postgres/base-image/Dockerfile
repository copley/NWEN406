# Base image for flask REST api tutorial

FROM alpine:3.70

ADD requirements.txt /home/app/
WORKDIR /home/app/


<<<<<<< HEAD
RUN apk add --update --no-cache postgresql=10 gcc python3 python3-dev musl-dev && \
=======
RUN apk add --update --no-cache postgresql gcc python3 python3-dev musl-dev && \
>>>>>>> 16bd9f01bd09e9722f995c9a645f2c7308df7a34
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    rm -r /root/.cache && \
    pip3 install -U flask-cors && \
    pip2 install --upgrade pip && \
    pip2 install requests-futures && \
    pip3 install -r requirements.txt
