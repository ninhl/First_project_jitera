FROM public.ecr.aws/x7d8b6z0/jitera-node-16-alpine

COPY . /app

WORKDIR /app

RUN yarn initial

RUN yarn build:production

EXPOSE 80
