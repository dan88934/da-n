FROM golang:1.18-bullseye

ENV GO111MODULE=on

WORKDIR /da-n

COPY back-end /back-end
COPY front-end /front-end

WORKDIR /back-end

RUN go mod download

RUN go build -o app

EXPOSE 8080

CMD [ "./app" ]
