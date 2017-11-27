# Basic flask container

FROM fanoftal2/flask-crud-base:1

ADD ./app /home/app/
WORKDIR /home/app/
RUN pip install -U flask-cors && \
    pip install --upgrade pip && \
    pip install requests-futures
EXPOSE 5000

ENTRYPOINT ["python3", "app.py"]
