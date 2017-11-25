# Basic flask container

FROM fanoftal2/flask-crud-base:1

ADD ./app /home/app/
WORKDIR /home/app/
RUN pip install -U flask-cors
EXPOSE 5000

ENTRYPOINT ["python3", "app.py"]
