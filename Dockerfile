FROM node:10.13.0
LABEL mainainer="hieki <ksakahieki@gmail.com>"

ENV NYKK_ROOT /usr/src/nykk-btn
WORKDIR $NYKK_ROOT

COPY ./package.json $NYKK_ROOT
COPY ./package-lock.json $NYKK_ROOT

RUN npm --version && \
    npm install
