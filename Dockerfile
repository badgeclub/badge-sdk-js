FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y apt-utils
RUN apt-get install -y curl unzip jq

RUN mkdir /build

COPY .script /script

VOLUME /artifacts

CMD /script/build.sh
